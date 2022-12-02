import { useState } from 'react';
import './reviews.css';
import nextButton from '../icons/categories/next.svg';
import previousButton from '../icons/categories/previous.svg';
import reviews from './../data/reviews.js';
import Review from './Review';
const Reviews = () => {
  const [reviewsData] = useState(reviews);
  return (
    <section className="reviews">
      <div className="reviews-information">
        <h4 className="reviews-information-title">- Our Reviews</h4>
        <h2 className="reviews-information-description">
          What our Customers are Saying
        </h2>
      </div>
      <div className="reviews-list">
        <div className="outer-reviews-list">
          {reviewsData.map((el, index) => {
            return <Review key={index} {...el} />;
          })}
        </div>
        <div className="review-list-dots"></div>
        <div className="review-list-buttons">
          <button className="btn prev-review">
            <img src={previousButton} alt="previous button" />
          </button>
          <button className="btn next-review">
            <img src={nextButton} alt="next button" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
