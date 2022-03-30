

function Intro({scrollTo}){
  return (
    <div className="container">
      <div className="intro">
        <h3>Hi, <span id='name'>I'm Aidan</span>, and</h3>
        <h1>I help people create things.</h1>
        <p id="bio">I'm a software engineer  with big dreams to change the world through technology
          and development. Now searching for my first developer role, and beginning my dive into the world of Software Engineering.
        </p>
        <button id="hire-me" onClick={() => scrollTo('contact')}>Say Hello</button>
      </div>
    </div>
  )
}

export default Intro