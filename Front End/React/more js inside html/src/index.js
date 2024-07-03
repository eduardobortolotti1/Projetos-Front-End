//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import react from "react";
import reactDom from "react-dom";

const name = "Eduardo";

reactDom.render(
  <div>
    <h1>Created by {name}</h1>
    <h2>Copyright {new Date().getFullYear()}</h2>
  </div>,
  document.getElementById("root")
);
