import './App.css';
import { Accordion } from './components/accordion';
import { ColorChange } from './components/color-change/ColorChange';
import { Stars } from './components/stars/Stars';
import { LoadImage } from './components/load-image/LoadImage';
import { LoadMore } from './components/load-more-button/LoadMore';

function App() {
  return (
    <div className="App">
      <Accordion/>
      <ColorChange/>
      <Stars/>
      <LoadImage url={'https://picsum.photos/v2/list'} limit={5} page={1}/>
      <LoadMore url={`https://dummyjson.com/products`}/>
    </div>
  );
}

export default App;
