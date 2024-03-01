import './App.css';
import { Accordion } from './components/accordion';
import { ColorChange } from './components/color-change/ColorChange';
import { Stars } from './components/stars/Stars';
import { LoadImage } from './components/load-image/LoadImage';

function App() {
  return (
    <div className="App">
      <Accordion/>
      <ColorChange/>
      <Stars/>
      <LoadImage url={'https://picsum.photos/v2/list'} limit={5} page={1}/>
    </div>
  );
}

export default App;
