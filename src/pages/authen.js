import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import Navbar from "../component/Navbar/navbar";
import Sidebar from "../component/Sidebar/sidebar";
import Footer from "../component/Footer/footer";

const authen = () => {
  return (
    <div class="container-wrapper">
      <Navbar />
      <main>
        <Sidebar />
        <div className="main-home">
          <div class="main-content">

            <div class="box-auth sign-up mt-4">
              <div class="box-header d-flex justify-content-between align-items-center">
                Sign Up
                <button class="btn__exit-chat">
                  <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                </button>
              </div>
              <form id="form-signup">
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Email" />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder=" Login Password" />
                  <img src="./images/icons/eye.svg" alt="show-pass" />
                </div>
                <div class="risk-level d-flex align-items-center">
                  <div class="process-password  d-flex align-items-center">
                    <div class="process-item error"></div>
                    <div class="process-item average"></div>
                    <div class="process-item secure"></div>
                  </div>
                  <span>High Risk</span>
                </div>
                <div class="form-group enter-pass">
                  <input type="password" class="form-control" placeholder="Re-Enter Password" />
                  <img src="./images/icons/eye.svg" alt="show-pass" />
                </div>
                <div class="form-group resend">
                  <input type="text" class="form-control" placeholder="Verification Code" />
                  <span class="resend">Resend(60s)</span>
                </div>
                <div class="form-group">
                  <label for="inputRePassword4">Enter Referral/Promo Code</label>
                  <input type="password" class="form-control"
                    placeholder="Enter Referral/Promo Code(Optional)" />
                </div>

                <div class="form-group check">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="gridCheck">
                      I agree to the User Agreement & confirm I am at least 18 years old
                    </label>
                  </div>
                </div>
                <div class="form-group check">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="gridCheck">
                      I agree to receive marketing promotions from QGACHA.
                    </label>
                  </div>
                </div>
                <div class="submit d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary">Sign Up</button>
                </div>
                <p class="text-start" style={{ color: "#9E9E9E" }}>Already have an account?
                  <a class="btn-redirect">Sign In</a>
                </p>

              </form>
            </div>

            <div class="box-auth signin mt-4">
              <div class="box-header d-flex justify-content-between align-items-center">
                Sign In
                <button class="btn__exit-chat">
                  <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                </button>
              </div>

              <form>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Email" />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="Login Password" />
                  <img src="./images/icons/eye.svg" alt="show-pass" />
                  <label class="forgot-pass" for="">Forgot Your Password?</label>
                </div>
                <div class="form-group resend mt-0">
                  <div class="enter-code"></div>
                  <input type="text" class="form-control" placeholder="Verification Code" />
                </div>
                <div class="submit d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary">Sign In</button>
                </div>
                <p class="text-start" style={{ color: "#9E9E9E" }}>New to Qgacha?
                  <a class="btn-redirect">Create
                    account</a>
                </p>
              </form>
            </div>


            <div class="box-auth enter-email mt-4">
              <div class="box-header d-flex justify-content-between align-items-center">
                Reset Password
                <button class="btn__exit-chat">
                  <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                </button>
              </div>
              <form>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Email" />
                </div>
                <div class="submit d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                <p class="text-start" style={{ color: "#9E9E9E" }}>Already have an account?
                  <a class="btn-redirect">Sign In</a>
                </p>
              </form>
            </div>


            <div class="box-auth reset-password mt-4">
              <div class="box-header d-flex justify-content-between align-items-center">
                Reset Account Password
                <button class="btn__exit-chat">
                  <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                </button>
              </div>

              <form>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="New password" />
                  <img src="./images/icons/eye.svg" alt="show-pass" />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="New password again" />
                  <img src="./images/icons/eye.svg" alt="show-pass" />
                </div>
                <div class="form-group resend">
                  <input type="text" class="form-control" placeholder="Verification Code" />
                  <span class="resend">Resend(60s)</span>
                </div>
                <p class="notice">Please enter the 6-digit verification code sent to your email. The code is
                  valid for 10
                  minutes.</p>
                <div class="submit d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary">Confirm</button>
                </div>
              </form>
            </div>

            <div class="box-auth two-factor mt-4">
              <div class="box-header d-flex justify-content-between align-items-center">
                Two-factor authentication
                <button class="btn__exit-chat">
                  <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                </button>
              </div>

              <form>
                <p class="text-center">Please enter the 6-digit authentication Code.</p>
                <div class="list-input-number d-flex">
                  <div class="num-item"><input type="text" /></div>
                  <div class="num-item"><input type="text" /></div>
                  <div class="num-item"><input type="text" /></div>
                  <div class="num-item"><input type="text" /></div>
                  <div class="num-item"><input type="text" /></div>
                  <div class="num-item"><input type="text" /></div>
                </div>

              </form>
            </div>

            <div class="box-auth noti-success mt-4">
              <div class="box-header d-flex justify-content-between align-items-center">
                Reset Password
                <button class="btn__exit-chat">
                  <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                </button>
              </div>
              <div class="box-content">
                <h3>Password changed successfully</h3>
                <div class="submit d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary">Confirm</button>
                </div>
              </div>
            </div>

            <div class="box-auth noti-success mt-4">
              <div class="box-header d-flex justify-content-between align-items-center">
                <div></div>
                <button class="btn__exit-chat">
                  <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                </button>
              </div>
              <div class="box-content">
                <h3>Sign Up successfully</h3>
                <div class="submit d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary">Confirm</button>
                </div>
              </div>
            </div>



          </div>
          <Footer />
        </div>
        <button class="btn-support">
          <img src="images/icons/livesupport-icon.svg" alt="" />
        </button>
      </main>
    </div>
  );
};

export default authen;
