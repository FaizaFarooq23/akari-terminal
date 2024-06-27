/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import ContentCard from '../../components/content-card';
import Layout from '../../components/layout';
import SelectBox from '../../components/select-box';
import TextField from '../../components/text-field';
import style from './settings.module.scss';

const Settings = () => {
  const options = [
    { label: '10 sec', value: 'opt1' },
    { label: '20 sec', value: 'opt2' },
    { label: '30 sec', value: 'opt3' },
    { label: '40 sec', value: 'opt4' },
    { label: '50 sec', value: 'opt5' },
    { label: '60 sec', value: 'opt6' },
  ];
  const [webhookURL, setWebhookURL] = React.useState('');
  const [seconds, setSeconds] = React.useState(0);
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeconds(parseInt(event.target.value, 10));
  };

  const token = localStorage.getItem('user');
  const tokenKey = token ? JSON.parse(token).metadata.key : '';

  const handleChange = (value: any) => {
    console.log(value);
  };

  const sendWebhook = async () => {
    console.log('Sending webhook', webhookURL);
    window.electron.ipcRenderer.sendMessage('send-webhook', {
      url: webhookURL,
    });
  };

  return (
    <Layout pageTitle="Settings">
      <div className={style.mainWrapper}>
        <ContentCard
          heading="Manage your settings."
          className={style.cardClass}
        >
          <div className={style.firstRow}>
            <TextField
              label="Key"
              type="text"
              placeholder={tokenKey}
              container={style.inputClass}
              readOnly
            />
            <div className={`${style.selectBox}`}>
              <label className={style.label}>
                Delay
                <div className={style.selectBoxInput}>
                  {' '}
                  <input
                    type="number"
                    value={seconds}
                    onChange={handleNumberChange}
                    placeholder="Enter Delay"
                    min={0}
                  />
                  <span>sec</span>
                </div>
              </label>
            </div>
          </div>
          <div>
            <TextField
              label="Webhook"
              type="text"
              placeholder="https://discord.com/api/webhooks/"
              container={style.inputClass2}
              onChange={(e) => setWebhookURL(e.target.value)}
            />
          </div>
          <div className={`${style.secondRow}`}>
            <button onClick={sendWebhook} type="button">
              Test Webhook
            </button>
            <button type="submit"> Save </button>
          </div>
        </ContentCard>
      </div>
    </Layout>
  );
};

export default Settings;
