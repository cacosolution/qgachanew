import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/deposit.css";
import "../css/setting.css";
import "../css/responsive.css";

import Navbar from "../component/Navbar/navbar";
import Sidebar from "../component/Sidebar/sidebar";
import Footer from "../component/Footer/footer";
import BoxOverlay from "../component/Box/BoxOverlay";

const security = () => {
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div class="main-deposit main-general">
                    <div class="deposit-content">
                        <button class="btn-wallet btn-setting text-15">Setting</button>
                        <div class="feature-content setting d-flex flex-column flex-sm-row">
                            <div class="list-feature">
                                <ul>
                                    <li class="feature-item d-flex align-items-center">
                                        <h4 class="feature-title text-15">General</h4>
                                    </li>
                                    <li class="feature-item d-flex align-items-center active">
                                        <h4 class="feature-title text-15">Security</h4>
                                    </li>
                                    <li class="feature-item d-flex align-items-center border-bottom-0">
                                        <h4 class="feature-title text-15">Preferences</h4>
                                    </li>
                                    <li class="feature-item d-flex align-items-center">
                                        <h4 class="feature-title text-15">Verify</h4>
                                    </li>
                                </ul>

                            </div>
                            <div class="feature-detail mobile">
                                <div class="feature-header">
                                    General
                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                            fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div class="d-flex flex-column">
                                <div class="box-change">
                                    <h4>Change password</h4>
                                    <form>
                                        <div class="form-group">
                                            <label for="">Old password</label>
                                            <input type="password" class="form-control" />
                                            <img src="./images/icons/eye.svg" alt="show-pass" />
                                        </div>
                                        <div class="form-group enter-pass">
                                            <label for="">New password</label>
                                            <input type="password" class="form-control" />
                                            <img src="./images/icons/eye.svg" alt="show-pass" />
                                        </div>
                                        <div class="form-group">
                                            <label for="">Confirm newpass word</label>
                                            <input type="text" class="form-control" />
                                            <img src="./images/icons/eye.svg" alt="show-pass" />
                                        </div>
                                    </form>
                                    <div class="line-x"></div>
                                    <div class="btn-save">
                                        <button>Save changes</button>
                                    </div>
                                </div>

                                <div class="box-change notqr">
                                    <h4>Two-factor authentication</h4>
                                    <h4 class="desc">To disable Two-Factor authentication, enter your one-time Password
                                        (OTP)</h4>
                                    <div class="line-x"></div>
                                    <form class="mb-3">
                                        <div class="form-group">
                                            <label for="">Password</label>
                                            <input type="text" class="form-control" />
                                            <img src="./images/icons/eye.svg" alt="show-pass" />
                                        </div>
                                        <div class="form-group">
                                            <label for="">Two-factor authentication</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </form>
                                    <div class="line-x"></div>
                                    <div class="btn-save">
                                        <button>Submit</button>
                                    </div>
                                </div>
                                <div class="box-change two-factor">
                                    <h4>Two-factor authentication</h4>
                                    <h4 class="desc">To keep your account extra secure leave a two factor authentication
                                        enabled.</h4>
                                    <div class="line-x"></div>
                                    <form>
                                        <div class="form-group">
                                            <label for="">Copy this code to your authenticator app</label>
                                            <input type="text" class="form-control" />
                                            <img src="./images/icons/deposit/icon-copy.svg" alt="icon-copy" />
                                        </div>
                                        <div class="form-group enter-pass">
                                            <label for="">Don't let anyone see this!</label>
                                            <div class="qr d-flex justify-content-center align-items-center">
                                                QR
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="">Password</label>
                                            <input type="text" class="form-control" />
                                            <img src="./images/icons/eye.svg" alt="show-pass" />
                                        </div>
                                        <div class="form-group">
                                            <label for="">Two-factor authentication</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </form>
                                    <div class="line-x"></div>
                                    <div class="btn-save">
                                        <button>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <BoxOverlay />
            </main>
            <Footer />
        </div>
    );
};

export default security;
