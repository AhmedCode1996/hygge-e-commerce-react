import React from 'react';
import { NavLink } from 'react-router-dom';
import './navSubMenu.css';

const NavSubMenu = () => {
  const activeLink = ({ isActive }) => ({
    color: isActive ? '#00CC96' : 'black',
  });
  return (
    <article className="nav-sub-menu">
      <ul className="nav-sub-list">
        <li className="nav-sub-item">
          <NavLink to="/" style={activeLink} end>
            Home
          </NavLink>
        </li>
        <li className="nav-sub-item">
          <NavLink to="/categories" style={activeLink}>
            Categories
          </NavLink>
        </li>
        <li className="nav-sub-item">
          <NavLink to="/blog" style={activeLink}>
            Blog
          </NavLink>
        </li>
        <li className="nav-sub-item">
          <NavLink to="/aboutus" style={activeLink}>
            About
          </NavLink>
        </li>
        <li className="nav-sub-item">
          <NavLink to="/contactus" style={activeLink}>
            Contact
          </NavLink>
        </li>
      </ul>
    </article>
  );
};

export default NavSubMenu;
