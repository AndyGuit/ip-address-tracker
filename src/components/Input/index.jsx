import React, { useState } from 'react';

const Input = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={value}
        onInput={e => setValue(e.target.value)}
      />
      <button></button>
    </div>
  );
};

export default Input;
