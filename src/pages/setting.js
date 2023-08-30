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

const setting = () => {
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div class="main-deposit main-general">
                    <div class="deposit-content">
                        <button class="btn-wallet btn-setting text-15">Setting</button>
                        <div class="feature-content d-flex">
                            <div class="list-feature">
                                <ul>
                                    <li class="feature-item d-flex align-items-center active">
                                        <h4 class="feature-title text-15">General</h4>
                                    </li>
                                    <li class="feature-item d-flex align-items-center">
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
                            <div class="feature-detail">
                                <div class="feature-header pc">
                                    Email
                                </div>
                                <div class="feature-header mobile">
                                    General
                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <div class="feature-body">
                                    <div class="email-action d-flex justify-content-between align-items-end">
                                        <div class="email-wrapper">
                                            <label for="email">Email</label>
                                            <input type="text" class="form-control" placeholder="Email" id="email" />
                                        </div>
                                        <div class="btn-resend d-flex align-items-center">
                                            Resend Email <button>Verify</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <button class="btn-support">
                    <img src="images/icons/livesupport-icon.svg" alt="" />
                </button>
            </main>
            <Footer />
        </div>
    );
};

export default setting;
