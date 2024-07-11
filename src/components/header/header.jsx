import Navbar from "./navbar"
import logo from "/logo.jpg" 
import "./Header.css";


function Header() {

  return (
    <>
      <Navbar />
      <div className="header-content-container">
        <div className="header-p-button-container">
          <h3 className="header-title"> Lorem ipsum dolor sit, 
            <br/> amet consectetur adipisicing elit. Placeat eius maxime ,
            <br/> tempore iste repudiandae in itaque possimus non harum dolor
             <br/>molestias cumque temporibus.
          </h3>
          <button className="header-button"> Kurslarımız </button>
        </div>
        <div className="header-logo-container">
          <img className="header-logo" src={logo} alt="" />
        </div>
      </div>
    </>
  )
}

export default Header;