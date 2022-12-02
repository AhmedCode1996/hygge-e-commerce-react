import { useState, useRef } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import navIcon from '../icons/logo.svg';
import search from '../icons/Search.svg';
import cart from '../icons/Cart.svg';
import profile from '../icons/Profile.svg';
import { motion } from 'framer-motion';
import NavSubMenu from './NavSubMenu';
const Navbar = () => {
  const [navSubMenu, setNavSubMenu] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const focusElement = useRef();
  const clickHandler = () => {
    setNavSubMenu(!navSubMenu);
  };
  const showSearch = () => {
    setSearchInput(!searchInput);
    console.log(focusElement.current.focus === true);
    focusElement.current.focus();
  };
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li className="logo-item">
            <Link to="/">
              <img src={navIcon} alt="navigator icon" />
            </Link>
          </li>
          <li className="menu-item">
            <div className="menu-list" onClick={clickHandler}>
              <span
                className={navSubMenu ? 'top-bar top-bar-rotate' : 'top-bar'}
              ></span>
              <span
                className={
                  navSubMenu ? 'bottom-bar bottom-bar-rotate' : 'bottom-bar'
                }
              ></span>
            </div>
          </li>
          <li className="info-item">
            <motion.div animate className="search-icon">
              <img
                onClick={() => showSearch()}
                className={searchInput ? 'show-search' : null}
                src={search}
                alt="Search logo"
              />
              <input
                ref={focusElement}
                style={{ display: searchInput ? 'block' : 'none' }}
                type="text"
                placeholder="Eye care products for tired eyes"
              />
              {/* {searchInput && (
              )} */}
            </motion.div>
            <div className="cart-icon">
              <img src={cart} alt="Cart logo" />
            </div>
            <div className="profile-icon">
              <img src={profile} alt="Profile logo" />
            </div>
          </li>
        </ul>
      </nav>
      {navSubMenu && <NavSubMenu />}
    </header>
  );
};

export default Navbar;
