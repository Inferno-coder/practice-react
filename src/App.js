import logo from './logo.svg';
import './App.css';
import { Accordion } from './components/accordion';
import { ColorChange } from './components/color-change/ColorChange';
import { Stars } from './components/stars/Stars';

function App() {
  return (
    <div className="App">
      <Accordion/>
      <ColorChange/>
      <Stars/>
    </div>
  );
}

export default App;
