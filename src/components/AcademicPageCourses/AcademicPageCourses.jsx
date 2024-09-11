import courses from "../../objects/courses";
import { Link } from "react-router-dom";
import "./AcademicPageCourses.scss";

const AcademicPageCourses = () => {
  return (
    <div className="academic-courses-container">
      {
        courses.map((course) => (
          <div key={course.id} className={parseInt(course.id) % 2 === 0 ? "academic-course-main-wrapper" : "academic-course-main-wrapper course-background"} >
            <div className={parseInt(course.id) % 2 === 0 ? "academic-course-wrapper" : "academic-course-wrapper reverse"}>
              <img src={course.img} alt="" className="academic-course-img" />
              <div className="academic-course-title-container">
                <p className={parseInt(course.id) % 2 === 0 ? "academic-gray-p" : "academic-gray-p white-p opacity-p"}> Kurslarımız </p>
                <h3 className={parseInt(course.id) % 2 === 0 ? "academic-course-title" : "academic-course-title white-p"}> {course.title} </h3>
                <p className={parseInt(course.id) % 2 === 0 ? "academic-course-p opacity-p" : "academic-course-p white-p "}> {course.text} </p>
                <p className={parseInt(course.id) % 2 === 0 ? "academic-course-p second-p opacity-p" : "academic-course-p second-p white-p"}> {course.text2} </p>
                <Link to={course.path}>
                  <button className={parseInt(course.id) % 2 === 0 ? "academic-course-button" : "academic-course-button black-button"}> Kurs Detayını Gör </button>
                </Link>
              </div>
            </div>
          </div>

        ))
      }
    </div>
  )
}

export default AcademicPageCourses;