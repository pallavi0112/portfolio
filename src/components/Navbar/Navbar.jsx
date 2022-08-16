import React from "react";
import './Navbar.css';
const Navbar = () =>{
    return(
        <>
          <div className="nav-wrapper">
              <div className="nav-left">
                 <div className="nav-name">Pallavi</div>
                 <span>toggle</span>
              </div>
              <div className="nav-right">
                  <div className="nav-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experiences</li>
                        <li>Portfolio</li>
                        <li>Testimonals</li>
                    </ul>
                  </div>
               <button className="button nav-button">Contact</button>
              </div>
          </div>
        </>
    )
};

export default Navbar;
