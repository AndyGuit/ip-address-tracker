import './scss/app.scss';

import Input from './components/Input';
import InfoList from './components/InfoList';
import Map from './components/Map';
import { useState } from 'react';
import useIPAddressTracker from './hooks/useIPAddressTracker';

function App() {
  const [address, searchAddress, isLoading, errorMsg] = useIPAddressTracker('');

  return (
    <div className="App">
      <h1 className="app-header">IP Address Tracker</h1>
      <Input searchAddress={searchAddress} address={address} />
      <InfoList
        addressData={address}
        errorMsg={errorMsg}
        isLoading={isLoading}
      />
      <Map address={address} isLoading={isLoading} />
    </div>
  );
}

export default App;
