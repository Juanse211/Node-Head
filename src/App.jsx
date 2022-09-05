import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ItemListContainer } from './container/itemListContainer'
import { ItemCount } from './components/Cart/itemCount'



const App = () => {
  return (
    <div className="App">
      <Header />
      <ItemCount stock="5" initial="1" /> 
      <ItemListContainer greeting="Radiohead Fanpage" />
      <Footer />
    </div>
  );
}

export default App;