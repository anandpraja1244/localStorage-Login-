import React from "react";
import Homeuse from "./Homeuse";

function Nav3() {
  return (
    <div>
          <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col">
            <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <img
                    src="https://tapmedicare.com/b8/images/tap_logo3.svg"
                    width="100px"
                    height="30px"
                    alt="sd"
                    class="img-responsive"
                  />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="top-button">
                  <div id="button-O-lOVCj2r" class="phone-wrap">
                    <a>
                      <span>
                        <img
                          src="https://tapmedicare.com/b8/images/phone-call-red.gif"
                          width="60px"
                          height="30px"
                          alt="asda"
                        />
                      </span>
                      (833) 748-0105
                    </a>
                  </div>
                  <div>
                    <h2 className="newh2  text-danger">
                      Live Agents Available
                    </h2>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    
        <Homeuse/>
    </div>
  );
}

export default Nav3;
