import { useContext, useEffect, useRef } from "react";
import { SidebarContext } from "../../context/sideBarContext";

const BoxOverlay = () => {
    const {
        isOpenSpin,
        setIsOpenSpin,
        isOpenQuest,
        setIsOpenQuest,
        isOpenRefer,
        setIsOpenRefer,
        isOpenSupport,
        setIsOpenSupport,
        isOpenProfile,
        setIsOpenProfile,
        isOpenProfileDetail,
        setIsOpenProfileDetail,
        isOpenProfileEdit,
        setIsOpenProfileEdit,
        isOpenProfileAll,
        setIsOpenProfileAll
    } = useContext(SidebarContext)

    const handlerChangeProfile = () => {
        setIsOpenProfileAll(false)
        setIsOpenProfileDetail(false)
        setIsOpenProfileEdit(false)
    };

    const handleProfileEit = () => {
        setIsOpenProfileAll(false)
        setIsOpenProfileDetail(false)
        setIsOpenProfileEdit(true)
    }
    const handleProfileDetail = () => {
        setIsOpenProfileAll(false)
        setIsOpenProfileDetail(true)
        setIsOpenProfileEdit(false)
    }
    const handlerProfileAll = () => {
        setIsOpenProfileAll(true)
        setIsOpenProfileDetail(false)
        setIsOpenProfileEdit(false)
    }

    const modalRef = useRef(null);
    const transactionDetailRef = useRef(null);

    // const handleTransactionDetailClick = () => {
    //     setIsOpenProfileAll(false);
    // };

    // const handleTransactionClick = () => {
    //     setIsOpenProfileDetail(false);
    // };

    // const handleTransactionEditClick = () => {
    //     setIsOpenProfileEdit(false);
    // };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target) &&
                transactionDetailRef.current &&
                event.target.classList.contains('transaction-detail2')
            ) {

                setIsOpenProfileAll(false);

            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <button className="btn-support" onClick={() => setIsOpenSupport(!isOpenSupport)} >
                <img src="images/icons/livesupport-icon.svg" alt="" />
            </button>
            <div id="box__support-chat" className={`box__support-chat ${isOpenSupport === true ? "active" : ""}`}>
                <div className="box__support-header">
                    <div className="header-top d-flex justify-content-between align-items-center">
                        <img src="./images/icons/qgc-coin.png" alt="qgc-coin" />
                        <h5>Support QGC</h5>
                        <div className="icon__exit-chat">
                            <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenSupport(!isOpenSupport)} alt="icon__exit-chat" />
                        </div>
                    </div>
                    <p className="text-center mb-0">We typically reply in under 10 minutes</p>
                    <p className="text-center mb-0 pb-2">Ask us anything, or share your feedback.</p>
                </div>
                <div className="box__support-body">
                    <textarea type="text"
                        placeholder="For a safer and more positive user experience, we've retired Private Messages. But don't worry, the lively discussions continue in our multilingual site chatrooms. Enjoy connecting there in one of 16 languages!"></textarea>
                    <div className="select-language">
                        <h5>Please select your language :</h5>
                        <div className="list-language d-flex flex-wrap justify-content-end">
                            <div className="language-item">English</div>
                            <div className="language-item">中文</div>
                            <div className="language-item">Español</div>
                            <div className="language-item">العربية</div>
                            <div className="language-item">Português</div>
                            <div className="language-item">Pусский</div>
                            <div className="language-item">Deutsch</div>
                            <div className="language-item">日本語</div>
                            <div className="language-item">한국어/조선말</div>
                            <div className="language-item">Français</div>
                            <div className="language-item">Türkçe</div>
                            <div className="language-item">Tiếng Việt</div>
                            <div className="language-item">ไทย</div>
                            <div className="language-item">Bahasa Indonesia</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`box__spin-overlay ${isOpenSpin === true ? "active" : ""}`} >
                <div id="box-spin">
                    <div className="spin1">
                        <div className="row gx-0 ">
                            <div className="col-4">
                                <div className="box-item d-flex flex-column">
                                    <div className="icon__exit-spinbox align-self-end">
                                        <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenSpin(!isOpenSpin)} alt="icon__exit-spinbox" />
                                    </div>
                                    <div className="box-content d-flex justify-content-center flex-column align-items-center">
                                        <div className="list-prize d-flex justify-content-between">
                                            <img src="./images/icons/prize-active.svg" alt="" />
                                            <img src="./images/icons/prize-active.svg" alt="" />
                                            <img src="./images/icons/prize-active.svg" alt="" />
                                        </div>
                                        <div className="spin-main d-flex justify-content-center align-items-center">
                                            <div className="spin-center">
                                                <img src="./images/icons/spin_center.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="btn__group-actions d-flex justify-content-between">
                                            <button className="btn__spin-lucky">Lucky Spin: N</button>
                                            <button className="btn__spin-auto">Auto Spin: N</button>
                                        </div>
                                        <div className="box-user d-flex align-items-center">
                                            <div className="user-ava"><img src="./images/icons/avatar-default.svg" alt="" /></div>
                                            <div className="user-info">
                                                <h5 className="name">Name 1</h5>
                                                <p className="win">Win:<strong>50 USDT</strong></p>
                                                <p className="lucky">In:<strong>LUCKY SPIN</strong></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-4">
                                <div className="box-item d-flex flex-column">
                                    <div className="icon__exit-spinbox align-self-end">
                                        <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenSpin(!isOpenSpin)} alt="icon__exit-spinbox" />

                                    </div>
                                    <div className="box-content d-flex justify-content-center flex-column align-items-center">
                                        <div className="list-prize d-flex justify-content-between">
                                            <img src="./images/icons/prize-active.svg" alt="" />
                                            <img src="./images/icons/prize-active.svg" alt="" />
                                            <img src="./images/icons/prize-active.svg" alt="" />
                                        </div>
                                        <div className="spin-main d-flex justify-content-center align-items-center">
                                            <div className="spin-center">
                                                <img src="./images/icons/spin_center.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="btn__group-actions d-flex justify-content-between">
                                            <button className="btn__spin-lucky">Lucky Spin: N</button>
                                            <button className="btn__spin-auto">Auto Spin: N</button>
                                        </div>
                                        <div className="box-user d-flex align-items-center">
                                            <div className="user-ava"><img src="./images/icons/avatar-default.svg" alt="" /></div>
                                            <div className="user-info">
                                                <h5 className="name">Name 1</h5>
                                                <p className="win">Win:<strong>50 USDT</strong></p>
                                                <p className="lucky">In:<strong>LUCKY SPIN</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="box-item d-flex flex-column">
                                    <div className="icon__exit-spinbox align-self-end">
                                        <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenSpin(!isOpenSpin)} alt="icon__exit-spinbox" />

                                    </div>
                                    <div className="box-content d-flex justify-content-center flex-column align-items-center">
                                        <div className="list-prize d-flex justify-content-between">
                                            <img src="./images/icons/prize-active.svg" alt="" />
                                            <img src="./images/icons/prize-active.svg" alt="" />
                                            <img src="./images/icons/prize-active.svg" alt="" />
                                        </div>
                                        <div className="spin-main d-flex justify-content-center align-items-center">
                                            <div className="spin-center">
                                                <img src="./images/icons/spin_center.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="btn__group-actions d-flex justify-content-between">
                                            <button className="btn__spin-lucky">Lucky Spin: N</button>
                                            <button className="btn__spin-auto">Auto Spin: N</button>
                                        </div>
                                        <div className="box-user d-flex align-items-center">
                                            <div className="user-ava"><img src="./images/icons/avatar-default.svg" alt="" /></div>
                                            <div className="user-info">
                                                <h5 className="name">Name 1</h5>
                                                <p className="win">Win:<strong>50 USDT</strong></p>
                                                <p className="lucky">In:<strong>LUCKY SPIN</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="spin2">
                        <div className="row gx-0 " >
                            <div className="overlayspin">
                                <div className="box-item d-flex flex-column">
                                    <div className="icon__exit-spinbox align-self-end">
                                        <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenSpin(!isOpenSpin)} alt="icon__exit-spinbox" />
                                    </div>
                                    <div className="box-content d-flex justify-content-center flex-column align-items-center">
                                        <div className="list-prize d-flex justify-content-between">
                                            <img src="./images/icons/prize-active.svg" alt="" />
                                            <img src="./images/icons/prize-active.svg" alt="" />
                                            <img src="./images/icons/prize-active.svg" alt="" />
                                        </div>
                                        <div className="spin-main d-flex justify-content-center align-items-center">
                                            <div className="spin-center">
                                                <img src="./images/icons/spin_center.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="btn__group-actions d-flex justify-content-between">
                                            <button className="btn__spin-lucky">Lucky Spin: N</button>
                                            <button className="btn__spin-auto">Auto Spin: N</button>
                                        </div>
                                        <div className="box-user d-flex align-items-center">
                                            <div className="user-ava"><img src="./images/icons/avatar-default.svg" alt="" /></div>
                                            <div className="user-info">
                                                <h5 className="name">Name 1</h5>
                                                <p className="win">Win:<strong>50 USDT</strong></p>
                                                <p className="lucky">In:<strong>LUCKY SPIN</strong></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`box__quest-overlay ${isOpenQuest === true ? "active" : ""}`}>
                <div id="box-quest">
                    <div className="col-6 overlayrp ">
                        <div className="box-item">
                            <div className="box-header d-flex align-items-center justify-content-between">
                                Quest Hub
                                <div className="icon__exit-quest">
                                    <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenQuest(!isOpenQuest)} alt="icon__exit-quest" />
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="main-content">
                                    <div className="info">
                                        <h3>MONDAY</h3>
                                        <p>Accumulated rewards:</p>
                                        <div className="money d-flex align-items-center">
                                            <img src="./images/icons/deposit/usdt.svg" alt="" />
                                            <span>0.00 USDT</span>
                                        </div>
                                        <button className="btn-previous">Previous Quests</button>
                                    </div>
                                </div>
                                <div className="detail-quest">
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="daily-quest-tab" data-toggle="pill"
                                                data-target="#daily-quest" type="button" role="tab"
                                                aria-controls="daily-quest" aria-selected="true">Daily
                                                Quests</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="weekly-report-tab" data-toggle="pill"
                                                data-target="#weekly-report" type="button" role="tab"
                                                aria-controls="weekly-report" aria-selected="false">Weekly
                                                Quests</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="daily-quest" role="tabpanel"
                                            aria-labelledby="daily-quest-tab">
                                            <h5>Expires in: <strong>23 : 59 : 59</strong></h5>
                                            <div className="list-task">
                                                <div className="task-item d-flex justify-content-between">
                                                    <div className="task-info d-flex align-items-center">
                                                        <img style={{ width: "42px" }} src="./images/icons/treasure.png"
                                                            alt="" />
                                                        <div className="task-info-detail">
                                                            <h6>Tên nhiệm vụ</h6>
                                                            <p>Chi tiết nhiệm vụ</p>
                                                            <p className="earn">Earn ....</p>
                                                        </div>
                                                    </div>
                                                    <button className="btn-go">
                                                        Go
                                                    </button>
                                                </div>
                                                <div className="task-item d-flex justify-content-between">
                                                    <div className="task-info d-flex align-items-center">
                                                        <img style={{ width: "42px" }} src="./images/icons/treasure.png"
                                                            alt="" />
                                                        <div className="task-info-detail">
                                                            <h6>Tên nhiệm vụ</h6>
                                                            <p>Chi tiết nhiệm vụ</p>
                                                            <p className="earn">Earn ....</p>
                                                        </div>
                                                    </div>
                                                    <button className="btn-go">
                                                        Go
                                                    </button>
                                                </div>
                                                <div className="task-item d-flex justify-content-between">
                                                    <div className="task-info d-flex align-items-center">
                                                        <img style={{ width: "42px" }} src="./images/icons/treasure.png"
                                                            alt="" />
                                                        <div className="task-info-detail">
                                                            <h6>Tên nhiệm vụ</h6>
                                                            <p>Chi tiết nhiệm vụ</p>
                                                            <p className="earn">Earn ....</p>
                                                        </div>
                                                    </div>
                                                    <button className="btn-go">
                                                        Go
                                                    </button>
                                                </div>
                                                <div className="spacer pb-5 mb-4"></div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="weekly-report" role="tabpanel"
                                            aria-labelledby="weekly-report-tab">
                                            <h5>Expires in: <strong>23 : 59 : 59</strong></h5>
                                            <div className="list-task">
                                                <div className="task-item d-flex justify-content-between">
                                                    <div className="task-info d-flex align-items-center">
                                                        <img style={{ width: "42px" }} src="./images/icons/treasure.png"
                                                            alt="" />
                                                        <div className="task-info-detail">
                                                            <h6>Tên nhiệm vụ</h6>
                                                            <p>Chi tiết nhiệm vụ</p>
                                                            <p className="earn">Earn ....</p>
                                                        </div>
                                                    </div>
                                                    <button className="btn-go">
                                                        Go
                                                    </button>
                                                </div>
                                                <div className="task-item d-flex justify-content-between">
                                                    <div className="task-info d-flex align-items-center">
                                                        <img style={{ width: "42px" }} src="./images/icons/treasure.png"
                                                            alt="" />
                                                        <div className="task-info-detail">
                                                            <h6>Tên nhiệm vụ</h6>
                                                            <p>Chi tiết nhiệm vụ</p>
                                                            <p className="earn">Earn ....</p>
                                                        </div>
                                                    </div>
                                                    <button className="btn-go">
                                                        Go
                                                    </button>
                                                </div>
                                                <div className="task-item d-flex justify-content-between">
                                                    <div className="task-info d-flex align-items-center">
                                                        <img style={{ width: "42px" }} src="./images/icons/treasure.png"
                                                            alt="" />
                                                        <div className="task-info-detail">
                                                            <h6>Tên nhiệm vụ</h6>
                                                            <p>Chi tiết nhiệm vụ</p>
                                                            <p className="earn">Earn ....</p>
                                                        </div>
                                                    </div>
                                                    <button className="btn-go">
                                                        Go
                                                    </button>
                                                </div>
                                                <div className="spacer pb-5 mb-4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={`box__refer-overlay ${isOpenRefer === true ? "active" : ""}`}>
                <div id="box-refer">
                    <div className="box-item">
                        <div className="box-header d-flex align-items-center justify-content-between">
                            Refer a friend
                            <div className="icon__exit-refer">
                                <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenRefer(!isOpenRefer)} alt="icon__exit-refer" />
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="main-img">
                                <h4>Invite your friends and get amazing <a href="">rewards</a></h4>
                                <img src="./images/refer-friends.png" alt="" />
                            </div>
                            <div className="main-content d-flex flex-column">
                                <a className="align-self-center" href="">Learn more</a>
                                <div className="link-share">
                                    <p>Share your referral link:</p>
                                    <div className="share-value d-flex align-items-center justify-content-between">
                                        <input disabled type="text" value="https://q-gacha/abcdefgh" />
                                        <img src="./images/icons/deposit/icon-copy.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {isOpenProfileAll ? (
                <div className="transaction-detail2" ref={modalRef} >
                    <div id="box__user-info" >
                        <div className="box-header d-flex justify-content-between">
                            User Information
                            <button className="btn__exit-noti">
                                <img src="./images/icons/deposit/icon-exit.svg" onClick={handlerChangeProfile} alt="" />
                            </button>
                        </div>
                        <div className="user-info justify-content-center d-flex">
                            <div className="info-main d-flex flex-column align-items-center">
                                <img src="./images/icons/avatar-default.svg" alt="" />
                                <h5>Name 1</h5>
                                <span>User ID: 9999999999</span>
                            </div>
                            <button className="btn__edit-info">
                                <img src="./images/icons/pencil.svg" onClick={handleProfileEit} alt="" />
                            </button>
                        </div>
                        <div className="user-statis">
                            <div className="statis-head d-flex justify-content-between align-items-center">
                                Statistics
                                <button className="d-flex align-items-center" onClick={handleProfileDetail}>Detail

                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                            fill="white" />
                                    </svg>
                                </button>
                            </div>
                            <div className="d-flex summary-total">
                                <div className="total-win d-flex flex-column align-items-center justify-content-center">
                                    <h5>Total Wins</h5>
                                    <span>0</span>
                                </div>
                                <div className="total-play d-flex flex-column align-items-center justify-content-center">
                                    <h5>Total Plays</h5>
                                    <span>$0.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : isOpenProfileEdit ? (
                <div className="transaction-detail2" ref={modalRef} >
                    <div id="box__edit-username">
                        <div className="box-header d-flex justify-content-between">
                            <button onClick={handlerProfileAll}>
                                <div className="header-action d-flex align-items-center" >
                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                            fill="white" />
                                    </svg>
                                    <span style={{ color: "white" }}>
                                        My Profile
                                    </span>
                                </div>
                            </button>

                            <button className="btn__exit-edit">
                                <img src="./images/icons/deposit/icon-exit.svg" onClick={handlerProfileAll} alt="" />
                            </button>
                        </div>
                        <div className="edit-ava d-flex flex-column align-items-center">
                            <img src="./images/icons/avatar-default.svg" alt="" />
                            <button>Edit Your Avatar</button>
                        </div>
                        <form action="" className="d-flex align-items-center flex-column">
                            <div className="form-group">
                                <label for="inputRePassword4">Username</label>
                                <input type="text" className="form-control" id="inputEmail4" placeholder="name edit...." />
                                <div className="notice">Do not use special symbols, otherwise your account may not be supported.
                                </div>
                            </div>
                            <button type="submit">Modify </button>
                        </form>
                    </div>
                </div>

            ) : isOpenProfileDetail ? (
                <div className="transaction-detail2" ref={modalRef} >
                    <div id="box__user-detail">
                        <div className="box-header d-flex justify-content-between">
                            <button onClick={handlerProfileAll}>
                                <div className="header-action d-flex align-items-center" >
                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                            fill="white" />
                                    </svg>
                                    <span style={{ color: "white" }}>
                                        Detail
                                    </span>
                                </div>
                            </button>
                            <button className="btn__exit-detail">
                                <img src="./images/icons/deposit/icon-exit.svg" onClick={handlerProfileAll} alt="" />
                            </button>
                        </div>
                        <div className="select-network d-flex align-items-center mt-3">
                            Statistics
                            <input type="text" value="BEP20" />
                            <div className="user-select d-flex">
                                <img src="./images/icons/avatar-default.svg" alt="" />
                            </div>
                        </div>
                        <div className="user-statis">
                            <div className="d-flex summary-total">
                                <div className="total-win d-flex flex-column align-items-center justify-content-center">
                                    <h5>Total Wins</h5>
                                    <span>0</span>
                                </div>
                                <div className="total-play d-flex flex-column align-items-center justify-content-center">
                                    <h5>Total Plays</h5>
                                    <span>$0.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            ) : (
                <>
                </>
            )}
        </>
    );
}

export default BoxOverlay;