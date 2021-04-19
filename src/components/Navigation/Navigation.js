import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="Navigation">
            <ul className="Navigation__list">
              <li className="Navigation__item">
                <NavLink
                  exact
                  to="/"
                  className="Navigation__link"
                  activeClassName="Navigation__link--active"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/movies"
                  className="Navigation__link"
                  activeClassName="Navigation__link--active"
                >
                  Search
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
