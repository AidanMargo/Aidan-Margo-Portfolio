import {useEffect, useState} from 'react'
function Nav({scrollTo}) {
  
  
  
  const [show, setShow] = useState(true)

  const showNavbar = () => {
    if(window.scrollY > 100){
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect( () => {
      window.addEventListener('scroll', showNavbar)
      return () =>{
        window.removeEventListener('scroll', showNavbar)
      }
  }, [])


  return ( 
    <nav className={`${show && 'myNav'}`}>
      <span class={`${show && 'navlink'}`} >04. Resume</span>
      <span class={`${show && 'navlink'}`} onClick={() => scrollTo('contact')}>03. Contact</span>
      <span class={`${show && 'navlink'}`} onClick={() => scrollTo('work')}>02. Work</span>
      <span class={`${show && 'navlink'}`} onClick={() => scrollTo('about')}>01. About</span>
    </nav>
  )
}

export default Nav