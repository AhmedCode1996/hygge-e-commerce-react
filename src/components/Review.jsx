import './review.css';
const Review = ({ src, title, description }) => {
  return (
    <article className="review">
      <div className="review-list-image">
        <img src={src} alt={title} />
      </div>
      <h2 className="review-list-title">{title}</h2>
      <p className="review-list-description">{description}</p>
    </article>
  );
};

export default Review;
