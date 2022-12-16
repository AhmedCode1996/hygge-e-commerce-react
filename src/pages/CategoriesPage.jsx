import './../components/products.css';
import { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import Product from '../components/Product';
import supabase from '../config/data';
const CategoriesPage = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data, error } = await supabase.from('categories').select();
    error && console.log(error);
    data && setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="products">
      <Heading
        headingTitle="- Eye Care Products"
        headingDescription="Explore the Eye Care Products"
        position="left"
      />
      <div className="products-list">
        {products.map((el) => {
          return <Product key={el.id} {...el} />;
        })}
      </div>
    </section>
  );
};

export default CategoriesPage;
