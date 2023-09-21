import React, { useState } from "react";
import './App.css'

const App = () => {
    const [color, setColor] = useState("#000");

    const generateColor = () => {
        const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    };

    return (
        <div className="container" style={{ backgroundColor: color }}>
            <div className="wrapper">
                <h2>Random Background Color Generator</h2>
                <p>Background Color: <span>{color}</span></p>
                <button onClick={generateColor}>Generate New Background</button>
            </div>
        </div>
    );
};

export default App;
