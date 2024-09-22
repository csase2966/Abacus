
import { NavLink } from "react-router-dom";

import logo from '../images/logo1.jpeg'
import Image from 'react-bootstrap/Image';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav>
      <ul>
      <div className="image_name">
        <div className="logo" >
                    <Image src={logo} width='40px' alt='Logo' loading='lazy'/>
                    
        </div>
        <div className="title_name">The Bright Future</div>
    </div>
        <li className="links link_home">
          <NavLink to="/" id='link_home'>Home</NavLink>
        </li>
        <li className="links">
          <NavLink to="/bookNow" target="_blank" id='links'>Book Now</NavLink>
        </li>
        {/* <li>
          <NavLink to="/aboutUs" target="_blank">About Us</NavLink>
        </li> */}
        <li className="links">
          <NavLink to="/courses" target="_blank" id='links'>Courses</NavLink>
        </li>
      </ul>
    </nav>
  );
}
