import './scss/app.scss';

import Input from './components/Input';
import InfoList from './components/InfoList';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <h1 className="app-header">IP Address Tracker</h1>
      <Input />
      <InfoList />
      <Map />
    </div>
  );
}

export default App;
