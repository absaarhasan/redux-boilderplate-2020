import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import style from './style';

const Nav: React.FC<{}> = () => (
  <nav
    data-testid="nav-container"
    css={style}
  >
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Auth</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
