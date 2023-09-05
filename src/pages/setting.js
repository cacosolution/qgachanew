import React, { useState } from "react";
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

const Setting = () => {
    const [isSetting, setIsSetting] = useState(true);
    const [isSecurity, setIsSecurity] = useState(false);
    const [isReferences, setIsReferences] = useState(false);
    const [isOpenVerification, setIsOpenVerification] = useState(false)
    const [isOpenSelect, setIsOpenSelect] = useState(false)

    const handelModal = (dropdownNumber) => {
        setIsOpenSelect(!isOpenSelect)
    }

    const handlerChangeSetting = () => {
        setIsSetting(true);
        setIsSecurity(false);
        setIsReferences(false);
    }
    const handlerChangeSecurity = () => {
        setIsSetting(false);
        setIsSecurity(true);
        setIsReferences(false);
    }
    const handlerChangeReferences = () => {
        setIsSetting(false);
        setIsSecurity(false);
        setIsReferences(true);
    }


    const handlerLoginVerification = () => {
        setIsOpenVerification(!isOpenVerification)
    }

    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div class="main-deposit main-general">
                    <div class="deposit-content">
                        <button class="btn-wallet btn-setting text-15">Setting</button>
                        <div class="feature-content d-flex">
                            <div class="list-feature listmobile">
                                <ul>
                                    <li class="feature-item d-flex align-items-center ">
                                        <button style={{ background: "none", border: "none" }} class="feature-title text-15" onClick={handlerChangeSetting}>General</button>
                                    </li>
                                    <li class="feature-item d-flex align-items-center">
                                        <h4 class="feature-title text-15" onClick={handlerChangeSecurity}>Security</h4>
                                    </li>
                                    <li class="feature-item d-flex align-items-center border-bottom-0">
                                        <h4 class="feature-title text-15" onClick={handlerChangeReferences}>Preferences</h4>
                                    </li>
                                    <li class="feature-item d-flex align-items-center">
                                        <h4 class="feature-title text-15">Verify</h4>
                                    </li>
                                </ul>

                            </div>

                            {isSetting ? (
                                <div class="feature-detail">
                                    <div class="feature-header pc">
                                        Email
                                    </div>
                                    <div class="feature-header mobile" onClick={handelModal}>
                                        General
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                                fill="white" />
                                        </svg>
                                        {isOpenSelect && (
                                            <div className="dropsetting">
                                                <div className="option" onClick={handlerChangeSetting}>General</div>
                                                <div className="option" onClick={handlerChangeSecurity}>Security</div>
                                                <div className="option" onClick={handlerChangeReferences} >Preferences</div>
                                                <div className="option">Verify</div>

                                            </div>
                                        )}
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

                            ) : isSecurity ? (
                                <div class="d-flex flex-column">

                                    <div class="box-change">
                                        <div class="feature-header-mobile">
                                            General
                                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
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
                                            <button onClick={handlerLoginVerification}>Save changes</button>
                                        </div>
                                    </div>
                                    <div class="box-change two-factor" style={{ marginBottom: "250px" }}>
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
                            ) : isReferences ? (
                                <div class="d-flex flex-column">
                                    <div class="reference-box box-change">
                                        <div class="feature-header-mobile">
                                            General
                                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
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
                            ) : (
                                <></>
                            )}
                            {isOpenVerification && (
                                <div class="box-auth two-factor mt-4 transaction-detail2">
                                    <div>
                                        <div class="box-header d-flex justify-content-between align-items-center">
                                            Two-factor authentication
                                            <button class="btn__exit-chat" onClick={handlerLoginVerification}>
                                                <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                                            </button>
                                        </div>

                                        <div className="transaction-detail-content">
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
                                    </div>


                                </div>
                            )}
                        </div>


                    </div>

                </div>
                <BoxOverlay />

            </main >
            <Footer />

        </div >

    );
};

export default Setting;
