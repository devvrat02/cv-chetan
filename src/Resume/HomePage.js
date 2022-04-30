import React from "react";
import { Link } from "react-router-dom";
// import Home from "./Home/Home";
// import About from "./About/About";
// import Resume from "./Resume/Resume";
// import Project from "./Projects/Project";
// import Activities from "./Activities/Activities";
// import Contact from "./Contact/Contact";



function HomePage() {
  return (
    <div>
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li ><Link to="cv-chetan" >Home</Link></li>
          <li><Link to="cv-chetan/project" >Projects</Link></li>
          <li><Link to="cv-chetan/about" >About</Link></li>
          <li><Link to="cv-chetan/resume" >Resume</Link></li>
          <li><Link to="cv-chetan/activities" >Activities</Link></li>
          <li><Link to="cv-chetan/contact" >Contact</Link></li>
        </ul>
        
        
        </nav>


    </div>

  );
}


export default HomePage;
