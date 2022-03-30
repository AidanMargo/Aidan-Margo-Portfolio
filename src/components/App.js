import Nav from './Nav'
import Intro from './Intro'
import About from './About'
import Work from './Work';
import Contact from './Contact'
import {useState} from 'react'

function App() {

  const scrollTo = (elementId) => {
    let element = document.getElementById(elementId)
    element.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  const [menuActive, setMenuActive] = useState(false)


  return (
    <div className="App">
      <Nav scrollTo={scrollTo} menuActive={menuActive} setMenuActive={setMenuActive}/>
      <Intro scrollTo={scrollTo}/>
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
