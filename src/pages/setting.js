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
                <div class="main-setting main-deposit main-general">
                    <div class="deposit-content">
                        <button class="btn-wallet text-15">Setting</button>
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
                                <div class="feature-header">
                                    Email
                                </div>
                                <div class="feature-body">
                                    <div class="email-action d-flex align-items-center justify-content-between">
                                        <div class="email-wrapper">
                                            <label for="email">Email</label>
                                            <input type="text" class="form-control" placeholder="Email" id="email" />
                                        </div>
                                        <div class="button-resend d-flex align-items-center">
                                            Resend Email <button>Verify</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div style={{ paddingTop: "300px" }}>
                        <Footer />
                    </div>
                </div>
                <button class="btn-support">
                    <img src="images/icons/livesupport-icon.svg" alt="" />
                </button>
            </main>
        </div>
    );
};

export default setting;
