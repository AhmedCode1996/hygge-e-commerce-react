import './products.css';
import Product from './Product';
import { Link } from 'react-router-dom';
import { useGlobalProductContext } from './../globalData/ProductsContext';

const Products = () => {
  const data = useGlobalProductContext();

  return (
    <section className="products">
      <h2 className="products-title">- Our Products</h2>
      <h4 className="products-description">Explore our Products</h4>
      <div className="products-list">
        {data.slice(0, 9).map((el) => {
          return <Product key={el.id} {...el} />;
        })}
      </div>
      <button className="btn products-btn">
        <Link to="/">View All</Link>
      </button>
    </section>
  );
};

export default Products;
