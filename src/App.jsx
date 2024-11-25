import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import { Layout } from "./Layout";
import AcademicPage from "./pages/AcademicPage";
import StudentCoach from "./pages/StudentCoach";
import ServicesPage from "./pages/ServicesPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/iletişim" element={<Contact />} />
          <Route path="/akademikBaşarı/:routeId" element={<AcademicPage/>}/>
          <Route path="/öğrenciKoclugu/:routeId" element={<StudentCoach/>}/>
          <Route path="/atölyeler/:routeId" element={<WorkshopsPage/>}/>
          <Route path="/:path/:routeId" element={<ServicesPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
