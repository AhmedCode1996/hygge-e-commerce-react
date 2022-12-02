import { Link } from 'react-router-dom';
import facebook from './../assets/footer/facebook.svg';
import twitter from './../assets/footer/twitter.svg';
import instagram from './../assets/footer/instagram.svg';
import footerLogo from './../assets/footer/Logo.svg';
import category from './../data/categories';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-rights">
        <div className="footer-rights-logo">
          <img src={footerLogo} alt="Footer Rights Logo" />
        </div>
        <h3 className="footer-rights-title">© 2022 - All rights reserved</h3>
        <div className="footer-rights-icons">
          <Link to="/">
            <img src={instagram} alt="Instagram Icon" />
          </Link>
          <Link to="/">
            {' '}
            <img src={twitter} alt="Twitter Icon" />
          </Link>
          <Link to="/">
            {' '}
            <img src={facebook} alt="Facebook Icon" />
          </Link>
        </div>
        <div className="mode-toggle"></div>
      </div>
      <div className="footer-categories">
        <h2 className="footer-categories-title">Categories</h2>
        <ul>
          {category.map((el, index) => {
            return (
              <li key={index}>
                <Link>{el.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footer-legal">
        <h2 className="footer-legal-title">Legal</h2>
        <ul>
          <li>
            <Link>Terms of Service</Link>
          </li>
          <li>
            <Link>Privacy Policy</Link>
          </li>
          <li>
            <Link>Returns Policy</Link>
          </li>
          <li>
            <Link>Shipping</Link>
          </li>
          <li>
            <Link>Data Protection</Link>
          </li>
        </ul>
      </div>
      <div className="footer-company">
        <h2 className="footer-company-title">Company</h2>
        <ul>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Faq</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link>Careers</Link>
          </li>
          <li>
            <Link>Vision</Link>
          </li>
          <li>
            <Link>Culture</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
