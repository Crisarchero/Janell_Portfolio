
import './App.css';
import Hero from './components/Hero'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Toolkit from './components/Toolkit'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Toolkit />
      <Contact/>
    </div>
  );
}

export default App;
