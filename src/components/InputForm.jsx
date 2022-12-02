import './inputForm.css';
const InputForm = ({
  labelValue,
  inputType,
  inputName,
  inputValue,
  handleChange,
}) => {
  return (
    <p>
      <label>{labelValue}</label>
      <input
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={handleChange}
      />
      
    </p>
  );
};

export default InputForm;
