import logo from './logo.svg';
import './App.css';
import {Properties} from './Properties.js';
import {PropertiesById} from './PropertiesById.js';
import {Merchants} from './Merchants.js';
import AppNavbar from './AppNavbar';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <PropertiesById/>
    </div>
  );
}

export default App;