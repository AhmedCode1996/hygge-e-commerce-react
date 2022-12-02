import { useState } from 'react';
import Accordion from './../components/Accordion';
import Heading from './../components/Heading';
import './faq.css'

import data from './../data/faq';
const Faq = () => {
  const [faqData] = useState(data);
  return (
    <section className="faq">
      <Heading
        headingTitle="- Find the Answers"
        headingDescription="Frequently Asked Questions"
        position="left"
      />
      <div className="faq-list">
        {faqData.map((el, parentIndex) => {
          const { data } = el;
          return (
            <div key={parentIndex} className="faq-list-item">
              <h2 className='faq-title'>{el.title}</h2>
              <div className="faq-list-item-single">
                {data.map((el, childIndex) => {
                  return <Accordion key={childIndex} {...el} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
