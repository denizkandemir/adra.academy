import React from "react";
import StudentCoachPage from "../components/StudentCoachPage/StudentCoachPage.jsx";
import { useEffect } from "react";


const StudentCoach = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StudentCoachPage />
    </>
  );
};

export default StudentCoach;
