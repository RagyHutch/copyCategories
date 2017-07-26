import React, { Component } from 'react';
import '../styles/App.css';
import AllCategories from './CatBar/AllCategories.js';
import Color from './CatBar/Color.js';
import ItemType from './CatBar/ItemType.js';
import OrderingOptions from './CatBar/OrderingOptions.js';
import Price from './CatBar/Price.js';
import ShipTo from './CatBar/ShipTo.js';
import ShopLocation from './CatBar/ShopLocation.js';
import CatCards from './CatBody/CatCards.js';
import DetailedCatCards from './CatBody/DetailedCatCards.js';
import ProductCards from './CatBody/ProductCards.js';
import CatBar from './CatBar.js';
import PageCounter from '../components/PageCounter.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid row">
          <CatBar className="col-md-2"/>
          <DetailedCatCards className="col-md-10"/>
        </div>
        <div className="row">
          <ProductCards className="col-md-10"/>
        </div>
      </div>
    );
  }
}

export default App;
