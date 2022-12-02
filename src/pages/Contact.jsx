import React, { useState } from 'react';
import './contact.css';
import Heading from '../components/Heading';
import Button from './../components/Button';
import contactData from './../data/contactInfo';
import InputForm from '../components/InputForm';

const Contact = () => {
  const [data] = useState(contactData);
  const [contactValues, setContactValues] = useState({ name: '', email: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactValues({ ...contactValues, [name]: value });
  };
  return (
    <section className="contact">
      <Heading
        headingTitle="- Ask Questions"
        headingDescription="We are always here to help you"
        position="left"
      />
      <div className="contact-services">
        {data.map((el, index) => {
          return (
            <div className="contact-item" key={index}>
              <h2>{el.title}</h2>
              <p>{el.description}</p>
            </div>
          );
        })}
      </div>
      <div className="contact-information">
        <Heading
          headingTitle="- Reach Out to Us"
          headingDescription="Please fill out the contact form"
          position="left"
        />
        <form className="contact-form">
          <InputForm
            labelValue="Full Name"
            inputType="text"
            inputName="name"
            inputValue={contactValues.name}
            handleChange={handleChange}
          />
          <InputForm
            labelValue="Email Address"
            inputType="email"
            inputName="email"
            inputValue={contactValues.email}
            handleChange={handleChange}
          />
          <p className="subject-form">
            <label>Subject</label>
            <select>
              <option value="1">Subject1</option>
              <option value="2">Subject2</option>
            </select>
          </p>
          <p className="message-form">
            <label>Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </p>
          <Button text="Send" type="submit" color="white" bgColor="#00CC96" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
