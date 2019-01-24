import React, { Component } from "react";
import "./App.css";
import NavBar from "./Header";
import ProductsContainer from "./ProductsContainer";
import SearchForm from "./SearchForm";
import Cart from "./Cart";

class App extends Component {
  state = {
    products: [],
    searchTerm: "",
    cart: [],
    showCart: false
  };

  componentDidMount() {
    fetch("http://localhost:3000/products")
      .then(resp => resp.json())
      .then(products => this.setState({ products }));
  }

  getfilterProd = () => {
    return this.state.products.filter(
      product =>
        product.name
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
    );
  };

  addToCart = product => {
    this.setState({ cart: [...this.state.cart, product] });
  };

  searchInput = event => {
    this.setState({ searchTerm: event.target.value });
  };

  toggleCart = () => {
    this.setState({
      showCart: !this.state.showCart
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          toggleCart={this.toggleCart}
          numItems={this.state.cart.length}
        />
        <SearchForm searchInput={this.searchInput} />
        {this.state.showCart ? (
          <Cart cartItems={this.state.cart} />
        ) : (
          <ProductsContainer
            addToCart={this.addToCart}
            products={this.getfilterProd()}
          />
        )}
      </div>
    );
  }
}

export default App;
