import { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../context/sideBarContext";

const Navbar = () => {
    const {
        isOpenProfileAll,
        setIsOpenProfileAll,
        setIsOpenProfileDetail,
        setIsOpenProfileEdit,
        setIsNofi,
        isProfile,
        setIsProfile,
        isLang,
        setIsLang,
        setIsSidebarChat,
        isSidebarChat,
        isSidebarNoti,
        setIsSidebarNoti,
    } = useContext(SidebarContext)
    const dispatch = useDispatch();
    const {
        isOpenSideBar,
    } = useSelector((state) => state.siderBar);

    const notiRef = useRef(null);
    const profileRef = useRef(null);
    const langRef = useRef(null);

    const ModalChat = () => {
        setIsSidebarChat(!isSidebarChat);
        setIsSidebarNoti(false);
        setIsProfile(false);
        setIsLang(false);
    }

    const ModalNofi = () => {
        setIsSidebarChat(false);
        setIsSidebarNoti(!isSidebarNoti)
        setIsProfile(false);
        setIsLang(false);
    }
    const ModalProfile = () => {
        setIsSidebarChat(false);
        setIsSidebarNoti(false);
        setIsProfile(!isProfile);
        setIsLang(false);
    }
    const ModalLang = () => {
        setIsSidebarChat(false);
        setIsSidebarNoti(false);
        setIsProfile(false);
        setIsLang(!isLang);
    }

    const handleOutsideClick = (event) => {
        if (
            notiRef.current &&
            !notiRef.current.contains(event.target) &&
            profileRef.current &&
            !profileRef.current.contains(event.target) &&
            langRef.current &&
            !langRef.current.contains(event.target)
        ) {
            setIsNofi(false);
            setIsProfile(false);
            setIsLang(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

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



    return (
        <div className="bg-header">
            <header class="d-flex align-items-center">
                <div class="header-content d-flex align-items-center ">
                    <Link to={"/"} className={`img-index ${isOpenSideBar && "active"}`} >
                        <img class="mobile" style={{ width: "30px" }} src="./images/icons/logo-mobile.svg" alt="logo-mobile" />
                        <img class="pc" style={{ width: "166px", height: "56px" }} src="./images/icons/logo.svg" alt="logo-pc" />
                    </Link>
                    <div class="header-action d-flex align-items-center">
                        <div class="select-currency d-flex align-items-center   ">
                            <img class="currency" src="./images/icons/deposit/usdt.svg" alt="" />
                            <select name="money" id="user-money">
                                <option value="usdt" className='select-text'>$9,999</option>
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
                        <Link onClick={() => dispatch({ type: "SET_IS_OPEN_DEPOSIT" })} to={"/wallet"}>

                            <button class="btn-auth btn-deposit d-flex align-items-center ms-3" >

                                <img class="me-1" style={{ width: "24px" }} src="./images/icons/credit-card.svg" alt="" /> deposit

                            </button>
                        </Link>

                        {/* <!-- BOX NOTIFICATION --> */}


                        <div class="noti-container">
                            <img class="noti-icon" onClick={ModalNofi} src="./images/icons/bell.png" alt="" />
                        </div>
                        {/* <!-- BOX CHAT --> */}
                        <div class="chat-container">
                            <img class="chat-icon" onClick={ModalChat} src="./images/icons/chat.svg" alt="" />
                        </div>
                        {/* <!-- BOX LANGUAGE --> */}
                        <div class="language-container" ref={langRef}>
                            <img class="language-icon" onClick={ModalLang} src="./images/icons/language.svg" alt="" />
                            <div id="box-language" class={isLang === true ? ` active` : ``}>
                                <div class="language-item">
                                    English
                                </div>
                            </div>
                        </div>
                        {/* <!-- BOX AVATAR --> */}
                        <div class="ava-container" style={{ zIndex: 999 }} ref={profileRef}>
                            <img class="ava-icon ms-3" onClick={ModalProfile} src="./images/icons/avatar-default.svg" alt="" />
                            <div id="box-ava" class={isProfile === true ? `active` : ``}>
                                <Link onClick={() => dispatch({ type: "SET_IS_OPEN_BALANCE" })} to={"/wallet"} >
                                    <div class="feature-item d-flex align-items-center">
                                        <img src="./images/icons/credit-card.svg" alt="" />
                                        <h5 class="feature-content">
                                            Wallet
                                        </h5>
                                    </div>
                                </Link>
                                <Link onClick={() => dispatch({ type: "SET_IS_OPEN_WITHDRAW" })} to={"/wallet"} >
                                    <div class="feature-item d-flex align-items-center">
                                        <img src="./images/icons/withdrawdollar.svg" alt="" />
                                        <h5 class="feature-content">
                                            Withdraw
                                        </h5>
                                    </div>
                                </Link>

                                <Link onClick={() => dispatch({ type: "SET_IS_OPEN_TRANSACTION" })} to={"/wallet"} >
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

            </header >
        </div>
    )




}

export default Navbar;