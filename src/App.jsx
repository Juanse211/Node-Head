import './App.css';
import { useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './container/itemListContainer'
import ItemCount from './components/Cart/itemCount'
import Card from './components/item/item'
import ItemList from './components/item/itemList'



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
