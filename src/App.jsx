import logo from './files/radiohead.png';
import './App.css';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Navbar />
    </div>
  );
}

export default App;
