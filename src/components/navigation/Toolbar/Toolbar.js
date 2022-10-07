import React from "react";
import "./Toolbar.css";
import Hamburger from "../Hamburger/Hamburger";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Toolbar(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toggle_toolbar_button">
          <Hamburger click={props.SideToggle} />
        </div>
        <div className="toolbar_logo">
          <div><Link to="/">Cycle Auction</Link></div>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation_items">
          <ul>
            <li>
              <Link to="/auctions" >
                Auctions
              </Link>
            </li>
            <li>
              <Link to="/add-auction">Post</Link>
            </li>
            {true ?
              <>
            <li>  
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link title="Profile" to="/profile"><AccountCircleIcon/></Link>
                </li></> : <li><Link to="/login">Login</Link></li>}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
