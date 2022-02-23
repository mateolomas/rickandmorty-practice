import '../styles/header.css'
const logo = require("../assets/rick-and-morty-31013.png");


function Header() {
  return (
    <>

      <header className="title-container">
        <nav>
          <img className="logo" alt="logo" src={logo}></img>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Help us</a>
            </li>
          </ul>
        </nav>

      <div className="title-container">
        <h1>The Rick and Morty API</h1>
      </div>
        
      </header>
    </>


  )
}

export default Header