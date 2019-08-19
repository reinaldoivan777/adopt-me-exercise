import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Siberian Husky"
    }),
    React.createElement(Pet, {
      name: "Wallet",
      animal: "Dog",
      breed: "Mixed"
    }),
    React.createElement(Pet, {
      name: "Telo",
      animal: "Dog",
      breed: "Mixed"
    })
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
