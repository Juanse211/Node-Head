import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './container/itemListContainer'
import { userState } from 'react'
import ItemCount from './components/Cart/itemCount'

const App = () => {
  return (
    <div className="App">
      <Header />
      <ItemCount stock="5" initial="1" /> 
      <Footer />
      <ItemListContainer greeting="Radiohead Fanpage" />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
