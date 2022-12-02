import { Link } from 'react-router-dom';
import './product.css';
const Product = ({
  src,
  title,
  oldPrice,
  newPrice,
  category,
  discount,
  backgroundColor,
  color,
  id
}) => {
  return (
    <article className="product">
      <div className="product-image">
        <Link to={`${id}`}><img src={src} alt={title} /></Link>
        <span
          style={{ padding: discount ? '1rem 1.5rem' : 'null' }}
          className="product-discount"
        >
          {discount || null}
        </span>
        <Link className="product-link" to="/">
          Add To Cart
        </Link>
      </div>
      <h2 className="product-title">{title}</h2>
      <div className="card-information">
        <h3
          className="card-category"
          style={{ backgroundColor: backgroundColor, color: color }}
        >
          {category}
        </h3>
        <div className="card-price">
          <span className="old-card-price">{oldPrice || ''}</span>
          <span className="new-card-price">{newPrice}</span>
        </div>
      </div>
    </article>
  );
};

export default Product;
