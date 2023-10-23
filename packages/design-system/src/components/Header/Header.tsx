import React from 'react';
import { NavLink } from 'react-router-dom';
import StormTrooper from './assets/storm-min.svg';
import { header, logo_group, logo_group__icon, logo_group__type, header__nav } from './Header.style';

import { FaJedi, FaRocket, FaTruck } from 'react-icons/fa';
import { RiEmpathizeFill, RiPlanetFill, RiAliensFill, RiClapperboardFill } from 'react-icons/ri';

function Header() {
  return (
    <div css={header}>
      <div css={logo_group}>
        <div css={logo_group__icon}>
          <img src={StormTrooper} alt="StormTrooper" />
        </div>
        <div css={logo_group__type}> Star Wars Oracle</div>
      </div>

      <nav css={header__nav}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
              <FaJedi />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/films"
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
            >
              <RiClapperboardFill />
              <span>Films</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/people"
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
            >
              <RiEmpathizeFill />
              <span>People</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/planets"
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
            >
              <RiPlanetFill />
              <span>Planets</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/species"
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
            >
              <RiAliensFill />
              <span>Species</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/starship"
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
            >
              <FaRocket />
              <span>Starships</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vehicle"
              className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
            >
              <FaTruck />
              <span>Vehicles</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
