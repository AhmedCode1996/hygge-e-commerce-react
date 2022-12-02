import { useState } from 'react';
import './hero.css';
import Heading from './Heading';
import heroImage from '../images/header-hero.svg';
import { Link } from 'react-router-dom';
const Hero = () => {
  const [heading] = useState({
    title: '- Skincare Products',
    description: 'We Offer the Best Products for your Skin',
    position: 'left',
  });
  return (
    <div className="hero">
      <div className="hero-info">
        <Heading
          headingTitle={heading.title}
          headingDescription={heading.description}
          position={heading.position}
        />
        <button>
          <Link>Shop Now</Link>
        </button>
      </div>
      <div className="hero-img">
        <img src={heroImage} alt="Hero Header" />
      </div>
    </div>
  );
};

export default Hero;
