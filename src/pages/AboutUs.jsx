import './aboutUs.css';
import './../components/services.css';
import { useState } from 'react';
import aboutServices from './../data/aboutUsServices';
import Service from './../components/Service';
import Heading from './../components/Heading';
import wideImage from './../assets/aboutUs/company-bg.jpg';
import smallImage from './../assets/aboutUs/company-photo.jpg';
const AboutUs = () => {
  const [servicesData] = useState(aboutServices);

  return (
    <section className="about-us">
      <Heading
        headingTitle="- Learn More"
        headingDescription="All About Us"
        position="left"
      />
      <div className="about-us-image">
        <img src={wideImage} alt="about us product" />
      </div>
      <div className="about-us-information">
        <div className="information-logo">
          <Heading
            headingTitle="- How it has Started"
            headingDescription="How and When it has All Started"
            position="left"
          />
          <div className="information-logo-image">
            <img src={smallImage} alt="information logo" />
          </div>
        </div>
        <div className="information-description">
          <div className="description-ingredients">
            <h2>Natural Ingredients Only</h2>
            <p>
              10 years ago, when one of the co-founders came up with the idea of
              making skincare and beauty products using only natural
              ingredients, he did not even think twice.
            </p>
          </div>
          <div className="description-strategy">
            <h2>Affordable Pricing Strategy</h2>
            <p>
              One of our main goals from the start was to offer high quality
              products that would also have affordable prices. We just can't
              believe that we have finally achieved this and now we are proud of
              it.
            </p>
          </div>
        </div>
      </div>
      <Heading
        headingTitle="- Company Values"
        headingDescription="Our Core Values"
        position="center"
      />
      <div className="services">
        <div className="services-list">
          {servicesData.map((el, index) => {
            return <Service key={index} {...el} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
