import React, { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import StormTrooper from './assets/storm-min.svg';
import { header, header__logo, header__logo__icon, header__logo__text, header__nav } from './Header.style';

import { FaJedi, FaRocket, FaTruck } from 'react-icons/fa';
import { RiEmpathizeFill, RiPlanetFill, RiAliensFill, RiClapperboardFill } from 'react-icons/ri';

export const Header: FC = () => (
  <div css={header}>
    <Link css={header__logo} to="/">
      <div css={header__logo__icon}>
        <img src={StormTrooper} alt="StormTrooper" />
      </div>
      <div css={header__logo__text}> Star Wars Oracle</div>
    </Link>

    <nav css={header__nav}>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
            <FaJedi />
            <span>Pop</span>
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
            to="/starships"
            className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}
          >
            <FaRocket />
            <span>Starships</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/vehicles"
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

export default Header;
