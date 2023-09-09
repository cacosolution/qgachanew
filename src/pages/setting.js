import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/deposit.css";
import "../css/setting.css";
import "../css/responsive.css";
import Layout from "../layout";

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
        <Layout>
            <div className="main-deposit main-general">
                <div className="deposit-content">
                    <button className="btn-wallet btn-setting text-15">Setting</button>
                    <div className="feature-content d-flex">
                        <div className="list-feature listmobile">
                            <ul>
                                <li className={`feature-item d-flex align-items-center ${isSetting === true ? "active" : ""}`}>
                                    <button style={{ background: "none", border: "none" }} className="feature-title text-15" onClick={handlerChangeSetting}>General</button>
                                </li>
                                <li className={`feature-item d-flex align-items-center ${isSecurity === true ? "active" : ""}`} >
                                    <h4 className="feature-title text-15" onClick={handlerChangeSecurity}>Security</h4>
                                </li>
                                <li className={`feature-item d-flex align-items-center ${isReferences === true ? "active" : ""} border-bottom-0`} >
                                    <h4 className="feature-title text-15" onClick={handlerChangeReferences}>Preferences</h4>
                                </li>
                                <li className="feature-item d-flex align-items-center">
                                    <h4 className="feature-title text-15">Verify</h4>
                                </li>
                            </ul>

                        </div>

                        {isSetting ? (
                            <div className="feature-detail">
                                <div className="feature-header pc">
                                    Email
                                </div>
                                <div className="feature-header mobile" onClick={handelModal}>
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


                                <div className="feature-body">
                                    <div className="email-action d-flex justify-content-between align-items-end">
                                        <div className="email-wrapper">
                                            <label for="email" style={{ color: "#9E9E9E" }}>Email <span style={{ color: "red" }}>*</span></label>
                                            <input type="text" className="form-control" placeholder="Email" id="email" />
                                        </div>
                                        <div className="btn-resend d-flex align-items-center">
                                            Resend Email <button>Verify</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        ) : isSecurity ? (
                            <div className="d-flex flex-column SecurityiPad" style={{ width: "1100px" }}>

                                <div className="box-change">
                                    <div className="Settingmobile" onClick={handelModal}>
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

                                    <h4>Change password</h4>


                                    <form>
                                        <div className="form-group">
                                            <label for="">Old password</label>
                                            <input type="password" className="form-control" />
                                            <img src="./images/icons/eye.svg" alt="show-pass" />
                                        </div>
                                        <div className="form-group enter-pass">
                                            <label for="">New password</label>
                                            <input type="password" className="form-control" />
                                            <img src="./images/icons/eye.svg" alt="show-pass" />
                                        </div>
                                        <div className="form-group">
                                            <label for="">Confirm newpass word</label>
                                            <input type="text" className="form-control" />
                                            <img src="./images/icons/eye.svg" alt="show-pass" />
                                        </div>
                                    </form>
                                    <div className="line-x"></div>
                                    <div className="btn-save">
                                        <button onClick={handlerLoginVerification}>Save changes</button>
                                    </div>
                                </div>
                                <div className="box-change two-factor" style={{ marginBottom: "250px" }}>
                                    <h4>Two-factor authentication</h4>
                                    <h4 className="desc">To keep your account extra secure leave a two factor authentication
                                        enabled.</h4>
                                    <div className="line-x"></div>
                                    <form>
                                        <div className="form-group">
                                            <label for="">Copy this code to your authenticator app</label>
                                            <input type="text" className="form-control" />
                                            <img src="./images/icons/deposit/icon-copy.svg" alt="icon-copy" />
                                        </div>
                                        <div className="form-group enter-pass">
                                            <label for="">Don't let anyone see this!</label>
                                            <div className="qr d-flex justify-content-center align-items-center">
                                                QR
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="">Password</label>
                                            <input type="text" className="form-control" />
                                            <img src="./images/icons/eye.svg" alt="show-pass" />
                                        </div>
                                        <div className="form-group">
                                            <label for="">Two-factor authentication</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </form>
                                    <div className="line-x"></div>
                                    <div className="btn-save">
                                        <button>Submit</button>
                                    </div>
                                </div>
                            </div>
                        ) : isReferences ? (
                            <div className="d-flex flex-column">
                                <div className="reference-box box-change">
                                    <div className="Settingmobile" onClick={handelModal}>
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
                                    <div className="box-header">
                                        <h4>Preferences</h4>
                                    </div>
                                    <h5>User privacy is one of the core values of Qgacha. These settings allow you to be
                                        completely anonymous from the rest of
                                        the players.</h5>
                                    <div className="line-x"></div>
                                    <div className="content-sw">
                                        <div className="switch-item d-flex align-items-center">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input swtich-btn" style={{ width: "44px", marginRight: "20px" }} type="checkbox" role="switch" id="flexSwitchCheckDefault" checked />
                                            </div>
                                            <div className="item-info">
                                                <h4>Enable Ghost Mode</h4>
                                                <h5>Your Actions won't appear in Live Stats</h5>
                                            </div>
                                        </div>
                                        <div className="switch-item d-flex align-items-center">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input swtich-btn" style={{ width: "44px", marginRight: "20px" }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            </div>
                                            <div className="item-info">
                                                <h4>Hide all your statistics</h4>
                                                <h5>Other users won't be able to view your statistics</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="line-x"></div>
                                    <div className="btn-save d-flex align-items-center justify-content-between">
                                        <h5>Please allow up to 30 seconds for update to take
                                            effect.</h5><button>Save</button>
                                    </div>
                                </div>
                                <div className="reference-box box-change marketing">
                                    <div className="box-header">
                                        <h4>Marketing</h4>
                                    </div>
                                    <div className="content-sw">
                                        <div className="switch-item d-flex align-items-center">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input swtich-btn" style={{ width: "44px", marginRight: "20px" }} type="checkbox" role="switch" id="flexSwitchCheckDefault" checked />
                                            </div>
                                            <div className="item-info">
                                                <h4>Hide all your statistics</h4>
                                                <h5>Other users won't be able to view your statistics</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="line-x"></div>
                                    <div className="btn-save">
                                        <button>Save</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {isOpenVerification && (
                            <div className="box-auth two-factor mt-4 transaction-detail2">
                                <div>
                                    <div className="box-header d-flex justify-content-between align-items-center">
                                        Two-factor authentication
                                        <button className="btn__exit-chat" onClick={handlerLoginVerification}>
                                            <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                                        </button>
                                    </div>

                                    <div className="transaction-detail-content">
                                        <form>
                                            <p className="text-center">Please enter the 6-digit authentication Code.</p>
                                            <div className="list-input-number d-flex">
                                                <div className="num-item"><input type="text" /></div>
                                                <div className="num-item"><input type="text" /></div>
                                                <div className="num-item"><input type="text" /></div>
                                                <div className="num-item"><input type="text" /></div>
                                                <div className="num-item"><input type="text" /></div>
                                                <div className="num-item"><input type="text" /></div>
                                            </div>

                                        </form>
                                    </div>
                                </div>


                            </div>
                        )}
                    </div>


                </div>

            </div>
        </Layout >

    );
};

export default Setting;
