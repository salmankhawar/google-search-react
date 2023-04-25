import logo from './logo.svg'
import './App.css'
import Results from './Results'
import { useState, useEffect } from 'react'
import axios from 'axios'

// axios.defaults.withCredentials = true

function App() {
  // States

  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // Functions

  async function getData() {
    let data = await axios.get(
      'https://project-google-search-api-demo.herokuapp.com/results',
      {
        params: {
          search: searchTerm,
        },
      }
    )
    setResults(data.data)
    console.log(data.data)
  }
  function sendForm(e) {
    let keyword = ''
    e.preventDefault()
    keyword = e.target.keyword.value

    setSearchTerm(keyword)
  }

  useEffect(() => {
    getData()
  }, [searchTerm])

  //Return

  return (
    <>
      <div className="header">
        <img className="logo" src="google.png" />
        <form onSubmit={(e) => sendForm(e)}>
          <input className="searchbar" type="text" name="keyword" />
          <button>Search</button>
        </form>
      </div>
      <Results results={results} />
    </>
  )
}

export default App
