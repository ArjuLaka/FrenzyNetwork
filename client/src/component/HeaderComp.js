import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo512.png';

function disableHold(e) {
  e.preventDefault()
}

function HeaderComp() {
  let [toggle, setToggle] = React.useState(false);
  let handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <React.Fragment>
      <header className="header">
        <div className="hamburger-menu">
          <input type="checkbox" id="header-toggle" name="header-toggle" onChange={handleToggle} />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={toggle ? "header-list" : "header-list terbuka"}>
          <li>Advanced<br /> Search</li>
          <li>Content</li>
          <li>News</li>
          <li>FAQ</li>
          <li>Help & <br />Support</li>
          <li>Settings</li>
        </ul>
        <Link to="/" onContextMenu={disableHold} className="header-logo">
          <img src={logo} alt="FN Logo"/>
        </Link>
        <div className="account">
          <Link to="/user/signin" onContextMenu={disableHold} className="sign-in">
            sign-in
          </Link>
          <Link to="/user/signup" onContextMenu={disableHold} className="sign-up">
            sign-up
          </Link>
        </div>
      </header>
    </React.Fragment>
  )
}

export default HeaderComp;