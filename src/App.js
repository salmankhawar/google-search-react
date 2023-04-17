import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <>
      <div class="header">
        <img class="logo" src="google.png" />
        <form>
          <input class="searchbar" type="text" />
          <button>Search</button>
        </form>
      </div>
      <div class="main">
        <span class="nresults">37 Results</span>
        <div class="results">
          <span>www.w3schools.com</span>
          <a href="this.link.com" target="_blank">
            <h3>Javascript Tutorial - W3 School</h3>
          </a>
          <p>Well Organized and easy to Understand Coding</p>
          <ul>
            <li>
              <a href="abc.com" target="_blank">
                Javascript Intro
              </a>
            </li>
            <li>
              <a href="abc.com" target="_blank">
                JS Functions
              </a>
            </li>
            <li>
              <a href="abc.com" target="_blank">
                Javascript Examples
              </a>
            </li>
          </ul>
        </div>
        <div class="results">
          <span>www.w3schools.com</span>
          <a href="this.link.com" target="_blank">
            <h3>Javascript Tutorial - W3 School</h3>
          </a>
          <p>Well Organized and easy to Understand Coding</p>
          <ul>
            <li>
              <a href="abc.com" target="_blank">
                Javascript Intro
              </a>
            </li>
            <li>
              <a href="abc.com" target="_blank">
                JS Functions
              </a>
            </li>
            <li>
              <a href="abc.com" target="_blank">
                Javascript Examples
              </a>
            </li>
          </ul>
        </div>
        <div class="results">
          <span>www.w3schools.com</span>
          <a href="this.link.com" target="_blank">
            <h3>Javascript Tutorial - W3 School</h3>
          </a>
          <p>Well Organized and easy to Understand Coding</p>
          <ul>
            <li>
              <a href="abc.com" target="_blank">
                Javascript Intro
              </a>
            </li>
            <li>
              <a href="abc.com" target="_blank">
                JS Functions
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/" target="_blank">
                Javascript Examples
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
