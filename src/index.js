import React from "react";
import ReactDOM from "react-dom";
const render = () => {
  document.getElementById("html").innerHTML = `
	<div>
    Hello HTML
    <br>
    <input></input>
    <pre>${new Date().toLocaleTimeString()}</pre>
  </div>
`;

  ReactDOM.render(
    React.createElement(
      "div",
      null,
      "Hello React",
      React.createElement("br", null),
      React.createElement("input", null),
      React.createElement("pre", null, new Date().toLocaleTimeString())
    ),
    document.getElementById("react")
  );
};

setInterval(render, 1000);
