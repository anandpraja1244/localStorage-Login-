import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SingForm() {
  const [error, setError] = useState(false);
  const [nameForm, setNameForm] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    select: "",
  });

  const navigate = useNavigate();

  const handelForm = (e) => {
    setNameForm({ ...nameForm, [e.target.name]: e.target.value });
  };

  const handelButton = async (e) => {
    if (nameForm.password !== nameForm.confirmpassword)
      return alert("password and confirm password should be same!");

    if (
      !nameForm.username ||
      !nameForm.password ||
      !nameForm.confirmpassword ||
      !nameForm.select
    ) {
      setError(true);
      return false;
    } else {
      localStorage.setItem("userDetails", JSON.stringify(nameForm));
      navigate("/login-page");
    }
  };

  return (
    <div>
      <div>
        <section class="vh-100">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6 text-black">
                <div class="px-5 ms-xl-4">
                  <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"></i>
                  {/* <span class="h1 fw-bold mb-0">Logo</span> */}
                </div>

                <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                  <form style={{ width: "23rem" }}>
                    <h3 class="fw-normal mb-3 pb-3">Register</h3>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example19">
                        UserName
                      </label>
                      <input
                        type="text"
                        id="form2Example19"
                        class="form-control form-control-lg"
                        alt="sdad"
                        name="username"
                        value={nameForm.username}
                        onChange={handelForm}
                      />

                      {error && !nameForm.username && (
                        <span className="text-danger">
                          {" "}
                          please enter vailed username{" "}
                        </span>
                      )}
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form2Example28">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form2Example28"
                        class="form-control "
                        alt="adsl"
                        name="password"
                        value={nameForm.password}
                        onChange={handelForm}
                      />

                      {error && !nameForm.password && (
                        <span className="text-danger">
                          {" "}
                          please enter vailed password{" "}
                        </span>
                      )}
                    </div>
                    <div class="form-outline mb-4">
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example28">
                          confirmpassword
                        </label>
                        <input
                          type="password"
                          id="form2Example28"
                          class="form-control "
                          alt="adsl"
                          name="confirmpassword"
                          value={nameForm.confirmpassword}
                          onChange={handelForm}
                        />

                        {error && !nameForm.confirmpassword && (
                          <span className="text-danger">
                            {" "}
                            please enter vailed confirmpassword
                          </span>
                        )}
                      </div>
                      <label class="form-label" for="form2Example28">
                        Role
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        value={nameForm.select}
                        name="select"
                        onChange={handelForm}
                      >
                        <option value="">Select a role</option>
                        <option value="Admin">Admin</option>
                        <option value="Client">Client</option>
                      </select>
                    </div>
                    <div class="pt-1 mb-4">
                      <button
                        class="btn btn-info btn-lg btn-block"
                        type="button"
                        onClick={handelButton}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SingForm;
