import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/films">Films</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
      <hr />
      <footer>Footer ⚡️</footer>
    </div>
  );
};
