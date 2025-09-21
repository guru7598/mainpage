import React, { useState } from "react";
// import Navbar from "./components/Navbar";
import FormSection from "./components/FormSection";
import PreviewSection from "./components/PreviewSection";
// import Home from "./components/home";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    about: "",
    education: "",
    projects: "",
    internships: "",
    experience: "",
    publications: "",
    certifications: "",
    email: "",
    phone: "",
  });

  return (
    <div className="app-container">
      {/* <Navbar /> */}
      {/* <Home /> */}
      <div className="main-content">
        <FormSection formData={formData} setFormData={setFormData} />
        <PreviewSection formData={formData} />
      </div>
    </div>
  );
}

export default App;
