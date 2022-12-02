import './form.css';
const Form = ({
  emailLabel,
  emailValue,
  passwordLabel,
  passwordValue,
  radioButton,
  handleChange,
}) => {
  return (
    <>
      <p className="email-form">
        <label htmlFor="email">{emailLabel}</label>
        <input
          type="text"
          name="email"
          id="email"
          value={emailValue}
          onChange={handleChange}
        />
      </p>
      <p className="password-form">
        <label htmlFor="password">{passwordLabel}</label>
        <input
          type="password"
          name="password"
          id="password"
          value={passwordValue}
          onChange={handleChange}
        />
      </p>
      <p className="radio-form">
        <input type="radio" required/>
        <label>{radioButton}</label>
      </p>
    </>
  );
};

export default Form;
