import React from 'react';
import './blog.css';
const Blog = ({
  src,
  title,
  category,
  categoryBgColor,
  categoryColor,
  tag,
  tagBgColor,
}) => {
  return (
    <article className="blog">
      <div className="blog-image">
        <img src={src} alt={title} />
        <span
          style={{
            padding: tag ? '1rem 1.5rem' : 'null',
            backgroundColor: tagBgColor,
          }}
          className="blog-tag"
        >
          {tag || null}
        </span>
      </div>
      <h2 className="blog-title">{title}</h2>
      <h3
        className="blog-category"
        style={{ backgroundColor: categoryBgColor, color: categoryColor }}
      >
        {category}
      </h3>
    </article>
  );
};

export default Blog;
