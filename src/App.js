import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import Fakers from './Components/Fakers';

function App() {
  return (
    <div className="App">
      <Fakers />
      <Home />
    </div>
  );
}

export default App;
