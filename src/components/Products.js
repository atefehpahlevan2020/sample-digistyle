import React from 'react';
import './Products.css';
import Product from "./Product";

const Products = (props) => {

    return (
        <div className="Products">
            <div className="Products-wrapper">
                {props.products.map((product) => (<Product 
                                                    addProductToBasketHandler={props.onProductItemAddToCardHandler} 
                                                    brand={product.brand} 
                                                    price={product.price} 
                                                    name={product.name} 
                                                    image={product.image} 
                                                    hasOff={product.hasOff} 
                                                    offValue={product.offValue} 
                                                    hasDiscount={product.hasDiscount} 
                                                    discountValue={product.discountValue} 
                                                    id={product.id} 
                                                    key={product.id} /> ))}
            </div>
        </div>
    );
}


export default Products;