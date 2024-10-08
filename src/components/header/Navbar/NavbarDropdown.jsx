import React from "react";
import "./NavbarDropdown.scss"
import { Link } from "react-router-dom";

const NavbarDropdown = ({ content }) => {
  return (
    <div className="navbar-dropdown-container">
      {
        content.map((item) => (
          <div key={item.id} className="item-container" >
            <Link className="dropdown-link" to={{ pathname: item.path, }} state={item} >
              <img className="dropdown-img" src={item.img} alt="" />
              <p className="dropdown-title"> {item.title} </p>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default NavbarDropdown;