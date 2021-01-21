import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import CartItem from "./cartitem";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          quantity: 0,
          description: "Ayam Goreng",
          id: 1,
          price: 25000.0,
          lineTotal: 0
        },
        {
          quantity: 0,
          description: "Bakmie Goreng",
          id: 2,
          price: 25000.0,
          lineTotal: 0
        },
        {
          quantity: 0,
          description: "Bakso",
          id: 3,
          price: 15000.0,
          lineTotal: 0
        },
        {
          quantity: 0,
          description: "Soto Ayam",
          id: 4,
          price: 20000.0,
          lineTotal: 0
        },
        {
          quantity: 0,
          description: "Soto Daging",
          id: 5,
          price: 25000.0,
          lineTotal: 0
        },
        {
          quantity: 0,
          description: "Sate Ayam",
          id: 6,
          price: 26000.0,
          lineTotal: 0
        }
      ],
      cartTotal: 0,
      cartItemsCount: 0
    };
  }

  onIncrementHandler = item => {
    var cloneItems = [...this.state.items];
    var index = cloneItems.indexOf(item);
    cloneItems[index].quantity++;
    this.setState({ items: cloneItems });

    var cartItemsCount = this.state.cartItemsCount + 1;
    this.setState({ cartItemsCount: cartItemsCount });

    var total = this.state.cartTotal + 1 * item.price;
    this.setState({ cartTotal: total });
  };

  onDecrementHandler = item => {
    var cloneItems = [...this.state.items];
    var index = cloneItems.indexOf(item);
    cloneItems[index].quantity--;
    this.setState({ items: cloneItems });

    var cartItemsCount = this.state.cartItemsCount - 1;
    this.setState({ cartItemsCount: cartItemsCount });

    var total = this.state.cartTotal - 1 * item.price;
    this.setState({ cartTotal: total });
  };

  onResetHandler = () => {
    var cloneItems = [...this.state.items];
    for (var i = 0; i <= cloneItems.length - 1; i++) {
      cloneItems[i].quantity = 0;
    }

    this.setState({ items: cloneItems });
    this.setState({ cartTotal: 0 });
    this.setState({ cartItemsCount: 0 });
  };

  itemsCount = () => {
    var countItems = this.state.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    return countItems;
  };

  cartTotal = () => {
    var total = this.state.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    return total;
  };

  componentDidMount = () => {
    var count = this.itemsCount();
    this.setState({ cartItemsCount: count });
    var total = this.cartTotal();
    this.setState({ cartTotal: total });
  };

  render() {
    return (
      <div className="cart">
        <div className="row">
          <div className="col-12 col-md-12 p-1 text-center">
            React{" "}
            <img
              className="img-fluid"
              width="60"
              src="https://mesinkasironline.web.app/img/createwebsiteusingreact.png"
            />{" "}
            Pos
            <br />
            Modern Blast Fast and simple react for point of sale,free download
            open source code full.
            <br />
            <a href="https://www.hockeycomputindo.com/2010/12/blog-post.html">
              Download more source code
            </a>
          </div>
          <hr className="bg-white" />
          <div className="col-4 col-md-4 p-3">
            <p>{this.state.cartItemsCount} Order</p>
          </div>
          <div className="col-8 col-md-8 p-3 bg-danger text-white border border-dark rounded shadow text-end">
            <h3> Total {this.state.cartTotal}</h3>
          </div>
        </div>
        <hr className="bg-white" />
        {this.state.items.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onIncrement={this.onIncrementHandler}
            onDecrement={this.onDecrementHandler}
          />
        ))}
      </div>
    );
  }
}

export default Cart;
