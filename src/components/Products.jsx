import { useState } from 'react';
import './products.css';
import productsData from '../data/products';
import Product from './Product';
import { Link } from 'react-router-dom';
const Products = () => {
  const [products] = useState(productsData);
  return (
    <section className="products">
      <h2 className="products-title">- Our Products</h2>
      <h4 className="products-description">Explore our Products</h4>
      <div className="products-list">
        {products.map((el, index) => {
          if (index === 9) return;
          return <Product key={index} {...el} />;
        })}
      </div>
      <button className="btn products-btn">
        <Link to="/">View All</Link>
      </button>
    </section>
  );
};

export default Products;
