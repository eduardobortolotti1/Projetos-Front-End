import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function updateInput(event) {
    const input = event.target.value;
    setInput(input);
  }

  function addNote() {
    input ? setItems([...items, input]) : null;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={updateInput} value={input} />
        <button onClick={addNote}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
