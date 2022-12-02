import './button.css';
import { Link } from 'react-router-dom';
const button = ({ text, type, color, bgColor, link, path, border }) => {
  return (
    <button className='global-button' style={{ backgroundColor: bgColor, border: `2px solid ${border}` }} type={type}>
      <Link style={{ color: color }} to={path}>
        {text}
      </Link>
    </button>
  );
};

export default button;
