import { useState } from 'react';
import './services.css';
import services from './../data/services';
import Service from './Service';
import Heading from './Heading';
const Services = () => {
  const [servicesData] = useState(services);
  return (
    <section className="services">
      <Heading
        headingTitle="- Why Us"
        headingDescription="Why People Choose Us"
        position="center"
      />
      <div className="services-list">
        {servicesData.map((el, index) => {
          return <Service key={index} {...el} />;
        })}
      </div>
    </section>
  );
};

export default Services;
