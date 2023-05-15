import React from "react";
import Cardnew from "./Cardnew";

function Homeuse() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 al">
              <p className="text-center"> 23 March 2023</p>
              <h3>
                {" "}
                Seniors 64+ in National Capital Territory of Delhi Are Getting
                Up To $2,040/Year Back On Their Social Security Checks*{" "}
                <span className="text-danger">
                  {" "}
                  Thanks to New Medicare Advantage Plans{" "}
                </span>{" "}
              </h3>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-8 text-center   ">
              <img
                className="justify-content-center"
                src="https://tapmedicare.com/b8/images/background.jpg "
                alt="sdd"
                width="auto"
                height="200px"
              />
              <div className="mt-1">
                {" "}
                <h2>Take this short quiz to see if you qualify</h2>{" "}
              </div>

              <div>
                <p className="text-dark">20% Complete </p>{" "}
              </div>
              <div class="progress mt-3">
                <div
                  class="progress-bar w-75"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cardnew />
      
    </div>
  );
}

export default Homeuse;
