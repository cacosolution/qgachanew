import React, { useContext, useState } from 'react'
import { SidebarContext } from '../../context/sideBarContext'
import { Link } from 'react-router-dom'

const NavAuthen = () => {
    const [isChat, setIsChat] = useState(false)
    const [isNofi, setIsNofi] = useState(false)
    const [isProfile, setIsProfile] = useState(false)
    const [isLang, setIsLang] = useState(false)


    // SIGNIN SIGNUP
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



    const {
        isOpenProfileAll,
        setIsOpenProfileAll,
        setIsOpenProfileDetail,
        setIsOpenProfileEdit,
    } = useContext(SidebarContext)
    const handlerChangeProfile = () => {
        if (isOpenProfileAll === true) {
            setIsOpenProfileAll(false)
            setIsOpenProfileDetail(false)
            setIsOpenProfileEdit(false)
        } else {
            setIsOpenProfileAll(true)
            setIsOpenProfileDetail(false)
            setIsOpenProfileEdit(false)
        }
    };

    // SIGNIN SIGNUP
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
        <header class="d-flex align-items-center">
            <div class="header-content d-flex align-items-center justify-content-center">
                <Link to={"/"}>
                    <img class="mobile" style={{ width: "30px" }} src="./images/icons/logo-mobile.svg" alt="logo-mobile" />
                    <img class="pc" style={{ width: "166px", height: "56px" }} src="./images/icons/logo.svg" alt="logo-pc" />
                </Link>
                <div class="header-action d-flex align-items-center">
                    <button class="btn-auth btn-signup" onClick={() => setIsOpenResgiter(!isOpenResgiter)}>
                        Sign Up
                    </button>
                    <button class="btn-auth btn-signin" onClick={() => setIsOpenLogin(!isOpenLogin)}>
                        Sign In
                    </button>

                    <div class="chat-container">
                        <img class="chat-icon" onClick={() => setIsChat(!isChat)} src="./images/icons/chat.svg" alt="" />
                    </div>

                    <div class="language-container">
                        <img class="language-icon" onClick={() => setIsLang(!isLang)} src="./images/icons/language.svg" alt="" />
                        <div id="box-language" class={isLang == true ? ` active` : ``}>
                            <div class="language-item">
                                English
                            </div>
                        </div>
                    </div>







                    <div class="ava-container" style={{ zIndex: 999 }}>
                        <img class="ava-icon ms-3" onClick={() => setIsProfile(!isProfile)} src="./images/icons/avatar-default.svg" alt="" />
                        <div id="box-ava" class={isProfile == true ? `active` : ``}>
                            <Link to="/wallet">
                                <div class="feature-item d-flex align-items-center">
                                    <img src="./images/icons/credit-card.svg" alt="" />
                                    <h5 class="feature-content">
                                        Wallet
                                    </h5>
                                </div>
                            </Link>
                            <Link to={"/wallet"}>
                                <div class="feature-item d-flex align-items-center">
                                    <img src="./images/icons/withdrawdollar.svg" alt="" />
                                    <h5 class="feature-content">
                                        Withdraw
                                    </h5>
                                </div>
                            </Link>

                            <Link to={"/wallet"}>
                                <div class="feature-item d-flex align-items-center">
                                    <img src="./images/icons/transaction-ava.svg" alt="" />
                                    <h5 class="feature-content">
                                        Transactions
                                    </h5>
                                </div>
                            </Link>
                            <Link to={"/affiliate"}>

                                <div class="feature-item d-flex align-items-center">
                                    <img src="./images/icons/affiliate.png" alt="" />
                                    <h5 class="feature-content">Affiliate</h5>
                                </div>
                            </Link>


                            <div class="feature-item d-flex align-items-center " onClick={handlerChangeProfile}>
                                <img src="./images/icons/profile.svg" alt="" />
                                <h5 class="feature-content">Profile</h5>
                            </div>

                            <Link to={"/setting"}>
                                <div class="feature-item d-flex align-items-center">
                                    <img src="./images/icons/setting-icon.svg" alt="" />
                                    <h5 class="feature-content">Setting</h5>
                                </div>
                            </Link>
                            <div class="feature-item d-flex align-items-center">
                                <img src="./images/icons/logout.svg" alt="" />
                                <h5 class="feature-content">Log out</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="line-yblue pc"></div>
            <div class="header-right">
                <div class="select-right d-flex align-items-center">
                    <select name="currency" id="currentcy">
                        <option value="usdt" className='select-text'>$USDT</option>
                        <option value="Moon" className='select-text'>$BTC</option>
                        <option value="trx" className='select-text'>$ETH</option>
                        <option value="bnb" className='select-text'>$BNB</option>
                    </select>
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                            fill="white" />
                    </svg>
                </div>
            </div>
            <div class="box-noti" id="box-noti">
                <div class="box-header d-flex justify-content-between">
                    Notification
                    <button class="btn__exit-noti">
                        <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                    </button>
                </div>
                <div class="box-body">
                    <div class="wrapper-title">
                        <h4>System Notice</h4>
                    </div>
                    <div class="list-noti">
                        <div class="noti-item d-flex align-items-center">
                        </div>
                        <div class="noti-item d-flex align-items-center">
                        </div>
                        <div class="noti-item d-flex align-items-center">
                        </div>
                        <div class="noti-item d-flex align-items-center">
                        </div>
                        <div class="noti-item d-flex align-items-center">
                        </div>
                        <div class="noti-item d-flex align-items-center">
                        </div>
                        <div class="noti-item d-flex align-items-center">
                        </div>
                        <div class="noti-item d-flex align-items-center">
                        </div>
                        <div class="noti-item d-flex align-items-center">
                        </div>
                        <div class="noti-item d-flex align-items-center">
                        </div>
                        <div class="noti-item d-flex align-items-center">
                        </div>
                        <div class="noti-item d-flex align-items-center">
                        </div>
                    </div>
                </div>
            </div>
            <div class={isChat == true ? `box-chat active` : `box-chat`} id="box-chat">
                <div class="box-header d-flex justify-content-between">
                    Online Chat
                    <button class="btn__exit-chat">
                        <img onClick={() => setIsChat(!isChat)} src="./images/icons/deposit/icon-exit.svg" alt="" />
                    </button>
                </div>
                <div class="box-body p-3">
                    <div class="list-user-online">
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                        <div class="info-user d-flex align-items-center">
                            <div class="ava-user"></div>
                            <div class="message">
                                <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                <div class="cur-mess">Nội dung nhắn</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-action d-flex align-items-center">
                    <input type="text" placeholder="Your message" />
                    <button><img src="./images/icons/deposit/send.svg" alt="" /></button>
                </div>
            </div>
            {isOpenResgiter && (
                <div className="box-auth sign-up mt-4 signAuthen">
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
                <div class="box-auth noti-success mt-4 signAuthen">
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
                <div class="box-auth signin mt-4 signAuthen">
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
                <div class="box-auth two-factor mt-4 signAuthen">
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
                <div class="box-auth enter-email mt-4 signAuthen">
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

                <div class="box-auth reset-password mt-4 signAuthen">
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
                <div class="box-auth noti-success mt-4 signAuthen">
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

        </header>

    )
}

export default NavAuthen