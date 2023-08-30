import { useContext } from "react";
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
        setIsOpenSupport
    } = useContext(SidebarContext)

    return (
        <>
            <button class="btn-support" onClick={() => setIsOpenSupport(!isOpenSupport)} >
                <img src="images/icons/livesupport-icon.svg" alt="" />
            </button>
            <div id="box__support-chat" class={`box__support-chat ${isOpenSupport === true ? "active" : ""}`}>
                <div class="box__support-header">
                    <div class="header-top d-flex justify-content-between align-items-center">
                        <img src="./images/icons/qgc-coin.png" alt="qgc-coin" />
                        <h5>Support QGC</h5>
                        <div class="icon__exit-chat">
                            <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenSupport(!isOpenSupport)} alt="icon__exit-chat" />
                        </div>
                    </div>
                    <p class="text-center mb-0">We typically reply in under 10 minutes</p>
                    <p class="text-center mb-0 pb-2">Ask us anything, or share your feedback.</p>
                </div>
                <div class="box__support-body">
                    <textarea type="text"
                        placeholder="For a safer and more positive user experience, we've retired Private Messages. But don't worry, the lively discussions continue in our multilingual site chatrooms. Enjoy connecting there in one of 16 languages!"></textarea>
                    <div class="select-language">
                        <h5>Please select your language :</h5>
                        <div class="list-language d-flex flex-wrap justify-content-end">
                            <div class="language-item">English</div>
                            <div class="language-item">中文</div>
                            <div class="language-item">Español</div>
                            <div class="language-item">العربية</div>
                            <div class="language-item">Português</div>
                            <div class="language-item">Pусский</div>
                            <div class="language-item">Deutsch</div>
                            <div class="language-item">日本語</div>
                            <div class="language-item">한국어/조선말</div>
                            <div class="language-item">Français</div>
                            <div class="language-item">Türkçe</div>
                            <div class="language-item">Tiếng Việt</div>
                            <div class="language-item">ไทย</div>
                            <div class="language-item">Bahasa Indonesia</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class={`box__spin-overlay ${isOpenSpin === true ? "active" : ""}`} >
                <div id="box-spin">
                    <div class="row gx-0">
                        <div class="col-4">
                            <div class="box-item d-flex flex-column">
                                <div class="icon__exit-spinbox align-self-end">
                                    <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenSpin(!isOpenSpin)} alt="icon__exit-spinbox" />
                                </div>
                                <div class="box-content d-flex justify-content-center flex-column align-items-center">
                                    <div class="list-prize d-flex justify-content-between">
                                        <img src="./images/icons/prize-active.svg" alt="" />
                                        <img src="./images/icons/prize-active.svg" alt="" />
                                        <img src="./images/icons/prize-active.svg" alt="" />
                                    </div>
                                    <div class="spin-main d-flex justify-content-center align-items-center">
                                        <div class="spin-center">
                                            <img src="./images/icons/spin_center.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="btn__group-actions d-flex justify-content-between">
                                        <button class="btn__spin-lucky">Lucky Spin: N</button>
                                        <button class="btn__spin-auto">Auto Spin: N</button>
                                    </div>
                                    <div class="box-user d-flex align-items-center">
                                        <div class="user-ava"><img src="./images/icons/avatar-default.svg" alt="" /></div>
                                        <div class="user-info">
                                            <h5 class="name">Name 1</h5>
                                            <p class="win">Win:<strong>50 USDT</strong></p>
                                            <p class="lucky">In:<strong>LUCKY SPIN</strong></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-4">
                            <div class="box-item d-flex flex-column">
                                <div class="icon__exit-spinbox align-self-end">
                                    <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenSpin(!isOpenSpin)} alt="icon__exit-spinbox" />

                                </div>
                                <div class="box-content d-flex justify-content-center flex-column align-items-center">
                                    <div class="list-prize d-flex justify-content-between">
                                        <img src="./images/icons/prize-active.svg" alt="" />
                                        <img src="./images/icons/prize-active.svg" alt="" />
                                        <img src="./images/icons/prize-active.svg" alt="" />
                                    </div>
                                    <div class="spin-main d-flex justify-content-center align-items-center">
                                        <div class="spin-center">
                                            <img src="./images/icons/spin_center.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="btn__group-actions d-flex justify-content-between">
                                        <button class="btn__spin-lucky">Lucky Spin: N</button>
                                        <button class="btn__spin-auto">Auto Spin: N</button>
                                    </div>
                                    <div class="box-user d-flex align-items-center">
                                        <div class="user-ava"><img src="./images/icons/avatar-default.svg" alt="" /></div>
                                        <div class="user-info">
                                            <h5 class="name">Name 1</h5>
                                            <p class="win">Win:<strong>50 USDT</strong></p>
                                            <p class="lucky">In:<strong>LUCKY SPIN</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="box-item d-flex flex-column">
                                <div class="icon__exit-spinbox align-self-end">
                                    <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenSpin(!isOpenSpin)} alt="icon__exit-spinbox" />

                                </div>
                                <div class="box-content d-flex justify-content-center flex-column align-items-center">
                                    <div class="list-prize d-flex justify-content-between">
                                        <img src="./images/icons/prize-active.svg" alt="" />
                                        <img src="./images/icons/prize-active.svg" alt="" />
                                        <img src="./images/icons/prize-active.svg" alt="" />
                                    </div>
                                    <div class="spin-main d-flex justify-content-center align-items-center">
                                        <div class="spin-center">
                                            <img src="./images/icons/spin_center.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="btn__group-actions d-flex justify-content-between">
                                        <button class="btn__spin-lucky">Lucky Spin: N</button>
                                        <button class="btn__spin-auto">Auto Spin: N</button>
                                    </div>
                                    <div class="box-user d-flex align-items-center">
                                        <div class="user-ava"><img src="./images/icons/avatar-default.svg" alt="" /></div>
                                        <div class="user-info">
                                            <h5 class="name">Name 1</h5>
                                            <p class="win">Win:<strong>50 USDT</strong></p>
                                            <p class="lucky">In:<strong>LUCKY SPIN</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class={`box__quest-overlay ${isOpenQuest === true ? "active" : ""}`}>
                <div id="box-quest">
                    <div class="row gx-0">
                        <div class="col-6">
                            <div class="box-item">
                                <div class="box-header d-flex align-items-center justify-content-between">
                                    Quest Hub
                                    <div class="icon__exit-quest">
                                        <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenQuest(!isOpenQuest)} alt="icon__exit-quest" />
                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="main-content">
                                        <div class="info">
                                            <h3>MONDAY</h3>
                                            <p>Accumulated rewards:</p>
                                            <div class="money d-flex align-items-center">
                                                <img src="./images/icons/deposit/usdt.svg" alt="" />
                                                <span>0.00 USDT</span>
                                            </div>
                                            <button class="btn-previous">Previous Quests</button>
                                        </div>
                                    </div>
                                    <div class="detail-quest">
                                        <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="daily-quest-tab" data-toggle="pill"
                                                    data-target="#daily-quest" type="button" role="tab"
                                                    aria-controls="daily-quest" aria-selected="true">Daily
                                                    Quests</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="weekly-report-tab" data-toggle="pill"
                                                    data-target="#weekly-report" type="button" role="tab"
                                                    aria-controls="weekly-report" aria-selected="false">Weekly
                                                    Quests</button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="pills-tabContent">
                                            <div class="tab-pane fade show active" id="daily-quest" role="tabpanel"
                                                aria-labelledby="daily-quest-tab">
                                                <h5>Expires in: <strong>23 : 59 : 59</strong></h5>
                                                <div class="list-task">
                                                    <div class="task-item d-flex justify-content-between">
                                                        <div class="task-info d-flex align-items-center">
                                                            <img style={{ width: "42px" }} src="./images/icons/treasure.png"
                                                                alt="" />
                                                            <div class="task-info-detail">
                                                                <h6>Tên nhiệm vụ</h6>
                                                                <p>Chi tiết nhiệm vụ</p>
                                                                <p class="earn">Earn ....</p>
                                                            </div>
                                                        </div>
                                                        <button class="btn-go">
                                                            Go
                                                        </button>
                                                    </div>
                                                    <div class="task-item d-flex justify-content-between">
                                                        <div class="task-info d-flex align-items-center">
                                                            <img style={{ width: "42px" }} src="./images/icons/treasure.png"
                                                                alt="" />
                                                            <div class="task-info-detail">
                                                                <h6>Tên nhiệm vụ</h6>
                                                                <p>Chi tiết nhiệm vụ</p>
                                                                <p class="earn">Earn ....</p>
                                                            </div>
                                                        </div>
                                                        <button class="btn-go">
                                                            Go
                                                        </button>
                                                    </div>
                                                    <div class="task-item d-flex justify-content-between">
                                                        <div class="task-info d-flex align-items-center">
                                                            <img style={{ width: "42px" }} src="./images/icons/treasure.png"
                                                                alt="" />
                                                            <div class="task-info-detail">
                                                                <h6>Tên nhiệm vụ</h6>
                                                                <p>Chi tiết nhiệm vụ</p>
                                                                <p class="earn">Earn ....</p>
                                                            </div>
                                                        </div>
                                                        <button class="btn-go">
                                                            Go
                                                        </button>
                                                    </div>
                                                    <div class="spacer pb-5 mb-4"></div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="weekly-report" role="tabpanel"
                                                aria-labelledby="weekly-report-tab">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-6">
                            <div class="box-item">
                                <div class="box-header d-flex align-items-center justify-content-between">
                                    Quest Hub
                                    <div class="icon__exit-quest">
                                        <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenQuest(!isOpenQuest)} alt="icon__exit-quest" />

                                    </div>
                                </div>
                                <div class="box-body">
                                    <div class="main-content">
                                        <div class="info">
                                            <h3>MONDAY</h3>
                                            <p>Accumulated rewards:</p>
                                            <div class="money d-flex align-items-center">
                                                <img src="./images/icons/deposit/usdt.svg" alt="" />
                                                <span>0.00 USDT</span>
                                            </div>
                                            <button class="btn-previous">Previous Quests</button>
                                        </div>
                                    </div>
                                    <div class="detail-quest">
                                        <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="daily-quest2-tab" data-toggle="pill"
                                                    data-target="#daily-quest2" type="button" role="tab"
                                                    aria-controls="daily-quest2" aria-selected="true">Daily
                                                    Quests</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="weekly-report2-tab" data-toggle="pill"
                                                    data-target="#weekly-report2" type="button" role="tab"
                                                    aria-controls="weekly-report2" aria-selected="false">Weekly
                                                    Quests</button>
                                            </li>
                                        </ul>
                                        <div class="tab-content" id="pills-tabContent">
                                            <div class="tab-pane fade show active" id="daily-quest2" role="tabpanel"
                                                aria-labelledby="daily-quest2-tab">
                                                <h5>Expires in: <strong>23 : 59 : 59</strong></h5>
                                                <div class="list-task">
                                                    <div class="task-item d-flex justify-content-between">
                                                        <div class="task-info d-flex align-items-center">
                                                            <img style={{ width: "42px" }} src="./images/icons/treasure.png"
                                                                alt="" />
                                                            <div class="task-info-detail">
                                                                <h6>Tên nhiệm vụ</h6>
                                                                <p>Chi tiết nhiệm vụ</p>
                                                                <p class="earn">Earn ....</p>
                                                            </div>
                                                        </div>
                                                        <button class="btn-go">
                                                            Go
                                                        </button>
                                                    </div>
                                                    <div class="task-item d-flex justify-content-between">
                                                        <div class="task-info d-flex align-items-center">
                                                            <img style={{ width: "42px" }} src="./images/icons/treasure.png"
                                                                alt="" />
                                                            <div class="task-info-detail">
                                                                <h6>Tên nhiệm vụ</h6>
                                                                <p>Chi tiết nhiệm vụ</p>
                                                                <p class="earn">Earn ....</p>
                                                            </div>
                                                        </div>
                                                        <button class="btn-go">
                                                            Go
                                                        </button>
                                                    </div>
                                                    <div class="task-item d-flex justify-content-between">
                                                        <div class="task-info d-flex align-items-center">
                                                            <img style={{ width: "42px" }} src="./images/icons/treasure.png"
                                                                alt="" />
                                                            <div class="task-info-detail">
                                                                <h6>Tên nhiệm vụ</h6>
                                                                <p>Chi tiết nhiệm vụ</p>
                                                                <p class="earn">Earn ....</p>
                                                            </div>
                                                        </div>
                                                        <button class="btn-go">
                                                            Go
                                                        </button>
                                                    </div>
                                                    <div class="spacer pb-5 mb-4"></div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="weekly-report2" role="tabpanel"
                                                aria-labelledby="weekly-report2-tab">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class={`box__refer-overlay ${isOpenRefer === true ? "active" : ""}`}>
                <div id="box-refer">
                    <div class="box-item">
                        <div class="box-header d-flex align-items-center justify-content-between">
                            Refer a friend
                            <div class="icon__exit-refer">
                                <img src="./images/icons/deposit/icon-exit.svg" onClick={() => setIsOpenRefer(!isOpenRefer)} alt="icon__exit-refer" />
                            </div>
                        </div>
                        <div class="box-body">
                            <div class="main-img">
                                <h4>Invite your friends and get amazing <a href="">rewards</a></h4>
                                <img src="./images/refer-friends.png" alt="" />
                            </div>
                            <div class="main-content d-flex flex-column">
                                <a class="align-self-center" href="">Learn more</a>
                                <div class="link-share">
                                    <p>Share your referral link:</p>
                                    <div class="share-value d-flex align-items-center justify-content-between">
                                        <input disabled type="text" value="https://q-gacha/abcdefgh" />
                                        <img src="./images/icons/deposit/icon-copy.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default BoxOverlay;