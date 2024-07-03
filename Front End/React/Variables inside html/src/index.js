import React from "react";
import ReactDOM from "react-dom";

const name = "Eduardo";
const number = 3;

ReactDOM.render(
    <div>
        <h1>Hello {name}!</h1>
        <h1>Your lucky number is {number}</h1>
    </div>, document.getElementById("root"));