import React, { Component } from 'react';
import './App.css';

import ProductItem from './ProductItem.js';

const products = [
  {
    name: 'ipad',
    price: 200
  },
  {
    name: 'iphone',
    price: 650
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  };

  getProducts() {
    const products = JSON.parse(localStorage.getItem('products'));

    this.setState({ products });

    this.onDelete = this.onDelete.bind(this);
  }

onDelete(name) {
  console.log(name);

  //this.setState...
}

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>

        { 
          this.state.products.map(product => {
            return (
            <ProductItem 
              key={product.name}
              {...product}
              onDelete={this.onDelete}
            />
          );
        })
      }
      </div>
    );
  }
}
export default App;
