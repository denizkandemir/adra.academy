import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import { Layout } from "./Layout";
import AcademicPage from "./pages/AcademicPage";
import StudentCoach from "./pages/StudentCoach";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import WorkshopsPage from "./pages/WorkshopsPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/academicPage" element={<AcademicPage/>}/>
          <Route path="/ogrenciKoclugu" element={<StudentCoach/>}/>
          <Route path="/workshopPage" element={<WorkshopsPage/>}/>
          <Route path="/hizmetlerimiz" element={<ServicesPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
