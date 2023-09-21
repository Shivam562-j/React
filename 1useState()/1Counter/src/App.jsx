import { useState } from "react";
import "./App.css";

function App() {
    const [counter, setCounter] = useState(0);

    const addValue = () => {
      setCounter(counter + 1)
    }

    const removeValue = () => {
      setCounter(counter - 1)
    }

    const resetValue = () => {
      alert("Value Reseted")
      setCounter(0)
    }

    return (
        <>
            <div className="Container">
                <h2>Increment & Decrement</h2>

                <div className="button-group">

                    <button onClick={removeValue}>-</button>
                    <button className="zero">
                        {counter}
                    </button>
                    <button onClick={addValue}>+</button>
                    
                </div>

                <div className="reset-btn">
                    <button onClick={resetValue}>Reset</button>
                </div>
            </div>
        </>
    );
}

export default App;
