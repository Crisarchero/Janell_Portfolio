
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
 
      <div className="d-flex flex-md-row flex-sm-column m-3 p-5 justify-content-md-around">     
         <Toolkit />
         <About/>
       
      </div> 

      <div className = "d-flex justify-content-center align-items-center bg-primary p-5">
      <Contact />
      </div>
    </body>
  );
}

export default App;
