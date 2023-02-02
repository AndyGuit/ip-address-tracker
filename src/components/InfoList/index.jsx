import React from 'react';

import styles from './IpInfo.module.scss';

const InfoList = () => {
  return (
    <div className={styles.infoListWrapper}>
      <ul className={styles.infoList}>
        <li>
          <p>ip address</p>
          <h2>192.212.174.101</h2>
        </li>
        <div className={styles.listDivider}></div>
        <li>
          <p>location</p>
          <h2>Brooklyn, NY 10001</h2>
        </li>
        <div className={styles.listDivider}></div>
        <li>
          <p>timezone</p>
          <h2>UTC -05:00</h2>
        </li>
        <div className={styles.listDivider}></div>
        <li>
          <p>isp</p>
          <h2>SpaceX Starlink</h2>
        </li>
      </ul>
    </div>
  );
};

export default InfoList;
