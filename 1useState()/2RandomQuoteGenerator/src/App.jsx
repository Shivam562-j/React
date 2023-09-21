import { useState } from 'react'
import './App.css'

function App() {

  const [quote, setQuote] = useState('If you spend too much time thinking about a thing, you will never get it done.');
  const [author, setAuthor] = useState('Bruce Lee');

  const getNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data =>{
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch(error => console.error(error));
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <h1>Quote of the Day</h1>
        <p>
          <span className='first'>“</span>
          {quote}
          <span className='last'>”</span>
        </p>
        <h2>- {author}</h2>

        <button
          onClick={getNewQuote}
        >
          Get New Quote
        </button>
      </div>
    </div>
  )
}

export default App
