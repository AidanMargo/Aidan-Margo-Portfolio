import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import { TimelineMax } from 'gsap/gsap-core'





function Menu() {
  
  const el = useRef()


  useEffect(() =>{
    console.log('Mounted')
    gsap.to('.link-menu', {
      width: '100%',
      duration: 0.3
    })
    
  }, [])


return (
  
    <div className="link-menu" ref={el} >

    </div>
  )
}

export default Menu