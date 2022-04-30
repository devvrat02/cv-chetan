import { BrowserRouter as Router,Link } from 'react-router-dom'

import Home from "./Resume/Home/Home";
import About from "./Resume/About/About";
import Resume from "./Resume/Resume/Resume";
import Project from "./Resume/Projects/Project";
import Activities from "./Resume/Activities/Activities";
import Contact from "./Resume/Contact/Contact";

import React from 'react';

function App() {
const [component ,setcomponent] =React.useState(<Home/>);
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
const handleclick=(e)=>{

  // console.log(e.target.innerHTML);
  let val=e.target.innerHTML;
  switch(val){
    case "Home":
      setcomponent(<Home/>);
      scrollToTop();
      break;
    case "Projects":
      setcomponent(<Project/>);
      scrollToTop();
      break;
    case "About":
      setcomponent(<About/>);
      scrollToTop();
      break;
    case "Resume":
      setcomponent(<Resume/>);
      scrollToTop();
      break;
    case "Activities":
      setcomponent(<Activities/>);
      scrollToTop();
      break;
    case "Contact":
      setcomponent(<Contact/>);
      scrollToTop();
      break;
    default:
      setcomponent(<Home/>);  
  }
}
  return (
<>
 
    <div className="App">
              <Router>

    <div>
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li ><Link to="cv-chetan/"  onClick={handleclick} >Home</Link></li>
          <li><Link to="cv-chetan/"  onClick={handleclick}>Projects</Link></li>
          <li><Link to="cv-chetan/"  onClick={handleclick}>About</Link></li>
          <li><Link to="cv-chetan/"  onClick={handleclick}>Resume</Link></li>
          <li><Link to="cv-chetan/"  onClick={handleclick}>Activities</Link></li>
          <li><Link to="cv-chetan/"  onClick={handleclick}>Contact</Link></li>
        </ul>
        
        
        </nav>


    </div>

{component}

 {/* <HomePage /> */}
{/* 
        <Routes>
         <Route exact path="*" element={<Home />} />
          <Route exact path="cv-chetan/" element={<Home />} />
 
          <Route  path="about/" element={<About />} />
          <Route  path="project/" element={<Project />} />
          <Route  path="resume/" element={<Resume />} />
          <Route  path="activities/" element={<Activities />} />
          <Route  path="contact/" element={<Contact />} /> 
          
          

        </Routes>
   */}
   
      </Router>

    </div>
    </>
  );
}

export default App;
