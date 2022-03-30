import headshot from '../images/headshot.JPG'

function About(){
  return(
    <div className="container">
      <div id="about">
        <div>
        <h2>About Me</h2>
        <p>I've been involved in technology since as long as I can remember. Watching my sister play video games, browsing the web at a young age
          in the 2000's, and growing alongside the internet have all been integral in the way I think about the world now. 
          <br />
          <br />
          Software Engineering and Web Development has always been at the top of my interests when thinking about my future career, but it always
          seemed like it was be out of reach. Then, I learned about Flatiron School, a software engineering bootcamp, at which I am
          studying and honing my skills in full-stack software engineering.
        </p>

          <p>Here are some technologies I've worked with recently: </p>
          <ul id='tech-list'>
            <li>- HTML5</li>
            <li>- CSS</li>
            <li>- Javascript (ES6)</li>
            <li>- React</li>
            <li>- Ruby</li>
            <li>- Active Record</li>
            <li>- Rails</li>
            <li>- Material UI</li>
            <li>- Figma</li>
            <li>- GSAP</li>
            <li>- SQL</li>
          </ul>
          </div>
        <img src={headshot} id="headshot" alt="Aidan Margo"/>
      </div>
    </div>
  )
}

export default About