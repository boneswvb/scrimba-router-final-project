import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import 'tachyons';
import './App.css';

import Home from "./Home"
import Products from "./Products"

function App() {    
  return (
    <div className="tc">
      <nav>
      	<ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </div>
  )
}

export default App