import profileImage from './img/profile.png'
export default function About() {
   return (
      <section id="about">
         <div className="row section-intro">
            <div className="col-twelve">

               <h5>About</h5>
               <h1>Let me introduce myself.</h1>

               <div className="intro-info">

                  <img src={profileImage} alt="Profile" />

                  <p className="lead">I'm a Bachelor in Computer Science and Communication Engineering. My primary interest lies in using computer programming to solve Real-time problems.</p>
               </div>

            </div>
         </div>

         <div className="row about-content">

            <div className="col-six tab-full">

               <h3>Profile</h3>
               <p>Currently, I'm seeking a full time software engineering/Full Stack WebDeveloper position. If you think I'm a good fit, please contant me via <a href="mailto:malviyachetan02@gmail.com">malviyachetan02@gmail.com</a>.</p>

               <ul className="info-list">
                  <li>
                     <strong>Fullname:</strong>
                     <span>Chetan Malviya</span>
                  </li>
                  <li>
                     <strong>Birth Date:</strong>
                     <span>September 15, 2000</span>
                  </li>
                  <li>
                     <strong>Email:</strong>
                     <span>malviyachetan02@gmail.com</span>
                  </li>

               </ul>

            </div>

            <div className="col-six tab-full">

               <h3>Skills</h3>
               <p>I'm an independent teamworker strong in research and coding. My areas of expertise are Web Developement, computer science and Django. Below are highlights of my technical skills:</p>

               <ul className="skill-bars">
                  <li>
                     <div className="progress percent80"><span>80%</span></div>
                     <strong>React.js</strong>
                  </li>
                  <li>
                     <div className="progress percent80"><span>80%</span></div>
                     <strong>Python(Django)</strong>
                  </li>
                  <li>
                     <div className="progress percent70"><span>70%</span></div>
                     <strong>C/C++</strong>
                  </li>
                  <li>
                     <div className="progress percent60"><span>60%</span></div>
                     <strong>Java</strong>
                  </li>
                  <li>
                     <div className="progress percent70"><span>70%</span></div>
                     <strong>JS/CSS/HTML</strong>
                  </li>


               </ul>

            </div>

         </div>

         <div className="row button-section">
            <div className="col-twelve">
               <a href="mailto:malviyachetan02@gmail.com" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
               <a href="https://shorturl.at/dnvG4" title="Download CV" className="button button-primary">Download CV</a>
            </div>
         </div>
      </section>
   );
}