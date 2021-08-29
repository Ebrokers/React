import logo from './logo.svg';
import './App.css';
import {Properties} from './Properties.js';
import {PropertiesByMeId} from './PropertiesByMeId.js';
import {Merchants} from './Merchants.js';
import AppNavbar from './AppNavbar';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <PropertiesByMeId/>
    </div>
  );
}

export default App;