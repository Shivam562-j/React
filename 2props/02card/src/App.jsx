import contents from "./Components/productdata";
import "./App.css";
import { Product } from "./Components/Products";

function App() {
    return (
        <>
            <h2>Our Products</h2>
            <div className="App">
                {contents.map((contents) => (
                    <Product
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        totalSales={contents.totalSales}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
