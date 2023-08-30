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

const reference = () => {
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div class="main-deposit main-general">
                    <div class="deposit-content">
                        <button class="btn-wallet btn-setting text-15">Setting</button>
                        <div class="feature-content setting d-flex">
                            <div class="list-feature">
                                <ul>
                                    <li class="feature-item d-flex align-items-center">
                                        <h4 class="feature-title text-15">General</h4>
                                    </li>
                                    <li class="feature-item d-flex align-items-center ">
                                        <h4 class="feature-title text-15">Security</h4>
                                    </li>
                                    <li class="feature-item d-flex align-items-center active border-bottom-0">
                                        <h4 class="feature-title text-15">Preferences</h4>
                                    </li>
                                    <li class="feature-item d-flex align-items-center">
                                        <h4 class="feature-title text-15">Verify</h4>
                                    </li>
                                </ul>

                            </div>
                            <div class="d-flex flex-column">
                                <div class="reference-box box-change">
                                    <div class="box-header">
                                        <h4>Preferences</h4>
                                    </div>
                                    <h5>User privacy is one of the core values of Qgacha. These settings allow you to be
                                        completely anonymous from the rest of
                                        the players.</h5>
                                    <div class="line-x"></div>
                                    <div class="content-sw">
                                        <div class="switch-item d-flex align-items-center">
                                            <img class="me-3" src="./images/icons/switch.svg" alt="" />
                                            <div class="item-info">
                                                <h4>Enable Ghost Mode</h4>
                                                <h5>Your Actions won't appear in Live Stats</h5>
                                            </div>
                                        </div>
                                        <div class="switch-item d-flex align-items-center">
                                            <img class="me-3" src="./images/icons/switch-notactive.svg" alt="" />
                                            <div class="item-info">
                                                <h4>Hide all your statistics</h4>
                                                <h5>Other users won't be able to view your statistics</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="line-x"></div>
                                    <div class="btn-save d-flex align-items-center justify-content-between">
                                        <h5>Please allow up to 30 seconds for update to take
                                            effect.</h5><button>Save</button>
                                    </div>
                                </div>
                                <div class="reference-box box-change marketing">
                                    <div class="box-header">
                                        <h4>Marketing</h4>
                                    </div>
                                    <div class="content-sw">
                                        <div class="switch-item d-flex align-items-center">
                                            <img class="me-3" src="./images/icons/switch.svg" alt="" />
                                            <div class="item-info">
                                                <h4>Hide all your statistics</h4>
                                                <h5>Other users won't be able to view your statistics</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="line-x"></div>
                                    <div class="btn-save">
                                        <button>Save</button>
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

export default reference;
