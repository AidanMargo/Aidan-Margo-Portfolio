import Nav from './Nav'
import Intro from './Intro'
import About from './About'
import Work from './Work';
import Contact from './Contact'

function App() {

  const scrollTo = (elementId) => {
    let element = document.getElementById(elementId)
    element.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  return (
    <div className="App">
      <Nav scrollTo={scrollTo}/>
      <Intro scrollTo={scrollTo}/>
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
