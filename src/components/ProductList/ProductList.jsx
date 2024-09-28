import React from 'react';
import './ProductList.css';
import Product from '../Product/Product';

const ProductList = () => {
  return (
    <div className="product-list">
      {Product.products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
      
    </div>
  );
};

export default ProductList;