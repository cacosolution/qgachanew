import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/flickity.css"
import "../css/base.css"
import "../css/home.css"
import "../css/responsive.css"
import Navbar from '../component/Navbar/navbar';
import Sidebar from '../component/Sidebar/sidebar';
import Footer from '../component/Footer/footer';
import BoxOverlay from '../component/Box/BoxOverlay';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Authen = () => {
  const [isOpenResgiter, setIsOpenResgiter] = useState(false)
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [isOpenResetPassword, setIsOpenResetPassword] = useState(false)
  const [isOpenVerification, setIsOpenVerification] = useState(false)
  const [isOpenResetAccount, setIsOpenResetAccount] = useState(false)
  const [isOpenConfirmResetAccount, setIsOpenConfirmResetAccount] = useState(false)
  const [isOpenConfirmResgiter, setIsOpenConfirmResgiter] = useState(false)

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("")

  const onlyNumbersRegex = /^[0-9]+$/;
  const onlyLettersRegex = /^[a-zA-Z]+$/;
  const alphanumericRegex = /^[0-9a-zA-Z]+$/;
  const vietnameseCharactersRegex = /[^\x00-\x7F]+/;


  const handlerLogin = () => {
    setIsOpenLogin(!isOpenLogin)
    setIsOpenResgiter(!isOpenResgiter)
  }

  const handlerResetPassword = () => {
    setIsOpenResetPassword(!isOpenResetPassword)
    setIsOpenLogin(!isOpenLogin)
  }
  const handlerResetAccountPassword = () => {
    setIsOpenResetPassword(!isOpenResetPassword)
    setIsOpenResetAccount(!isOpenLogin)
  }
  const handlerLoginVerification = () => {
    setIsOpenLogin(!isOpenLogin)
    setIsOpenVerification(!isOpenVerification)
  }

  const handlerResgiterConfirm = () => {
    setIsOpenResgiter(!isOpenResgiter)
    setIsOpenConfirmResgiter(!isOpenConfirmResgiter)
  }

  const handlerResetPassWordConfirm = () => {
    setIsOpenResetAccount(!isOpenResetAccount)
    setIsOpenConfirmResetAccount(!isOpenConfirmResetAccount)
  }
  return (
    <div className="container-wrapper">
      <Navbar />
      <main>
        <Sidebar />
        <div className="main-home">
          <div className="main-content">
            {isOpenResgiter && (
              <div className="box-auth sign-up mt-4">
                <div className="box-header d-flex justify-content-between align-items-center">
                  Sign Up
                  <button className="btn__exit-chat" onClick={() => setIsOpenResgiter(!isOpenResgiter)}>
                    <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                  </button>
                </div>
                <form id="form-signup">
                  <div className="form-group">
                    <label for="inputRePassword4">Email</label>
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="form-group" >
                    <label for="inputRePassword4">Login Password</label>
                    <input type={showPassword ? 'text' : 'password'} className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Login Password" />
                    <img src="./images/icons/eye.svg" alt="show-pass" onClick={() => setShowPassword(!showPassword)} />
                  </div>
                  <div className="risk-level d-flex align-items-center">
                    {password.length === 0 ? (
                      <>
                        <div className="process-password  d-flex align-items-center" style={{ width: "60%" }}>
                          <div className="process-item "></div>
                          <div className="process-item "></div>
                          <div className="process-item "></div>
                        </div>

                      </>
                    ) : onlyNumbersRegex.test(password) || onlyLettersRegex.test(password) ? (
                      <>
                        <div className="process-password  d-flex align-items-center" style={{ width: "60%" }}>

                          <div className="process-item error"></div>
                          <div className="process-item "></div>
                          <div className="process-item "></div>
                        </div>
                        <span style={{ width: "40%" }}>High Risk</span>
                      </>
                    ) : alphanumericRegex.test(password) ? (
                      <>
                        <div className="process-password  d-flex align-items-center" style={{ width: "60%" }}>
                          <div className="process-item average"></div>
                          <div className="process-item average"></div>
                          <div className="process-item "></div>
                        </div>
                        <span style={{ width: "40%", color: "yellow" }}>Average</span>
                      </>
                    ) : vietnameseCharactersRegex.test(password) ? (
                      <>
                        <div className="process-password  d-flex align-items-center" style={{ width: "60%" }}>
                          <div className="process-item error"></div>
                          <div className="process-item error"></div>
                          <div className="process-item error"></div>
                        </div>
                        <span style={{ width: "40%" }}>Error VietNamese Characters</span>
                      </>
                    ) : (
                      <>
                        <div className="process-password  d-flex align-items-center" style={{ width: "60%" }}>
                          <div className="process-item success"></div>
                          <div className="process-item success"></div>
                          <div className="process-item success"></div>
                        </div>
                        <span style={{ width: "40%", color: "green" }}>Secure</span>
                      </>
                    )}



                  </div>
                  <div className="form-group enter-pass">
                    <label for="inputRePassword4">Re-Enter Password</label>
                    <input type={showPassword ? 'text' : 'password'} className="form-control" placeholder="Re-Enter Password" />
                    <img src="./images/icons/eye.svg" alt="show-pass" onClick={() => setShowPassword(!showPassword)} />

                  </div>
                  <div className='form-group'>
                    <label for="inputRePassword4">Verification Code</label>

                  </div>
                  <div className="form-group resend">
                    <input type="text" className="form-control" placeholder="Verification Code" />
                    <span className="resend">Resend(60s)</span>
                  </div>
                  <div className="form-group">
                    <label for="inputRePassword4">Enter Referral/Promo Code</label>
                    <input type="password" className="form-control"
                      placeholder="Enter Referral/Promo Code(Optional)" />
                  </div>

                  <div className="form-group check">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label" for="gridCheck">
                        I agree to the User Agreement & confirm I am at least 18 years old
                      </label>
                    </div>
                  </div>
                  <div className="form-group check">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label" for="gridCheck">
                        I agree to receive marketing promotions from QGACHA.
                      </label>
                    </div>
                  </div>
                  <div className="submit d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" onClick={handlerResgiterConfirm}>Sign Up</button>
                  </div>
                  <p className="text-start" style={{ color: "#9E9E9E" }}>Already have an account?
                    <a className="btn-redirect" onClick={handlerLogin}>Sign In</a>
                  </p>

                </form>
              </div>
            )}
            {isOpenConfirmResgiter && (
              <div class="box-auth noti-success mt-4">
                <div class="box-header d-flex justify-content-between align-items-center">
                  <div></div>
                  <button class="btn__exit-chat">
                    <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenConfirmResgiter(!isOpenConfirmResgiter)} alt="" />
                  </button>
                </div>
                <div class="box-content">
                  <h3>Sign Up successfully</h3>
                  <div class="submit d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary" onClick={() => setIsOpenConfirmResgiter(!isOpenConfirmResgiter)}>Confirm</button>
                  </div>
                </div>
              </div>
            )}




            {isOpenLogin && (
              <div class="box-auth signin mt-4">
                <div class="box-header d-flex justify-content-between align-items-center">
                  Sign In
                  <button class="btn__exit-chat" onClick={() => setIsOpenLogin(false)}>
                    <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                  </button>
                </div>

                <form>
                  <div class="form-group">
                    <label for="inputRePassword4">Email</label>
                    <input type="email" class="form-control" placeholder="Email" />
                  </div>
                  <div class="form-group">
                    <label for="inputRePassword4">password</label>
                    <input type="password" class="form-control" placeholder="Login Password" />
                    <img src="./images/icons/eye.svg" alt="show-pass" />
                    <label class="forgot-pass" for="" onClick={handlerResetPassword}>Forgot Your Password?</label>
                  </div>
                  <div className='form-group'>
                    <label for="inputRePassword4">Verification Code</label>

                  </div>
                  <div className="form-group resend">
                    <input type="text" className="form-control" placeholder="Verification Code" />
                    <span className="resend">Resend(60s)</span>
                  </div>
                  <div class="submit d-flex justify-content-center">
                    <button class="btn btn-primary" onClick={handlerLoginVerification}>Sign In</button>
                  </div>
                  <p class="text-start" style={{ color: "#9E9E9E" }}>New to Qgacha?
                    <a class="btn-redirect" onClick={handlerLogin}>Create
                      account</a>
                  </p>
                </form>
              </div>
            )}
            {isOpenVerification && (
              <div class="box-auth two-factor mt-4">
                <div class="box-header d-flex justify-content-between align-items-center">
                  Two-factor authentication
                  <button class="btn__exit-chat" onClick={handlerLoginVerification}>
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
            )}
            {isOpenResetPassword && (
              <div class="box-auth enter-email mt-4">
                <div class="box-header d-flex justify-content-between align-items-center">
                  Reset Password
                  <button class="btn__exit-chat" onClick={handlerResetPassword}>
                    <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                  </button>
                </div>
                <form>
                  <div class="form-group">
                    <label for="inputRePassword4">Email</label>
                    <input type="email" class="form-control" placeholder="Email" />
                  </div>
                  <div class="submit d-flex justify-content-center">
                    <button class="btn btn-primary" onClick={handlerResetAccountPassword}>Submit</button>
                  </div>
                  <p class="text-start" style={{ color: "#9E9E9E" }}>Already have an account?
                    <a class="btn-redirect" onClick={handlerResetPassword}>Sign In</a>
                  </p>
                </form>
              </div>
            )}
            {isOpenResetAccount && (

              <div class="box-auth reset-password mt-4">
                <div class="box-header d-flex justify-content-between align-items-center">
                  Reset Account Password
                  <button class="btn__exit-chat">
                    <img src="./images/icons/deposit/icon-exit.svg" onClick={handlerResetAccountPassword} alt="" />
                  </button>
                </div>

                <form>
                  <div class="form-group">
                    <label for="inputRePassword4">New password</label>
                    <input type="password" class="form-control" placeholder="New password" />
                    <img src="./images/icons/eye.svg" alt="show-pass" />
                  </div>
                  <div class="form-group">
                    <label for="inputRePassword4">New password again</label>
                    <input type="password" class="form-control" placeholder="New password again" />
                    <img src="./images/icons/eye.svg" alt="show-pass" />
                  </div>
                  <div className='form-group'>
                    <label for="inputRePassword4">Verification Code</label>

                  </div>
                  <div className="form-group resend">
                    <input type="text" className="form-control" placeholder="Verification Code" />
                    <span className="resend">Resend(60s)</span>
                  </div>
                  <p class="notice">Please enter the 6-digit verification code sent to your email. The code is
                    valid for 10
                    minutes.</p>
                  <div class="submit d-flex justify-content-center">
                    <button class="btn btn-primary" onClick={handlerResetPassWordConfirm}>Confirm</button>
                  </div>
                </form>
              </div>

            )}

            {isOpenConfirmResetAccount && (
              <div class="box-auth noti-success mt-4">
                <div class="box-header d-flex justify-content-between align-items-center">
                  Reset Password
                  <button class="btn__exit-chat">
                    <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenConfirmResetAccount(!isOpenConfirmResetAccount)} alt="" />
                  </button>
                </div>
                <div class="box-content">
                  <h3>Password changed successfully</h3>
                  <div class="submit d-flex justify-content-center">
                    <button class="btn btn-primary" onClick={() => setIsOpenConfirmResetAccount(!isOpenConfirmResetAccount)}>Confirm</button>
                  </div>
                </div>
              </div>
            )}


            <div className="big-prize">
              <div className="fire d-flex align-items-center">
                <img width="14px" src="./images/icons/fire.svg" alt="" />
                Big Prize
              </div>
              <div className="group-big d-flex align-items-center">
                <div className="big-item d-flex align-items-center">
                  <img width="25px" src="./images/icons/treasure-nice.svg" alt="" />
                  <h3>Treasure chest: <span>$15000</span></h3>
                </div>
                <div className="big-item d-flex align-items-center">
                  <img width="20px" src="./images/icons/spin-small.svg" alt="" />
                  <h3>Spin: <span>$1000</span></h3>
                </div>
              </div>
            </div>
            <div className="banner-main" onClick={() => setIsOpenResgiter(!isOpenResgiter)}>
              <div className="banner-content">
                <h3>Join and enjoy rewards</h3>
                <h1>up to <span>100.000$</span></h1>
                <button >SIGN UP NOW</button>
              </div>
              <img src="./images/img-main1.png" alt="banner-home" />
              <div class="mobile">
                <div class="list-social d-flex">
                  <div class="social-item"><img src="./images/icons/youtube.svg" alt="" /></div>
                  <div class="social-item"><img src="./images/icons/twitter.svg" alt="" /></div>
                  <div class="social-item"><img src="./images/icons/tele.svg" alt="" /></div>
                </div>
              </div>
            </div>

            <section class="feature mb-5">
              <div class="row gx-3">

                <div class="col-12 col-sm-6">
                  <Link to="/upgrade">
                    <img src="./images/img-main2.png" alt="" />
                  </Link>
                </div>


                <div class="col-12 col-sm-6">
                  <Link to="/tournament">
                    <img src="./images/img-main3.png" alt="" />
                  </Link>
                </div>
              </div>
              <div class="row g-3 mt-3">

                <div class="col-12 col-sm-4 d-flex flex-column justify-content-end">
                  <Link to="/upgradesoon">
                    <img src="./images/img-main4.png" alt="" />

                  </Link>
                </div>
                <div class="col-12 col-sm-4">
                  <Link to="/boxgacha">
                    <img src="./images/img-main5.png" alt="" />
                  </Link>
                </div>
                <div class="col-12 col-sm-4  d-flex flex-column justify-content-end">
                  <Link to="/mystery">
                    <img src="./images/img-main6.png" alt="" />
                  </Link>
                </div>
                <div class="col-12 col-sm-4">
                  <Link to="/completedgacha">
                    <img src="./images/img-main7.png" alt="" />
                  </Link>
                </div>

                <div class="col-12 col-sm-4">
                  <Link to="/reroll">
                    <img src="./images/img-main8.png" alt="" />
                  </Link>
                </div>

                <div class="col-12 col-sm-4">
                  <Link to="/sugoroku">
                    <img src="./images/img-main9.png" alt="" />
                  </Link>
                </div>
              </div>
            </section>
            <section className="section-list-news pc">
              <div className="news-item">
                <h2>Top Rated Games</h2>
                <img src="./images/treasure-box.png" alt="" />
              </div>
              <div className="news-item">
                <h2>Recommend</h2>
                <img src="./images/treasure-box.png" alt="" />
              </div>
            </section>
            <section className="section-list-news mobile">
              <div className="news-item">
                <h2>Top Rated Games</h2>
                <div className="row gx-2">
                  <div className="col-4">
                    <img src="./images/treasure-box.png" alt="" />
                  </div>
                  <div className="col-4">
                    <img src="./images/treasure-box.png" alt="" />
                  </div>
                  <div className="col-4">
                    <img src="./images/treasure-box.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="news-item">
                <h2>Recommend</h2>
                <div className="row gx-2">
                  <div className="col-4">
                    <img src="./images/treasure-box.png" alt="" />
                  </div>
                  <div className="col-4">
                    <img src="./images/treasure-box.png" alt="" />
                  </div>
                  <div className="col-4">
                    <img src="./images/treasure-box.png" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <Footer />
        </div>

        <BoxOverlay />
      </main>

    </div>
  );
};

export default Authen;
