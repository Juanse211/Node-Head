import './css/main.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ItemListContainer } from './container/itemListContainer'
import { ItemCount } from './components/Cart/itemCount'
import { ItemDetailContainer } from './container/itemDetailContainer';


const App = () => {
  // <ItemListContainer greeting="Radiohead Fanpage" /> 
  return (
    <div className="App">
      <Header />
      <ItemDetailContainer />
      <ItemCount stock={5} initial={1}/> 
      <Footer />
    </div>
  );
}

export default App;