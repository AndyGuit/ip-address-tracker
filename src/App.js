import './scss/app.scss';

import Input from './components/Input';
import InfoList from './components/InfoList';
import Map from './components/Map';
import { useState } from 'react';
import useIPAddressTracker from './hooks/useIPAddressTracker';

function App() {
  const [address, searchAddress] = useIPAddressTracker('');

  return (
    <div className="App">
      <h1 className="app-header">IP Address Tracker</h1>
      <Input searchAddress={searchAddress} address={address} />
      <InfoList addressData={address} />
      <Map {...address} />
    </div>
  );
}

export default App;
