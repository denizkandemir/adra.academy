import React from "react";
import img1 from "/atölye-adra.jpeg"
import img2 from "/destek-adra.jpeg"
import img3 from "/öğrenci-koçluğu-adra.jpeg"
import img4 from "/adra-koç.jpeg"
import "./NavbarDropdown.scss"


const NavbarDropdown = ({ content }) => {
  return (
    <div className="navbar-dropdown-container">
      {
        content.map((item) => (
          <div key={item.id} className="item-container" >
            <img className="dropdown-img" src={item.img} alt="" />
            <p className="dropdown-title"> {item.title} </p>
          </div>
        ))
      }
    </div>
  )
}

export default NavbarDropdown;