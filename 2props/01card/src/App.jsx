import "./App.css";
import Card from "./components/Card";

function App() {
    return (
        <div className="bg-black h-[100vh] w-full my-0 mx-auto px-5 flex items-center justify-center flex-col	justify-items-center  ">

            <div>
              <h2 className="text-white text-center font-bold py-10 text-4xl	" >Our Developer</h2>
            </div>

            <div className=" flex justify-center items-center overflow-hidden gap-4 flex-wrap	">
                <Card
                    username="Raushan"
                    userinfo="A PHP developer is responsible for writing server-side web application logic."
                    btntext="Read More"
                    img="../images/dev1.webp"
                />

                <Card
                    username="Shivangi "
                    userinfo="A PHP developer is responsible for writing server-side web application logic."
                    btntext="View Profile"
                    img="../images/dev2.webp"
                />

                <Card
                    username="John"
                    userinfo="A PHP developer is responsible for writing server-side web application logic."
                    btntext="View Linkdin Account"
                    img="../images/dev3.webp"
                />

                <Card
                    username="Pooja"
                    userinfo="A PHP developer is responsible for writing server-side web application logic."
                    btntext="Connect Now"
                    img="../images/dev4.webp"
                />
            </div>
        </div>
    );
}

export default App;
