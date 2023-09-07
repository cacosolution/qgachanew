import React, { useContext, useEffect, useRef, useState } from 'react'
import { SidebarContext } from '../../context/sideBarContext'
import { Link } from 'react-router-dom'

const NavAuthen = () => {
    const [isChat, setIsChat] = useState(false)
    const [isNofi, setIsNofi] = useState(false)
    const [isProfile, setIsProfile] = useState(false)
    const [isLang, setIsLang] = useState(false)

    const chatRef = useRef(null);
    const notiRef = useRef(null);
    const profileRef = useRef(null);
    const langRef = useRef(null);

    const ModalChat = () => {
        setIsChat(true);
        setIsNofi(false);
        setIsProfile(false);
        setIsLang(false);
    }

    const ModalNofi = () => {
        setIsChat(false);
        setIsNofi(true);
        setIsProfile(false);
        setIsLang(false);
    }
    const ModalProfile = () => {
        setIsChat(false);
        setIsNofi(false);
        setIsProfile(true);
        setIsLang(false);
    }
    const ModalLang = () => {
        setIsChat(false);
        setIsNofi(false);
        setIsProfile(false);
        setIsLang(true);
    }

    const handleOutsideClick = (event) => {
        if (
            chatRef.current &&
            !chatRef.current.contains(event.target) &&
            notiRef.current &&
            !notiRef.current.contains(event.target) &&
            profileRef.current &&
            !profileRef.current.contains(event.target) &&
            langRef.current &&
            !langRef.current.contains(event.target)
        ) {
            setIsChat(false);
            setIsNofi(false);
            setIsProfile(false);
            setIsLang(false);
        }
    };

    // Add an event listener to handle outside clicks
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
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
        isOpenBalance,
        SetIsOpenBalance,
        isOpenDeposit,
        SetIsOpenDeposit,
        isOpenWithdraw,
        SetIsOpenWithdraw,
        isOpenTransaction,
        SetIsOpenTransaction
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
    const handlerChangeTransaction = () => {
        SetIsOpenTransaction(true)
        SetIsOpenBalance(false)
        SetIsOpenWithdraw(false)

        SetIsOpenDeposit(false)
    }
    const handlerChangeBalance = () => {
        SetIsOpenBalance(true)
        SetIsOpenDeposit(false)
        SetIsOpenWithdraw(false)
        SetIsOpenTransaction(false)
    }
    const handlerChangeWithdraw = () => {
        SetIsOpenWithdraw(true)
        SetIsOpenBalance(false)
        SetIsOpenTransaction(false)
        SetIsOpenDeposit(false)

    }
    return (
        <div className="bg-header">
            <header className="d-flex align-items-center">
                <div className="header-content d-flex align-items-center ">
                    <Link to={"/"} className="img-index">
                        <img className="mobile" style={{ width: "30px" }} src="./images/icons/logo-mobile.svg" alt="logo-mobile" />
                        <img className="pc" style={{ width: "166px", height: "56px" }} src="./images/icons/logo.svg" alt="logo-pc" />
                    </Link>
                    <div className="header-action d-flex align-items-center">
                        <button className="btn-auth btn-signup" onClick={() => setIsOpenResgiter(!isOpenResgiter)}>
                            Sign Up
                        </button>
                        <button className="btn-auth btn-signin" onClick={() => setIsOpenLogin(!isOpenLogin)}>
                            Sign In
                        </button>

                        <div className="chat-container">
                            <img className="chat-icon" onClick={ModalChat} src="./images/icons/chat.svg" alt="" />
                        </div>
                        {/* <!-- BOX LANGUAGE --> */}
                        <div className="language-container" ref={langRef}>
                            <img className="language-icon" onClick={ModalLang} src="./images/icons/language.svg" alt="" />
                            <div id="box-language" className={isLang == true ? ` active` : ``}>
                                <div className="language-item">
                                    English
                                </div>
                            </div>
                        </div>
                        {/* <!-- BOX AVATAR --> */}
                        <div className="ava-container" style={{ zIndex: 999 }} ref={profileRef}>
                            <img className="ava-icon ms-3" onClick={ModalProfile} src="./images/icons/avatar-default.svg" alt="" />
                            <div id="box-ava" className={isProfile == true ? `active` : ``}>
                                <Link onClick={handlerChangeBalance} to="/wallet" >
                                    <div className="feature-item d-flex align-items-center">
                                        <img src="./images/icons/credit-card.svg" alt="" />
                                        <h5 className="feature-content">
                                            Wallet
                                        </h5>
                                    </div>
                                </Link>
                                <Link onClick={handlerChangeWithdraw} to={"/wallet"}>
                                    <div className="feature-item d-flex align-items-center">
                                        <img src="./images/icons/withdrawdollar.svg" alt="" />
                                        <h5 className="feature-content">
                                            Withdraw
                                        </h5>
                                    </div>
                                </Link>

                                <Link onClick={handlerChangeTransaction} to={"/wallet"}>
                                    <div className="feature-item d-flex align-items-center">
                                        <img src="./images/icons/transaction-ava.svg" alt="" />
                                        <h5 className="feature-content">
                                            Transactions
                                        </h5>
                                    </div>
                                </Link>
                                <Link to={"/affiliate"}>

                                    <div className="feature-item d-flex align-items-center">
                                        <img src="./images/icons/affiliate.png" alt="" />
                                        <h5 className="feature-content">Affiliate</h5>
                                    </div>
                                </Link>


                                <div className="feature-item d-flex align-items-center " onClick={handlerChangeProfile}>
                                    <img src="./images/icons/profile.svg" alt="" />
                                    <h5 className="feature-content">Profile</h5>
                                </div>

                                <Link to={"/setting"}>
                                    <div className="feature-item d-flex align-items-center">
                                        <img src="./images/icons/setting-icon.svg" alt="" />
                                        <h5 className="feature-content">Setting</h5>
                                    </div>
                                </Link>
                                <div className="feature-item d-flex align-items-center">
                                    <img src="./images/icons/logout.svg" alt="" />
                                    <h5 className="feature-content">Log out</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line-yblue pc"></div>
                <div className="header-right">
                    <div className="select-right d-flex align-items-center">
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
                <div className="box-noti" id="box-noti">
                    <div className="box-header d-flex justify-content-between">
                        Notification
                        <button className="btn__exit-noti">
                            <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                        </button>
                    </div>
                    <div className="box-body">
                        <div className="wrapper-title">
                            <h4>System Notice</h4>
                        </div>
                        <div className="list-noti">
                            <div className="noti-item d-flex align-items-center">
                            </div>
                            <div className="noti-item d-flex align-items-center">
                            </div>
                            <div className="noti-item d-flex align-items-center">
                            </div>
                            <div className="noti-item d-flex align-items-center">
                            </div>
                            <div className="noti-item d-flex align-items-center">
                            </div>
                            <div className="noti-item d-flex align-items-center">
                            </div>
                            <div className="noti-item d-flex align-items-center">
                            </div>
                            <div className="noti-item d-flex align-items-center">
                            </div>
                            <div className="noti-item d-flex align-items-center">
                            </div>
                            <div className="noti-item d-flex align-items-center">
                            </div>
                            <div className="noti-item d-flex align-items-center">
                            </div>
                            <div className="noti-item d-flex align-items-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div className={isChat == true ? `box-chat active` : `box-chat`} id="box-chat">
                    <div className="box-header d-flex justify-content-between">
                        Online Chat
                        <button className="btn__exit-chat">
                            <img onClick={() => setIsChat(!isChat)} src="./images/icons/deposit/icon-exit.svg" alt="" />
                        </button>
                    </div>
                    <div className="box-body p-3">
                        <div className="list-user-online">
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                            <div className="info-user d-flex align-items-center">
                                <div className="ava-user"></div>
                                <div className="message">
                                    <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                    <div className="cur-mess">Nội dung nhắn</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-action d-flex align-items-center">
                        <input type="text" placeholder="Your message" />
                        <button><img src="./images/icons/deposit/send.svg" alt="" /></button>
                    </div>
                </div>
                {isOpenResgiter && (
                    <div className='transaction-detail2'>
                        <div className="box-auth sign-up mt-4 signAuthen">
                            <div className="box-header d-flex justify-content-between align-items-center">
                                Sign Up
                                <button className="btn__exit-chat" onClick={() => setIsOpenResgiter(!isOpenResgiter)}>
                                    <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                                </button>
                            </div>
                            <form id="form-signup">
                                <div className="form-group">
                                    {/* <label for="inputRePassword4">Email</label> */}
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group" style={{ marginTop: "20px" }} >
                                    {/* <label for="inputRePassword4">Login Password</label> */}
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
                                <div className="form-group enter-pass " style={{ marginTop: "20px" }}>
                                    {/* <label for="inputRePassword4">Re-Enter Password</label> */}
                                    <input type={showPassword ? 'text' : 'password'} className="form-control" placeholder="Re-Enter Password" />
                                    <img src="./images/icons/eye.svg" alt="show-pass" onClick={() => setShowPassword(!showPassword)} />

                                </div>
                                <div className='form-group' style={{ marginTop: "20px" }}>
                                    {/* <label for="inputRePassword4">Verification Code</label> */}

                                </div>
                                <div className="form-group resend" style={{ marginTop: "20px" }}>
                                    <input type="text" className="form-control" placeholder="Verification Code" />
                                    <span className="resend">Resend(60s)</span>
                                </div>
                                <div className="form-group" style={{ marginTop: "20px" }}>
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
                    </div>
                )}
                {isOpenConfirmResgiter && (
                    <div className='transaction-detail2'>
                        <div className="box-auth noti-success mt-4 loginAuthen">
                            <div className="box-header d-flex justify-content-between align-items-center">
                                <div></div>
                                <button className="btn__exit-chat">
                                    <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenConfirmResgiter(!isOpenConfirmResgiter)} alt="" />
                                </button>
                            </div>
                            <div className="box-content">
                                <h3>Sign Up successfully</h3>
                                <div className="submit d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary" onClick={() => setIsOpenConfirmResgiter(!isOpenConfirmResgiter)}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>


                )}
                {isOpenLogin && (
                    <div className='transaction-detail2'>
                        <div className="box-auth signin mt-4 loginAuthen">
                            <div className="box-header d-flex justify-content-between align-items-center">
                                Sign In
                                <button className="btn__exit-chat" onClick={() => setIsOpenLogin(false)}>
                                    <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                                </button>
                            </div>

                            <form>
                                <div className="form-group">
                                    {/* <label for="inputRePassword4">Email</label> */}
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    {/* <label for="inputRePassword4">password</label> */}
                                    <input type="password" className="form-control" placeholder="Login Password" />
                                    <img src="./images/icons/eye.svg" alt="show-pass" />
                                    <label className="forgot-pass" for="" onClick={handlerResetPassword}>Forgot Your Password?</label>
                                </div>
                                <div className='form-group'>
                                    {/* <label for="inputRePassword4">Verification Code</label> */}

                                </div>
                                <div className="form-group resend">
                                    <input type="text" className="form-control" placeholder="Verification Code" />
                                    <span className="resend">Resend(60s)</span>
                                </div>
                                <div className="submit d-flex justify-content-center">
                                    <button className="btn btn-primary" onClick={handlerLoginVerification}>Sign In</button>
                                </div>
                                <p className="text-start" style={{ color: "#9E9E9E" }}>New to Qgacha?
                                    <a className="btn-redirect" onClick={handlerLogin}>Create
                                        account</a>
                                </p>
                            </form>
                        </div>
                    </div>

                )}
                {isOpenVerification && (
                    <div className='transaction-detail2'>
                        <div className="box-auth two-factor mt-4 loginAuthen">
                            <div className="box-header d-flex justify-content-between align-items-center">
                                Two-factor authentication
                                <button className="btn__exit-chat" onClick={handlerLoginVerification}>
                                    <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                                </button>
                            </div>

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

                )}
                {isOpenResetPassword && (
                    <div className='transaction-detail2'>
                        <div className="box-auth enter-email mt-4 loginAuthen">
                            <div className="box-header d-flex justify-content-between align-items-center">
                                Reset Password
                                <button className="btn__exit-chat" onClick={handlerResetPassword}>
                                    <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                                </button>
                            </div>
                            <form>
                                <div className="form-group">
                                    <label for="inputRePassword4">Email</label>
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="submit d-flex justify-content-center">
                                    <button className="btn btn-primary" onClick={handlerResetAccountPassword}>Submit</button>
                                </div>
                                <p className="text-start" style={{ color: "#9E9E9E" }}>Already have an account?
                                    <a className="btn-redirect" onClick={handlerResetPassword}>Sign In</a>
                                </p>
                            </form>
                        </div>
                    </div>

                )}
                {isOpenResetAccount && (
                    <div className='transaction-detail2'>

                        <div className="box-auth reset-password mt-4 loginAuthen">
                            <div className="box-header d-flex justify-content-between align-items-center">
                                Reset Account Password
                                <button className="btn__exit-chat">
                                    <img src="./images/icons/deposit/icon-exit.svg" onClick={handlerResetAccountPassword} alt="" />
                                </button>
                            </div>

                            <form>
                                <div className="form-group">
                                    <label for="inputRePassword4">New password</label>
                                    <input type="password" className="form-control" placeholder="New password" />
                                    <img src="./images/icons/eye.svg" alt="show-pass" />
                                </div>
                                <div className="form-group">
                                    <label for="inputRePassword4">New password again</label>
                                    <input type="password" className="form-control" placeholder="New password again" />
                                    <img src="./images/icons/eye.svg" alt="show-pass" />
                                </div>
                                <div className='form-group'>
                                    <label for="inputRePassword4">Verification Code</label>

                                </div>
                                <div className="form-group resend">
                                    <input type="text" className="form-control" placeholder="Verification Code" />
                                    <span className="resend">Resend(60s)</span>
                                </div>
                                <p className="notice">Please enter the 6-digit verification code sent to your email. The code is
                                    valid for 10
                                    minutes.</p>
                                <div className="submit d-flex justify-content-center">
                                    <button className="btn btn-primary" onClick={handlerResetPassWordConfirm}>Confirm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {isOpenConfirmResetAccount && (
                    <div className='transaction-detail2'>

                        <div className="box-auth noti-success mt-4 signAuthen">
                            <div className="box-header d-flex justify-content-between align-items-center">
                                Reset Password
                                <button className="btn__exit-chat">
                                    <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenConfirmResetAccount(!isOpenConfirmResetAccount)} alt="" />
                                </button>
                            </div>
                            <div className="box-content">
                                <h3>Password changed successfully</h3>
                                <div className="submit d-flex justify-content-center">
                                    <button className="btn btn-primary" onClick={() => setIsOpenConfirmResetAccount(!isOpenConfirmResetAccount)}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}

export default NavAuthen