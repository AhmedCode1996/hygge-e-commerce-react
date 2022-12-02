import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Category from './Category';
import nextButton from '../icons/categories/next.svg';
import previousButton from '../icons/categories/previous.svg';
import categoryData from '../data/categories';
import './categories.css';
const Categories = () => {
  const [categories] = useState(categoryData);
  const [scrollWidth, setScrollWidth] = useState(0);
  const categoryRef = useRef();
  useEffect(() => {
    setScrollWidth(
      categoryRef.current.scrollWidth -
        categoryRef.current.getBoundingClientRect().width
    );
  }, []);
  return (
    <section className="categories-section">
      <h4 className="categories-title">- The Categories</h4>
      <div className="categories-description">
        <h2 className="categories-description-title">Browse By Category</h2>
        <div className="categories-buttons">
          <button className="btn previous-button">
            <img src={previousButton} alt="" />
          </button>
          <button className="btn next-button">
            <img src={nextButton} alt="" />
          </button>
        </div>
      </div>
      <motion.div className="outer-category">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -scrollWidth }}
          className="categories-list"
          ref={categoryRef}
        >
          {categories.map((el, index) => (
            <Category key={index} {...el} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Categories;
