import React, { memo } from "react";

function Home() {

   return (


      <header id="home">
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Chetan Malviya</h1>
               <h3> <span>Full Stack WebDeveloper</span> | <span>Software Engineer</span>
                  {/* | <span>M</span> */}
               </h3>
               {/* <h3><span>background pc: Himalayas by Sunwoo Kang</span></h3> */}
               <hr />
               <ul className="social">
                  <li><a href="https://github.com/devvrat02"><i className="fa fa-github"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/chetan-malviya-425b48179"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="mailto:malviyachetan02@gmail.com"><i className="fa fa-envelope"></i></a></li>
               </ul>
            </div>
         </div>

      </header>

   );
}


export default memo(Home);