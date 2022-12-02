import { useState } from 'react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../components/Form';
import Heading from './../components/Heading';
import './signup.css';
import Button from '../components/Button';
import './../components/form.css';
const SignUp = () => {
  const userInformation = {
    email: '',
    password: '',
    isUser: false,
  };
  const [user, setUser] = useState(userInformation);
  const [heading] = useState({
    title: '- Sign Up',
    description: 'Create Account',
    position: 'left',
  });
  const notify = () => {
    toast.success('successful signup', {
      position: 'top-right',
      autoClose: 2000,
      transition: Flip,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const toggleUser = () => {
    console.log('hello');
  };

  return (
    <section className="signup">
      <Heading
        headingTitle={heading.title}
        headingDescription={heading.description}
        position={heading.position}
      />
      <form className="form">
        <Form
          handleChange={handleChange}
          emailValue={user.email}
          passwordValue={user.password}
          emailLabel="Email Address"
          passwordLabel="Create Password"
          radioButton="I have read and agree to terms & conditions"
        />
        <div className="register-buttons">
          <Button
            text="Create Account"
            type="submit"
            color="#F7FAFC"
            bgColor="#00CC96"
          />
          <Button
            text="Login"
            type="button"
            color="#363C46"
            bgColor="#F7FAFC"
            handleClick={toggleUser}
            path={user.email && user.password && "/login"}
          />
        </div>
        {/* <Button text="Login" type="button" color="#F7FAFC" bgColor="#00CC96" /> */}
      </form>
      <ToastContainer />
    </section>
  );
};

export default SignUp;
