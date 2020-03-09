import React from "react";
import ProductsData from './ProductsData';

function Products() {  
	const products = ProductsData.map(prod => {
		return(
			<div>
				<h3 key={prod.id}>Name: {prod.name}</h3>
				<p>Price - R {prod.price}</p>
				<hr />
			</div>
		)
	})  
    return (
    	<>
	      <h1>Products Page</h1>
	      {products}  
    	</>
    )
}

export default Products