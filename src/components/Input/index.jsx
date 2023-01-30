import React, { useState } from 'react';
import styles from './Input.module.scss';

const Input = () => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.inputBlock}>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        value={value}
        onInput={e => setValue(e.target.value)}
      />
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
};

export default Input;
