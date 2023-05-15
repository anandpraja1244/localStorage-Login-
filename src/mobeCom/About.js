import React from "react";
import Testimonials from "./Testimonials";

function About() {
  return (
    <div>
      <div className="container mt-3">
        <div className="">
          <div className="row justify-content-center">
            <h2 className="text-center"> About Us </h2>
            <div className="col-8 ">
              <p>
                Our mission is to help every American 65 or older to claim their
                benefits at the lowest cost possible. Our helpline connects you
                to agents that can assist you with getting you the lowest cost
                plan available to you.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
       
            <div className="col-8 ">
           

      </div>
      <div className="col-8 text-center ">
            <h2><span className="text-danger text-center"> number</span> Tap Below to Call Now

</h2>
<button type="button" class="btn btn-danger btn-lg">(877) 646-1672</button>
<p className="mt-2">Our enrollment agents are very busy getting people signed up, so if you don't immediately get connected, please try again! </p> 
                
      </div>
      </div>
      </div>
      <Testimonials/>
    </div>
  );
}

export default About;
