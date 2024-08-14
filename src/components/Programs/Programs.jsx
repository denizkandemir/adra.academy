import "./Programs.scss";
import BooksPeople from "../svgs/BooksPeople";
import courses from '../objects/courses';

const Programs = () => {

  return (
    <div className="programs-container">
      <div className="programs-main-title-container">
        {/* <BooksPeople width={60} height={60}/> */}
        <p className="programs-main-title">  Kurslarımız </p>
      </div>
      <div className="courses-container">
        {
          courses.map((course) => (
            <div key={course.id} className="programs-wrapper">
              <img className="programs-img" src={course.img} alt="" />
              <div className="programs-content-container">
                <p className="courses-title">  {course.title} </p>
                <div className="programs-bottom-content-container">
                  <div className="programs-svg-p-container">
                    <p className="programs-p"> Online </p>
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
                  <button className="programs-button">  Keşfet </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Programs;