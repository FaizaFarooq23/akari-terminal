/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path, { dirname } from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { WebhookClient, EmbedBuilder } from 'discord.js';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import fs from 'node-fs';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

ipcMain.on('get-user-data', async (event, arg) => {
  console.log(arg);
  console.log(dirname(__dirname));
  let data = '';
  try {
    data = fs.readFileSync(
      path.join(dirname(__dirname), 'data', 'user.json'),
      'utf8',
    );
  } catch (error) {
    console.log(error);
    data = 'No data found';
  }
  console.log('UserData', data);
  event.reply('get-user-data', data);
});

ipcMain.on('save-user-data', async (event, arg) => {
  console.log(arg);
  fs.writeFileSync(
    path.join(dirname(__dirname), 'data', 'user.json'),
    JSON.stringify(arg),
    'utf8',
  );
});

ipcMain.on('send-webhook', async (event, arg) => {
  const embed = new EmbedBuilder()
    .setTitle('This is a simple embed title')
    .setDescription('This is a short description of the embed content.')
    .setColor(0x00ff00); // Green color in decimal format

  const client = new WebhookClient(arg);
  try {
    const response = await client.send({ embeds: [embed] });
    console.log('Response from webhook', response);
  } catch (error) {
    console.log(error);
  }
});

ipcMain.on('get-tickets-data', async (event, arg) => {
  console.log(arg);
  console.log(dirname(__dirname));
  const data = fs.readFileSync(
    path.join(dirname(__dirname), 'data', 'tickets.json'),
    'utf8',
  );
  event.reply('get-tickets-data', data);
});

ipcMain.on('save-tickets-data', async (event, arg) => {
  console.log(arg);
  fs.writeFileSync(
    path.join(dirname(__dirname), 'data', 'tickets.json'),
    JSON.stringify(arg),
    'utf8',
  );
});

ipcMain.on('append-tickets-data', async (event, arg) => {
  console.log(arg);
  const data = fs.readFileSync(
    path.join(dirname(__dirname), 'data', 'tickets.json'),
    'utf8',
  );
  const tickets = JSON.parse(data);
  for (let i = 0; i < arg.length; i++) {
    tickets[arg[i].event_id - 1].details.push(arg[i]);
  }
  fs.writeFileSync(
    path.join(dirname(__dirname), 'data', 'tickets.json'),
    JSON.stringify(tickets),
    'utf8',
  );
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload,
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    frame: false,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);
