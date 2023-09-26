import { useState } from 'react'
import './App.css'

function App() {
  const [joke, setJoke] = useState('For some, the left testicle is larger than the right one. For Chuck Norris, each testicle is larger than the other one.');

  const getNewJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => setJoke(data.value))
    .catch(error => console.error(error));
  }


  return (
    <>
      <div className='container'>
        <h1>Random Joke Generator</h1>
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
