import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Projects from './Components/Projects';




function App() {
  return (
    <div className="App">
        <Hero/>
        <Projects/>
        <About/>
        <Footer/>
    </div>
  );
}

export default App;
