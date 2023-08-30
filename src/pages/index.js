import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/flickity.css"
import "../css/base.css"
import "../css/home.css"
import "../css/responsive.css"
import Navbar from '../component/Navbar/navbar';
import Sidebar from '../component/Sidebar/sidebar';
import Footer from '../component/Footer/footer';
import BoxOverlay from '../component/Box/BoxOverlay';
import { useState } from 'react';



const Home = () => {
    const [isOpenResgiter, setIsOpenResgiter] = useState(false)

    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div class="main-home">
                    <div class="main-content">
                        {isOpenResgiter && (
                            <div class="box-auth sign-up mt-4">
                                <div class="box-header d-flex justify-content-between align-items-center">
                                    Sign Up
                                    <button class="btn__exit-chat" onClick={() => setIsOpenResgiter(!isOpenResgiter)}>
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
                                        <div class="process-password  d-flex align-items-center" style={{ width: "60%" }}>
                                            <div class="process-item error"></div>
                                            <div class="process-item average"></div>
                                            <div class="process-item secure"></div>
                                        </div>
                                        <span style={{ width: "40%" }}>High Risk</span>
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
                        )}

                        <div class="big-prize">
                            <div class="fire d-flex align-items-center">
                                <img width="14px" src="./images/icons/fire.svg" alt="" />
                                Big Prize
                            </div>
                            <div class="group-big d-flex align-items-center">
                                <div class="big-item d-flex align-items-center">
                                    <img width="25px" src="./images/icons/treasure-nice.svg" alt="" />
                                    <h3>Treasure chest: <span>$15000</span></h3>
                                </div>
                                <div class="big-item d-flex align-items-center">
                                    <img width="20px" src="./images/icons/spin-small.svg" alt="" />
                                    <h3>Spin: <span>$1000</span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="banner-main">
                            <div class="banner-content">
                                <h3>Join and enjoy rewards</h3>
                                <h1>up to <span>100.000$</span></h1>
                                <button onClick={() => setIsOpenResgiter(!isOpenResgiter)}>SIGN UP NOW</button>
                            </div>
                            <img src="./images/img-main1.png" alt="banner-home" />
                        </div>

                        <section class="feature mb-5">
                            <div class="row gx-3">
                                <div class="col-12 col-sm-6">
                                    <img src="./images/img-main2.png" alt="" />
                                </div>
                                <div class="col-12 col-sm-6">
                                    <img src="./images/img-main3.png" alt="" />
                                </div>
                            </div>
                            <div class="row g-3 mt-3">
                                <div class="col-12 col-sm-4 d-flex flex-column justify-content-end">
                                    <img src="./images/img-main4.png" alt="" />
                                </div>
                                <div class="col-12 col-sm-4">
                                    <img src="./images/img-main5.png" alt="" />
                                </div>
                                <div class="col-12 col-sm-4  d-flex flex-column justify-content-end">
                                    <img src="./images/img-main6.png" alt="" />
                                </div>
                                <div class="col-12 col-sm-4">
                                    <img src="./images/img-main7.png" alt="" />
                                </div>

                                <div class="col-12 col-sm-4">
                                    <img src="./images/img-main8.png" alt="" />
                                </div>

                                <div class="col-12 col-sm-4">
                                    <img src="./images/img-main9.png" alt="" />
                                </div>
                            </div>
                        </section>
                        <section class="section-list-news pc">
                            <div class="news-item">
                                <h2>Top Rated Games</h2>
                                <img src="./images/treasure-box.png" alt="" />
                            </div>
                            <div class="news-item">
                                <h2>Recommend</h2>
                                <img src="./images/treasure-box.png" alt="" />
                            </div>
                        </section>
                        <section class="section-list-news mobile">
                            <div class="news-item">
                                <h2>Top Rated Games</h2>
                                <div class="row gx-2">
                                    <div class="col-4">
                                        <img src="./images/treasure-box.png" alt="" />
                                    </div>
                                    <div class="col-4">
                                        <img src="./images/treasure-box.png" alt="" />
                                    </div>
                                    <div class="col-4">
                                        <img src="./images/treasure-box.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="news-item">
                                <h2>Recommend</h2>
                                <div class="row gx-2">
                                    <div class="col-4">
                                        <img src="./images/treasure-box.png" alt="" />
                                    </div>
                                    <div class="col-4">
                                        <img src="./images/treasure-box.png" alt="" />
                                    </div>
                                    <div class="col-4">
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
}

export default Home;