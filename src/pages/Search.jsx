import Heading from '../components/Heading';
import data from './../data/products';
import './../components/products.css';
import { useState } from 'react';
import Product from '../components/Product';
const Search = () => {
  const [productData] = useState(data);
  return (
    <section className="search products">
      <Heading
        headingTitle="- Search Results"
        headingDescription="Eye Care Products for Tired Eyes"
        position="left"
      />
      <span className="products-length"></span>
      <div className="products-list">
        {productData.slice(0, 6).map((el, index) => {
          return <Product key={index} {...el} />;
        })}
      </div>
    </section>
  );
};

export default Search;
