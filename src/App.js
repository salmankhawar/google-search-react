import logo from './logo.svg'
import './App.css'
import Results from './Results'

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
      <Results data={data} />
    </>
  )
}

export default App
