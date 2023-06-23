import './App.css';
import Navbar from './components/Navbar';
import Meme from './components/Meme';
import MemesData from "./MemesData";
function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Meme />
    </div>
  );
}

export default App;