import './scss/app.scss';

import Input from './components/Input';
import InfoList from './components/InfoList';

function App() {
  return (
    <div className="App">
      <h1 className="app-header">IP Address Tracker</h1>
      <Input />
      <InfoList />
    </div>
  );
}

export default App;
