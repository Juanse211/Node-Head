import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './container/itemListContainer'


const App = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
      <ItemListContainer greeting="Radiohead Fanpage" />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
