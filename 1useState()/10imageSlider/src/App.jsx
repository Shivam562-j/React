import { useState } from "react";
import "./App.css";

function App() {
    const images = [
        "src/images/image1.png",
        "src/images/image2.png",
        "src/images/image3.png",
        "src/images/image4.png"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }

    return (
        <>
            <div className="container">
                <h1>Images Slider</h1>
                <div className="wrapper">
                    <div className="images">
                        <img src={images[currentImageIndex]} />
                    </div>
                    <div className="btn">
                        <button
                          className="left"
                          onClick={handlePrevClick}
                        >
                          &lt;
                        </button>

                        <button 
                          className="right"
                          onClick={handleNextClick}
                        > 
                          &gt;
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
