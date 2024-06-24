import React, { Component } from "react";
import { render } from "react-dom";
import RoutePage from "./RoutePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <RoutePage />
      </div>
    );
  }
}

const appDiv = document.getElementById("root");
render(<App name="Hola" />, appDiv);
