import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card"

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" name="Beyonce" tel="93988131161" email="dsjdsj@gmail.com"/>
  </div>,
  document.gestElementById("root")
);a

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
