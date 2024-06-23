import logo from './logo.svg';
import './App.css';
import Products from './components/Products'; 
import NavBar from './components/NavBar';
import TypeWriting from './components/TypeWriting';
import Tile from './components/Tile';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <TypeWriting text={[
        "Hello, I am a software developer",
      ]}/>
      {/* <Tile/> */}
    </div>
  );
}

export default App;
