import logo from './logo.svg'
import './App.css'

// Data
let data = [
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js',
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js',
      },
    ],
  },
]

function App() {
  return (
    <>
      <div className="header">
        <img className="logo" src="google.png" />
        <form>
          <input className="searchbar" type="text" />
          <button>Search</button>
        </form>
      </div>
      <div className="main">
        <span className="nresults">37 Results</span>
        <div className="results">
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
        <div className="results">
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
        <div className="results">
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
