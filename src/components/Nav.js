import React from 'react';
import logo from '../logo.svg';

export default function Nav() {
  return (
    <div>
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </nav>
    </div>
  );
}
