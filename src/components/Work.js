import Spendsy_Landing from '../images/Spendsy_Landing.png'
import Braise_Home from '../images/Braise_Home.png'
import Rostrum_Landing from '../images/Rostrum_Landing.png'
import Game_On_Landing from '../images/Game_On_Landing.png'

function Work() {
  return(
    <div className='container'>
      <div id='work'>
        <h2>Work</h2>
        <p>Growing and constantly developing my skills is my top priority in everything that I do. 
          To do that, I've worked on the below projects so far 
          during my time in the Software Engineering program at Flatiron School.
           Keep an eye out for updates as I continue to create more full-stack development projects in the future!
        </p>
        <div className="project-grid">

          <div className='grid-long img-wrap'>
            <img className= "grid-img " src={Rostrum_Landing} alt="project-thumbnail"/>
            <a href="https://vimeo.com/664445859" target="_blank" rel="noopener noreferrer">
              <div className="img-description-layer">
                <h1 className="project-name">Rostrum</h1>
                <p className="description">
                  <strong>Click to watch the demo!</strong>
                  <br />
                  Full-Stack, React.js, Custom CSS, Material-UI, Ruby on Rails, postgresSQL
                </p>
              </div>
            </a>
          
          </div>
          
          <div className='grid-long img-wrap'>
            <img className= "grid-img " src={Spendsy_Landing} alt="project-thumbnail"/>
            <a href="https://vimeo.com/manage/videos/693599170" target="_blank" rel="noopener noreferrer">
              <div className="img-description-layer">
                <h1 className="project-name">Spendsy</h1>
                <p className="description">
                  <strong>Click to watch the demo!</strong>
                  <br />
                  Full-Stack, React.js, Ruby on Rails, Custom CSS, postgreSQL
                </p>
              </div>
            </a>
          </div>
          
          <div className='grid-long img-wrap'>
            <img className= "grid-img " src={Game_On_Landing} alt="project-thumbnail"/>
          <div className="img-description-layer">
            <h1 className="project-name">Game On</h1>
            <p className="description">
              <strong>Demo Coming Soon</strong>
              <br />
              Full-Stack, React Js, Custom CSS, Ruby on Rails, SQL
            </p>
          </div>
          </div>
          <div className='grid-long img-wrap'>
            <img className= "grid-img " src={Braise_Home} alt="project-thumbnail"/>
          <a href="https://modest-spence-066fb1.netlify.app/" target="_blank" rel="noopener noreferrer">
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