import Form from '../components/Form';
import Heading from './../components/Heading';
import './login.css';
import Button from '../components/Button';
import './../components/form.css';
import { useState } from 'react';

const Login = () => {
  const [heading] = useState({
    title: '- Login',
    description: 'Login to Your Account',
    position: 'left',
  });
  return (
    <section className="login">
      <Heading
        headingTitle={heading.title}
        headingDescription={heading.description}
        position={heading.position}
      />
      <form className="form">
        <Form
          emailLabel="Email Address"
          passwordLabel="Create Password"
          radioButton="Remember me"
        />
        <Button text="Login" type="button" color="#F7FAFC" bgColor="#00CC96" />
        <div className="login-buttons">
          <Button text='Create Account' border="#EFEFEF" bgColor="white" color="#1A202C"/>
          <Button text='Forgot Password?' bgColor={"white"} color="#1A202C" />
        </div>
      </form>
    </section>
  );
};

export default Login;
