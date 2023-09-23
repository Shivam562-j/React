import { useState } from 'react'
import './App.css'

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  }

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  }

  const add = () => {
    if (!input1 || !input2) {
      alert('Please fill both fields.');
    } else {
      setResult(parseFloat(input1) + parseFloat(input2));
    }
  };

  const sub = () => {
    if (!input1 || !input2) {
      alert('Please fill both fields.');
    } else {
      setResult(parseFloat(input1) - parseFloat(input2));
    };
  }

  const multiply = () => {
    if (!input1 || !input2) {
      alert('Please fill both fields.');
    } else {
      setResult(parseFloat(input1) * parseFloat(input2));
    };
  }

  const divide = () => {
    if(parseFloat(input2) === 0){
      setResult("Connot divide by 0");
    }else{
      setResult(parseFloat(input1) / parseFloat(input2));
    }
  }

  const clear = () => {
    setInput1('')
    setInput2('')
    setResult('')
  }

  return (
    <div className='container'>

      <h2>Enter Two Number</h2>
      
      <div className='input'>
        
        <input type='number'  placeholder='Enter a Number' value={input1} onChange={handleInput1Change} />
        <input type='number' placeholder='Enter a Number' value={input2} onChange={handleInput2Change} />

      </div>

      <div className='button'>

          <button onClick={add}>Add</button>
          <button onClick={sub}>Substract</button>
          <button onClick={multiply}>Multiply</button>
          <button onClick={divide}>Division</button>
          <button onClick={clear}>Clear</button>

      </div>

      <p>Result: <span>{result}</span></p>

    </div>
  )
}

export default App
