import { useState } from 'react'
import './App.css'

function App() {
  const [joke, setJoke] = useState('I have a joke about Stack Overflow, but you would say it is a duplicate.');

  const getNewJoke = () => {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then(response => response.json())
    .then(data => setJoke(data.joke))
    .catch(error => console.error(error));
  }


  return (
    <>
      <div className='container'>
        <h1>Random Programming Joke Generator</h1>
        <div className='wrapper'>
          <h4>😂</h4>
          <p>{joke}</p>
          <button onClick={getNewJoke}>Get Random Joke </button>
        </div>
      </div>
    </>
  )
}

export default App
