import {useEffect, useState} from 'react'


function Nav({scrollTo, menuActive, setMenuActive}) {
 
  // const [show, setShow] = useState(true)

  // const showNavbar = () => {
  //   if(window.scrollY > 100){
  //     setShow(false)
  //   } else {
  //     setShow(true)
  //   }
  // }

    // useEffect( () => {
    //     window.addEventListener('scroll', showNavbar)
    //     return () =>{
    //       window.removeEventListener('scroll', showNavbar)
    //     }
    // }, [])


  return ( 
    <>
      <nav className={`${'myNav'}`}>
        <a href="https://docs.google.com/document/d/e/2PACX-1vQ-izdIZbX1muxo67ByaV_G-bqO_LQ-MpM0CSpJRH9tDkgGBEEMmTSuQ52dn1kNLF_az0nhwZV-UMyv/pub" rel="noopener noreferrer" target="_blank">
        <span className={`${'navlink'}`} >04. Resume</span>
        </a>
        <span className={`${'navlink'}`} onClick={() => scrollTo('contact')}>03. Contact</span>
        <span className={`${'navlink'}`} onClick={() => scrollTo('work')}>02. Work</span>
        <span className={`${'navlink'}`} onClick={() => scrollTo('about')}>01. About</span>

        <div className={`menu-icon ${menuActive && 'change'}`} 
        onClick={() => setMenuActive(!menuActive)}>
          <div className={`bar1 ${menuActive && 'dark'}`}></div>
          <div className={`bar2 ${menuActive && 'dark'}`}></div>
          <div className={`bar3 ${menuActive && 'dark'}`}></div>
        </div>
      </nav>
      <div>
        <ul className="social-media-links">
          <li><a href="https://github.com/AidanMargo" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/aidan-margo-216448181/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://twitter.com/MargoWebDev" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://dev.to/aidanmargo" target="_blank" rel="noopener noreferrer"><i className="fab fa-dev"></i></a></li>
        </ul>
      </div>
    </>
  )
}

export default Nav