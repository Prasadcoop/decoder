import logo from './logo.svg';
import './index.css';
import './Button.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Skills from './Components/Skill';
import Work from './Components/Work';
import Repositories from './Components/Repositories';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Repositories/>
    </div>
  );
}

export default App;
