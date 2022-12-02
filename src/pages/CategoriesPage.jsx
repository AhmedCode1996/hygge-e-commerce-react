import { useState } from 'react';
import './../components/products.css';
import productsData from '../data/products';
import Heading from '../components/Heading';
import Product from '../components/Product';
const CategoriesPage = () => {
  for (let [index, product] of productsData.entries()) {
    product.id = index;
  }

  const [products] = useState(productsData);
  return (
    <section className="products">
      <Heading
        headingTitle="- Eye Care Products"
        headingDescription="Explore the Eye Care Products"
        position="left"
      />
      <div className="products-list">
        {products.map((el, index) => {
          return <Product key={index} {...el} />;
        })}
      </div>
    </section>
  );
};

export default CategoriesPage;
