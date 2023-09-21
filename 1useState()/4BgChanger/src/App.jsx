import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#000")

  return (
    <div className='container' style={{backgroundColor: color}}>
      <div className='wrapper'>

        <button 
          onClick={() => setColor("Blue")}
          style={{backgroundColor: "Blue", color: "#fff"}}
        >
          Blue
        </button>

        <button 
          onClick={() => setColor("Red")}
          style={{backgroundColor: "Red", color: "#fff"}} 
        >
          Red
        </button>

        <button 
          onClick={() => setColor("Orange")}
          style={{backgroundColor: "Orange", color: "#fff"}} 
        >
          Orange
        </button>

        <button 
          onClick={() => setColor("Olive")}
          style={{backgroundColor: "Olive", color: "#fff"}} 
        >
          Olive
        </button>

        <button 
          onClick={() => setColor("Pink")}
          style={{backgroundColor: "Pink", color: "#fff"}} 
        >
          Pink
        </button>

        <button 
          onClick={() => setColor("Green")}
          style={{backgroundColor: "Green", color: "#fff"}} 
        >
          Green
        </button>

        <button 
          onClick={() => setColor("violet")}
          style={{backgroundColor: "violet", color: "#fff"}} 
        >
          violet
        </button>

        <button 
          onClick={() => setColor("blueviolet")}
          style={{backgroundColor: "blueviolet", color: "#fff"}} 
        >
          blueviolet
        </button>

        <button 
          onClick={() => setColor("black")}
          style={{backgroundColor: "black", color: "#fff"}} 
        >
          Reset
        </button>

      </div>
    </div>
  )
}

export default App
