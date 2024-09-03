import { useState, useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/home";
import { Layout } from "./Layout";
import Loader from "/loader.gif";
import AcademicPage from "./pages/AcademicPage";

function App() {

  /*
  const { loading, setLoading } = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  */

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/academicPage" element={<AcademicPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
