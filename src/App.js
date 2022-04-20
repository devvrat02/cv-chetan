import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./Resume/HomePage";
import Home from "./Resume/Home/Home";
import About from "./Resume/About/About";
import Resume from "./Resume/Resume/Resume";
import Project from "./Resume/Projects/Project";
import Activities from "./Resume/Activities/Activities";
import Contact from "./Resume/Contact/Contact";

function App() {
  return (
<>
 
    <div className="App">
      <Router>
 <HomePage />

        <Routes>
         <Route exact path="*" element={<Home />} />
         
       
          <Route exact path="*" element={<Home />} />
          <Route  path="about" element={<About />} />
          <Route  path="project" element={<Project />} />
          <Route  path="resume" element={<Resume />} />
          <Route  path="activities" element={<Activities />} />
          <Route  path="contact" element={<Contact />} />

        </Routes>
      </Router>


    </div>
    </>
  );
}

export default App;
