import Spendsy_Landing from '../images/Spendsy_Landing.png'
import Braise_Home from '../images/Braise_Home.png'


function Work() {
  return(
    <div class='container'>
      <div id='work'>
        <h2>Work</h2>
        <p>Growing and constantly developing my skills is my top priority in everything that I do. 
          To do that, I've worked on the below projects so far 
          during my time in the Software Engineering program at Flatiron School.
           Keep an eye out for updates as I continue to create more full-stack development projects in the future!
        </p>
        <div className="project-grid">

          
          <div className='grid-long img-wrap'>
            <img className= "grid-img " src={Spendsy_Landing}/>
          <div className="img-description-layer">
            <h1 className="project-name">Spendsy</h1>
            <p className="description">Full-Stack, React Js, Custom CSS, Ruby, Active Record, SQL
            </p>
          </div>
          </div>
          <div className='grid-long img-wrap'>
            <img className= "grid-img " src={Braise_Home}/>
          <a href="https://modest-spence-066fb1.netlify.app/">
            <div className="img-description-layer">
              <h1 className="project-name">Braise</h1>
              <p className="description">Front-end, React JS, ReactBootstrap</p>
            </div>
          </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Work