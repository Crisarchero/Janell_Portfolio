
import './App.css';
import Hero from './components/Hero'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Toolkit from './components/Toolkit'
import Contact from './components/Contact'
import About from './components/About'
function App() {
  return (
    <body className="App">
      <Navbar />
      <Hero />
      <Projects />
 
      <div className="d-flex p-5">     
        <About/>
        <Toolkit />
      </div> 

      <div className = "d-flex justify-content-center align-items-center">
      <Contact />
      </div>
    </body>
  );
}

export default App;
