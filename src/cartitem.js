import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class CartItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        <div className="col-3 col-md-4 p-3 text-center">
          <img
            className="img-fluid"
            src="https://1.bp.blogspot.com/-iQTJMhPds8c/YAmdxk9kqxI/AAAAAAAAMgc/PvllICxaPxcMzzTTzNOAberAPXQQ13g5wCLcBGAsYHQ/s48/icons8-bento-48.png"
          />
          <br />
          {this.props.item.description}
        </div>
        <div className="col-3 col-md-2 p-3 text-center">
          {this.props.item.price}
        </div>
        <div className="col-3 col-md-2 p-3">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => this.props.onIncrement(this.props.item)}
          >
            +
          </button>
          <button
            className="btn btn-danger btn-sm"
            disabled={this.props.item.quantity === 0}
            onClick={() => this.props.onDecrement(this.props.item)}
          >
            -
          </button>
        </div>
        <div className="col-3 col-md-2 p-3">
          <strong> {this.props.item.price * this.props.item.quantity}</strong>
        </div>
        <hr className="bg-white" />
      </div>
    );
  }
}

export default CartItem;
