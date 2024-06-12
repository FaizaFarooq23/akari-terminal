/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import searchIcon from '../../../assets/icons/app-icon/search-icon.svg';
import notificationBell from '../../../assets/icons/app-icon/notification-bell.svg';
import accountIcon from '../../../assets/icons/app-icon/account-icon.svg';
import arrowDown from '../../../assets/icons/app-icon/arrow-head-down.svg';
import hamburger from '../../../assets/icons/app-icon/ham-burger.svg';
import dash from '../../../assets/icons/app-icon/sidebar-icons/dash-icon.svg';
import auto from '../../../assets/icons/app-icon/sidebar-icons/autolisting-icon.svg';
import acc from '../../../assets/icons/app-icon/sidebar-icons/account-manager-icon.svg';
import csv from '../../../assets/icons/app-icon/sidebar-icons/csv-icon.svg';
import setting from '../../../assets/icons/app-icon/sidebar-icons/setting.svg';
import signout from '../../../assets/icons/app-icon/sidebar-icons/signout.svg';
import discordGrey from '../../../assets/icons/app-icon/sidebar-icons/discord-grey.svg';
import twitterGrey from '../../../assets/icons/app-icon/sidebar-icons/twitter-grey.svg';
import akira from '../../../assets/icons/app-icon/sidebar-icons/akari-logo.svg';
import cross from '../../../assets/icons/app-icon/cross-icon.svg';

import Sidebar from './sidebar';

import style from './layout.module.scss';

const Layout = ({ pageTitle, children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUrl = location.pathname;

  const [openMenu, setOpenMenu] = useState(false);

  const routes = [
    { path: '/', label: 'Dashboard', icon: dash },
    { path: '/auto-listing', label: 'Auto Listing', icon: auto },
    { path: '/account-manager', label: 'Account Manager', icon: acc },
    { path: '/csv', label: 'CSV Import/Export', icon: csv },
    { path: '/settings', label: 'Settings', icon: setting },
    { path: '/login', label: 'Sign Out', icon: signout },
  ];

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleNavigation = (path: To) => {
    navigate(path);
  };
  return (
    <main className={style.mainLayout}>
      <div className={style.topHeader}>
        <div className={style.hamBurger}>
          <img src={hamburger} alt="ham-burger-icon" onClick={handleOpenMenu} />
          <div className={`${openMenu && style.navMenuShow} ${style.navMenu}`}>
            <div className={style.crossDiv}>
              <img
                src={cross}
                onClick={() => setOpenMenu(false)}
                alt="cross-icon"
              />
            </div>
            {routes.map((route) => (
              <div
                key={route.path}
                onClick={() => handleNavigation(route.path)}
                className={`${currentUrl === route.path ? style.active : ''} ${
                  style.page
                }`}
              >
                <img src={route.icon} alt={`${route.label}Icon`} />
                <span>{route.label}</span>
              </div>
            ))}
            <div className={style.iconDiv}>
              <img src={discordGrey} alt="discord-grey" />
              <img src={twitterGrey} alt="twitter-grey " />
            </div>
          </div>
        </div>
        <div className={style.title}>
          <h1>{pageTitle || 'Page title'}</h1>
        </div>
        <div className={style.search}>
          <img src={searchIcon} alt="searchIcon" />
          <input placeholder="Search here..." />
        </div>
        <div className={style.topRight}>
          <div className={style.notificationBadge}>
            <div className={style.dot} />
            <img src={notificationBell} alt="notification-bell" />
          </div>
          <div className={style.accountDiv}>
            <img src={accountIcon} alt="accountIcon" />
            <span>Faizan Ali khan</span>
            <img src={arrowDown} alt="arrowDown" />
          </div>
        </div>
        <div>
          <img src={akira} alt="akira-logo" className={style.akiraTab} />
        </div>
      </div>
      <div className={style.sideBar}>
        <Sidebar routes={routes} />
      </div>
      <div className={style.childDiv}>{children}</div>
      {openMenu && (
        <div className={style.backdropDiv} onClick={() => setOpenMenu(false)} />
      )}
    </main>
  );
};

export default Layout;
