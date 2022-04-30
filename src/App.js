import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./Resume/HomePage";
import Home from "./Resume/Home/Home";
import About from "./Resume/About/About";
import Resume from "./Resume/Resume/Resume";
import Project from "./Resume/Projects/Project";
import Activities from "./Resume/Activities/Activities";
import Contact from "./Resume/Contact/Contact";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
<>
 
    <div className="App">
              <Router>
      <ScrollToTop/>
 <HomePage />

        <Routes>
         <Route exact path="*" element={<Home />} />
          <Route exact path="cv-chetan/" element={<Home />} />
          <Route  path="cv-chetan/about/" element={<About />} />
          <Route  path="cv-chetan/project/" element={<Project />} />
          <Route  path="cv-chetan/resume/" element={<Resume />} />
          <Route  path="cv-chetan/activities/" element={<Activities />} />
          <Route  path="cv-chetan/contact/" element={<Contact />} />

        </Routes>
     
      </Router>


    </div>
    </>
  );
}

export default App;
