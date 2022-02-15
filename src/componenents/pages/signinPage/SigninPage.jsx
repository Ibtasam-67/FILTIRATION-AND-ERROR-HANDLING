const SigninPage = () => {
  return (
    <div>
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div style={{ width: "450px" }}>
                <div class="card-body p-5 text-center">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="  mb-5">Please enter your login and password!</p>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typeEmailX">
                        Email
                      </label>
                      <input
                        type="email"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <div class="form-outline form-white mb-4">
                      <label class="form-label" for="typePasswordX">
                        Password
                      </label>
                      <input
                        type="password"
                        id="typePasswordX"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <p class="small mb-5 text-end pb-lg-2">
                      <a>Forgot password?</a>
                    </p>

                    <button class=" btn-lg px-5" type="submit">
                      Login
                    </button>
                  </div>

                  <div>
                    <p class="mb-0">
                      Don't have an account?{" "}
                      <a href="#!" class="  fw-bold">
                        Sign Up
                      </a>
                    </p>
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

export default SigninPage;
