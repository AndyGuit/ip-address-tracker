import React, { useState, useEffect } from 'react';
import styles from './Input.module.scss';
import useIPAddressTracker from '../../hooks/useIPAddressTracker';

const Input = ({ searchAddress, address }) => {
  const [value, setValue] = useState('');

  // useEffect(() => {
  //   setAddressData(address);
  // }, [address, setAddressData]);

  const onSearch = () => {
    searchAddress(value);
  };

  return (
    <div className={styles.inputBlock}>
      <input
        onKeyDown={e => e.key === 'Enter' && onSearch(value)}
        type="text"
        placeholder="Search for any IP address or domain"
        value={value}
        onInput={e => setValue(e.target.value)}
      />
      <button onClick={onSearch}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
};

export default Input;
