import { useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState({
    position: "relative",
    top: 0,
    left: 0,
  });
  const [isYes, setIsYes] = useState(false);

  const handleHover = () => {
    setPosition({
      position: "absolute",
      top: Math.random() * 600,
      left: Math.random() * 1000,
    });
  };

  return (
    <div className="root">
      <img
        className="background"
        src="https://i.ibb.co/6wVGRF0/background.jpg"
        alt="background"
        border="0"
      />
      {isYes ? (
        <>
          <h1>You made me happiest person ever</h1>
        </>
      ) : (
        <>
          <h1>Dear Sonya, will you be my valentine?</h1>
          <div className="buttons">
            <button onClick={() => setIsYes(true)}>Yes</button>
            <button className="no" style={position} onMouseEnter={handleHover}>
              No
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
