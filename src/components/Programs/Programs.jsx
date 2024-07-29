import "./Programs.scss";
import img1 from "/atölye-adra.jpeg"
import img2 from "/destek-adra.jpeg"
import img3 from "/öğrenci-koçluğu-adra.jpeg"
import img4 from "/adra-koç.jpeg"


const Programs = () => {

  const courses = [

    {
      img: img1,
      title: "Yabancı Dil Atölyeleri",
      id: 1
    },


    {
      img: img2,
      title: "Birebir Akademik Destek ",
      id: 2,
    },

    {
      img: img3,
      title: "Öğrenci Koçluğu",
      id: 3,
    },

    {
      img: img4,
      title: "Yabancı Dil Koçluğu",
      id: 4,
    },
  ]

  return (
    <div className="programs-container">
      <p className="programs-main-title">  Programlarımız </p>
      <div className="courses-container">
        {
          courses.map((course) => (
            <div key={course.id} className="programs-title-container">
              <img className="programs-img" src={course.img} alt="" />
              <p className="courses-title">  {course.title} </p>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default Programs;