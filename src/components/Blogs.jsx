import './blogs.css';
import { useState } from 'react';

import blogs from './../data/blogs';
import Blog from './Blog';
import { Link } from 'react-router-dom';
const Blogs = () => {
  const [blogsData] = useState(blogs);
  return (
    <section className="blogs">
      <h2 className="blogs-title">- Our Blog</h2>
      <h4 className="blogs-description">Check Out our Blog</h4>
      <div className="blogs-list">
        {blogsData.map((el, index) => {
          return <Blog key={index} {...el} />;
        })}
      </div>
      <button className="btn blogs-btn">
        <Link to="/">View All</Link>
      </button>
    </section>
  );
};

export default Blogs;
