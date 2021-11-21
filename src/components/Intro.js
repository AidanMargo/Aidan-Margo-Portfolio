

function Intro({scrollTo}){
  return (
    <div class="container">
      <div class="intro">
        <h3>Hi, <span id='name'>I'm Aidan</span>, and</h3>
        <h1>I help people create things.</h1>
        <p id="bio">I'm a software engineering student with big dreams to change the world through technology
          and development. Currently developing my back-end skills in Ruby on Rails and searching for entry-level software engineer roles.
        </p>
        <button id="hire-me" onClick={() => scrollTo('contact')}>Say Hello</button>
      </div>
    </div>
  )
}

export default Intro