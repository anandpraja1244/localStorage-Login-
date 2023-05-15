import React from "react";
import About from "./About";

function Help() {
  return (
    <div>
      <div className="container">
        <div className="">
          <div className="row justify-content-center">
            <p className="text-center"> How We Can Help You </p>
            <div className="col-3 ">
              <img
                className="img-responsive"
                src="https://tapmedicare.com/b8/images/6af1ed4b-2eaf-428f-a06d-95a11d85de43.png"
                alt="ass" width="auto" height="auto"
              />
           
            </div>
         
            <div className="col-3 ">
              <img
                className="img-responsive"
                src="https://tapmedicare.com/b8/images/c54e5c63-02c2-4499-aa38-a1c35816feae.png"
                alt="ass"
                width="auto" height="auto"
              />
            </div>
            <div className="col-3 ">
              <img
                className="img-responsive"
                src="https://tapmedicare.com/b8/images/56e2d590-c09d-4b09-937e-4fd210fbeea0.png"
                alt="ass"
                width="auto" height="auto"
              />
            </div>
          </div>
        </div>
      </div>
      <About/>
    </div>
  );
}

export default Help;
