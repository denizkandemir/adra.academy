import React from "react";
import "./NavbarDropdown.scss"
import { Link } from "react-router-dom";

const NavbarDropdown = ({ content,name }) => {
  return (
    <div className="navbar-dropdown-container">
      {
        content.map((item) => (
          <div key={item.id} className="item-container" >
            <Link
              className="dropdown-link"
              to={{
                pathname: `${item.path}/${item.routeId}`,
                search: `?name=${encodeURIComponent(name)}`,
              }}
            >          
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