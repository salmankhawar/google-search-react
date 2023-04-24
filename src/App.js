import logo from './logo.svg'
import './App.css'
import Results from './Results'
import { useState } from 'react'

function App() {
  // States

  const [results, setResults] = useState([])

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

  function search(string) {
    let filteredResults = data.filter(
      (n) =>
        n.url.toLowerCase().includes(string.toLowerCase()) ||
        n.description.toLowerCase().includes(string.toLowerCase()) ||
        n.title.toLowerCase().includes(string.toLowerCase())
    )
    setResults(filteredResults)
  }

  return (
    <>
      <div className="header">
        <img className="logo" src="google.png" />
        <form>
          <input className="searchbar" type="text" />
          <button>Search</button>
        </form>
      </div>
      <Results results={results} />
    </>
  )
}

export default App
