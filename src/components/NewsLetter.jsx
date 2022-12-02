import { useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from './Heading';
import './newsLetter.css';
const NewsLetter = () => {
  const [heading] = useState({
    title: '- Our Newsletter',
    description: 'Sign Up to our Newsletter',
    position: 'center',
  });
  return (
    <section className="newsletter">
      <Heading
        headingTitle={heading.title}
        headingDescription={heading.description}
        position={heading.position}
      />
      <form className="newsletter-form">
        <input type="text" name="" placeholder="Your Email" />
        <button className="btn submit-form">
          <Link to="/">Sign Up</Link>
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;
