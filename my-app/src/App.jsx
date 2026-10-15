import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const App = () => {
  const [myCount, setMyCount] = useState(1);
  const [userName, setUserName] = useState("Adebisi Adesina");
  const [myDecreaseCount, setMyDecreaseCount] = useState(0);

  const myName = "Janet Jackson";
  const myAge = 40;
  let count = 1;

  function increaseCount() {
    let newCount = count + 1;
    let newCount2 = myCount + 1;
    setMyCount(newCount2);
    console.log(newCount);
    return count + 1;
  }
  function decreaseCount() {
    let newDecreaseCount = count - 1;
    let newDecreaseCount2 = myDecreaseCount - 1;
    setMyDecreaseCount(newDecreaseCount2);
    console.log(newDecreaseCount);
    return count - 1;
  }

  function showEvents(param) {
    console.log(param);
    setUserName(param.target.value);
  }

  return (
    <>
      <Navbar />
      <div className="parent">
        <h1>Welcome to My App</h1>
      </div>
      <div className="parent-2">
        <h1>How are you</h1>
        <input
          placeholder="Enter your name"
          onChange={(e) => showEvents(e)}
          type="text"
        />
        {/* <button onClick={changeName}>Submit</button> */}
        <h1>
          {myName} <br />
          My name is {userName} and I am {myAge} years old
        </h1>
        <h1>
          Current count is {count} {myCount}
        </h1>
        <button onClick={increaseCount}>Increase Count</button>
        <HeroSection />
        <h1>Current count is {myDecreaseCount}</h1>
        <button className={"btn"} onClick={decreaseCount}>
          Decrease count
        </button>
      </div>
    </>
  );
};

export default App;

// Create a componnent and design it how you like, import it in app.jsx
// create a button that decrease myCount
