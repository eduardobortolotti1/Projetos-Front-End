import React, { useState } from "react";

function App() {
  var [currentTime, setTime] = useState(new Date().toLocaleTimeString());

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
