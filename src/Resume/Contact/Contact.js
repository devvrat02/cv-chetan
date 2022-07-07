export default function Contact() {
   return (
   <section id="contact" >

      <div className="row section-intro">
         <div className="col-twelve">

            <h5>Contact</h5>
            <h1>I'd Love To Connect With You.</h1>

            <p className="lead">Let me get to know more about you.</p>

         </div>
      </div>

      <div className="row contact-info">

         <div className="col-four tab-full">

            <div className="icon">
               <i className="fa fa-location-arrow"></i>
            </div>

            <h5>Where to find me</h5>

            <p>
               445 CM-IInd Nyay Nagar<br />
               Shukhliya, Indore<br />
               452010 IN
            </p>

         </div>

         <div className="col-four tab-full collapse">

            <div className="icon">
               <i className="icon-mail"></i>
            </div>

            <h5>Email Me At</h5>

            <p>malviyachetan02@gmail.com<br />
            </p>

         </div>

         <div className="col-four tab-full collapse">

            <div className="icon">
               <i className="fa fa-linkedin"></i>
            </div>

            <h5>Let's Connect</h5>
            <a href="https://www.linkedin.com/in/devvrat02" >LinkedIn Profile</a>

         </div>

      </div>


   </section>
   );
}