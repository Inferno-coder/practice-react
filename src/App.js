import logo from './logo.svg';
import './App.css';
import { Accordion } from './components/accordion';
import { ColorChange } from './components/color-change/ColorChange';

function App() {
  return (
    <div className="App">
      <Accordion/>
      <ColorChange/>
    </div>
  );
}

export default App;
