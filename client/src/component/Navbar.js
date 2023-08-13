import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function disableHold(e) {
  e.preventDefault()
}

function Navbar() {
  return (
    <React.Fragment>
      <nav className="nav-parent">
        <ul>
          <li>
           <NavLink to="/article" onContextMenu={disableHold} className={({isActive}) => isActive ? "active" : ""}>
            <FontAwesomeIcon icon="fa-solid fa-newspaper" className="nav-icon" />
            <p>Articles</p>
           </NavLink>
          </li>
          <li>
           <NavLink to="/forum" onContextMenu={disableHold}>
            <FontAwesomeIcon icon="fa-solid fa-user-tie" className="nav-icon"/>
            <p>Forums</p>
           </NavLink>
          </li>
          <li>
           <NavLink to="/" onContextMenu={disableHold}>
            <FontAwesomeIcon icon="fa-solid fa-house" className="nav-icon"/>
            <p>Home</p>
           </NavLink>
          </li>
          <li>
           <NavLink to="/game" onContextMenu={disableHold}>
            <FontAwesomeIcon icon="fa-solid fa-gamepad" className="nav-icon" />
            <p>Games</p>
           </NavLink>
          </li>
          <li>
           <NavLink to="/book" onContextMenu={disableHold}>
            <FontAwesomeIcon icon="fa-solid fa-book" className="nav-icon" />
            <p>Books</p>
           </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;