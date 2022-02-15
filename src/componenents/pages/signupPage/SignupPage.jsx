import { Link } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  return (
    <div>
      <section>
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div
                  class="card"
                  style={{
                    borderRadius: "25px",
                    // width: "450px",
                  }}
                >
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1cg">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example3cg">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cg">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example4cdg">
                          Repeat your password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          class="form-control form-control-lg"
                        />
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          //   class="  btn-block btn-lg gradient-custom-4 text-body"
                          className="btn_register"
                        >
                          Register
                        </button>
                      </div>

                      <p class="text-center mt-5 mb-0">
                        Have already an account?{" "}
                        <Link to="/signin">
                          <a href="#!" class="fw-bold text-body">
                            <u>Login here</u>
                          </a>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
