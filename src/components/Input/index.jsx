import React, { useState, useEffect } from 'react';
import styles from './Input.module.scss';
import useIPAddressTracker from '../../hooks/useIPAddressTracker';

const url =
  'https://geo.ipify.org/api/v2/country,city?apiKey=at_ZaMY3gtGUL61WQdiZGMI9EplzFVRB';

const Input = () => {
  const [value, setValue] = useState('');
  const [address, searchAddress] = useIPAddressTracker('');

  useEffect(() => {
    console.log(address);
  }, [address]);

  const onSearch = () => {
    searchAddress(value);
  };

  return (
    <div className={styles.inputBlock}>
      <input
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
