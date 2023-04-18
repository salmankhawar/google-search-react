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
        <span className="nresults">
          {data.length} Result{data.length != 1 ? 's' : ''}
        </span>

        {data.map((element, i) => (
          <div key={i} className="results">
            <span>{element.url}</span>
            <a href={element.url} target="_blank">
              <h3>{element.title}</h3>
            </a>
            <p>{element.description}</p>
            <ul>
              {element.links.map((link, x) => (
                <li key={x}>
                  <a href={link.url} target="_blank">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
