import React from "react";

function Testimonials() {
  return (
    <div>
      <div className="container mt-3">
        <div className="">
          <div className="row d-flex justify-content-center">
            <h2 className="text-center"> Testimonials </h2>
            <div className="col-4 ">
              <div class="card text-center">
                <div class="card-body" id="new333">
                  <img
                    src=" https://tapmedicare.com/b8/images/quote.svg "
                    alt="sas"
                  />
                  <p class="card-text">
                    They found me thousands of dollars in savings and additional
                    coverage to my current Medicare plan.
                  </p>
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="Avatar"
                    style={{ width: "200px" }}
                  ></img>
                  <p class="card-text">Ana</p>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div class="card-footer text-muted">2 days ago</div>
              </div>
            </div>
            <div className="col-4 ">
              <div class="card text-center">
                <div class="card-header">Featured</div>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div class="card-footer text-muted">2 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
