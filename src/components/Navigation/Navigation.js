import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation';

const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                className="NavLink__item"
                activeClassName="NavLink__item-active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/movies"
                className="NavLink__item"
                activeClassName="NavLink__item-active"
              >
                Search
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
