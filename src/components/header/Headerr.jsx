
import "./Header.scss";
import TeacherSvg from "../svgs/teacher";
import headerBackGreen from "/header-back-green.png"
import headerBackLeft from "/header-back-left.png"
import headerMainImg from "/header-main-img.png"

function Header() {

  return (
    <>
      <div className="header-container">
        <div className="header-content-container">
          <div className="header-p-button-container">
            <h1 className="header-title"> ACADEMY ADRA İLE <br />  HAYAT İÇİN İNGİLİZCE ÖĞREN! </h1>
            <p className="header-p"> Lorem ipsum dolor sit,
              <br /> amet consectetur adipisicing elit. Placeat
              <br /> tempore iste repudiandae in itaque possimus
              <br />    eius maxime , non harum dolor
              <br />molestias cumque temporibus.
            </p>
            <button className="header-button"> Aramıza Katılın! </button>
          </div>
          <div>
            <img className="header-person" src={headerMainImg} alt="" />
          </div>
        </div>
        <div className="header-logo-container">
          <img className="header-green" src={headerBackGreen} alt="" />
        </div>
      </div>
    </>
  )
}



export default Header;