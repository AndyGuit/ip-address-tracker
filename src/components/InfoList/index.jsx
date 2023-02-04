import React from 'react';
import Spinner from '../Spinner';

import styles from './IpInfo.module.scss';

const InfoList = ({ addressData }) => {
  const notEmpty = Object.keys(addressData).length;

  return (
    <div className={styles.infoListWrapper}>
      <ul className={styles.infoList}>
        {!notEmpty ? (
          <Spinner />
        ) : (
          <>
            <li>
              <p>ip address</p>
              <h2>{addressData.ip}</h2>
            </li>
            <div className={styles.listDivider}></div>
            <li>
              <p>location</p>
              <h2>{`${addressData.location.region}, ${addressData.location.country} ${addressData.location.postalCode}`}</h2>
            </li>
            <div className={styles.listDivider}></div>
            <li>
              <p>timezone</p>
              <h2>{addressData.location.timezone}</h2>
            </li>
            <div className={styles.listDivider}></div>
            <li>
              <p>isp</p>
              <h2>{addressData.isp}</h2>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default InfoList;
