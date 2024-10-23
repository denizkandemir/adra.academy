import "./Programs.scss";
import courses from "../../objects/courses";
import { Link } from "react-router-dom";
import background from "/cards-background.png"
import reverseBackground from "/cards-background-reverse.png"


const Programs = () => {

  return (
    <div className="programs-container">
      <div className="programs-content-container">
        <div className="programs-main-title-container">
          <div className="title-text-container">
            <p className="programs-main-title">Kurslarımız</p>
            <p className="programs-main-text"> Academy Adra, İngilizce dil becerilerinizi geliştirmek ve hedeflerinize ulaşmanıza yardımcı olmak için geniş bir yelpazede kurslar sunmaktadır.</p>
            <p className="programs-motto-p"> Academy Adra Başarı İçin Doğru Tercih!</p>
          </div>
        </div>
  
        <div className="courses-container">
          {courses.map((course) => (
            <div key={course.id} className="programs-wrapper">
              <img className="programs-img" src={course.img} alt="" />
              <div className="programs-content-container">
                <p className="courses-title">{course.title}</p>
                <div className="programs-bottom-content-container">
                  <div className="programs-svg-p-container">
                    <p className="programs-p">Online</p>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                        stroke="rgb(255,255,255)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="programs-svg-p-container">
                    <p className="programs-p"> Yüz Yüze </p>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                        stroke="#FFFFFF"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <Link className="programs-link"  to={{ pathname: course.path,}} state={course} >
                   <button className="programs-button">  Keşfet </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}

      export default Programs;