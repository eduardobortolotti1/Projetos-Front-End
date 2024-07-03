//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import react from "react";
import reactDom from "react-dom";

reactDom.render(
  <div>
    <h1>Hello World</h1>
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
    </ul>
  </div>,
  document.getElementById("root")
);
