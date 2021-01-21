import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Cart from "./cart";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      name: "ShoppingCart"
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <Cart />
        </div>
        <footer className="bg-dark text-white text-center">
          <small>
            develope by
            <a href="https://www.hockeycomputindo.com" className="text-white">
              hockeycomputindo.com
            </a>
          </small>
        </footer>
      </div>
    );
  }
}

render(<Index />, document.getElementById("root"));
