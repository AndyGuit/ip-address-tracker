import './scss/app.scss';

import Input from './components/Input';
import InfoList from './components/InfoList';
import Map from './components/Map';
import { useState } from 'react';

function App() {
  const [addressData, setAddressData] = useState({});
  // const [isLoading, setIsLoadin]

  return (
    <div className="App">
      <h1 className="app-header">IP Address Tracker</h1>
      <Input setAddressData={setAddressData} />
      <InfoList addressData={addressData} />
      <Map {...addressData} />
    </div>
  );
}

export default App;
