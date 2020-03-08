import React from 'react';
import 'tachyons';
import './App.css';

import Home from "./Home"
import Products from "./Products"

function App() {    
  return (
    <div>
      <nav>
      	<ul>
          <li>Home</li>
          <li>Products</li>
          </ul>
      </nav>
    </div>
  )
}

export default App
{
// Route between 2 components depending on the path:
//   1. Home page ("/")
//   2. Products Page ("/products")
  
//   ** Home Page **
//   • Can be a basic home page, maybe welcoming the user to your site and giving some background about yourself 
//   	as a developer
  
//   ** Products Page **
//   • Using an array of data for your products (provided for you), 
//     map over that data to show each item and some information on the products 
//     page as a list of available products.
}