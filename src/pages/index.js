import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/flickity.css"
import "../css/base.css"
import "../css/home.css"



const Home = () => {
    return (
        <div class="container-wrapper">
            <header class="d-flex align-items-center">
                <div class="header-menu d-flex align-items-center justify-content-center">
                    <img style={{ width: "20px" }} src="./images/icons/menu-icon.svg" alt="" />
                    Menu
                </div>
                <div class="line-yblue"></div>
                <div class="header-content d-flex align-items-center justify-content-center">
                    <img style={{ width: "166px", height: "56px" }} src="./images/icons/logo.svg" alt="" />
                    <div class="header-action d-flex align-items-center">
                        <select name="money" id="user-money">
                            <option value="usdt"><img src="./images/icons/deposit/usdt.svg" alt="" />$9,999</option>
                            <option value="Moon">$BTC</option>
                            <option value="trx">$ETH</option>
                            <option value="bnb">$BNB</option>
                        </select>
                        <button class="btn-auth btn-deposit d-flex align-items-center ms-3">
                            <img class="me-1" style={{ width: "24px" }} src="./images/icons/credit-card.svg" alt="" /> deposit
                        </button>

                        <div class="noti-container">
                            <img class="noti-icon" src="./images/icons/bell.png" alt="" />
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
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="chat-container">
                            <img class="chat-icon" src="./images/icons/chat.svg" alt="" />
                            <div class="box-chat" id="box-chat">
                                <div class="box-header d-flex justify-content-between">
                                    Online Chat
                                    <button class="btn__exit-chat">
                                        <img src="./images/icons/deposit/icon-exit.svg" alt="" />
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
                                    </div>
                                </div>
                                <div class="box-action d-flex align-items-center">
                                    <input type="text" placeholder="Your message" />
                                    <button><img src="./images/icons/deposit/send.svg" alt="" /></button>
                                </div>
                            </div>
                        </div>

                        <div class="language-container">
                            <img class="language-icon" src="./images/icons/language.svg" alt="" />
                            <div id="box-language">
                                <div class="language-item">
                                    English
                                </div>
                            </div>
                        </div>

                        <div class="ava-container">
                            <img class="ava-icon ms-3" src="./images/icons/avatar-default.svg" alt="" />
                            <div id="box-ava">
                                <div class="feature-item d-flex align-items-center">
                                    <img src="./images/icons/credit-card.svg" alt="" />
                                    <h5 class="feature-content">
                                        Wallet
                                    </h5>
                                </div>
                                <div class="feature-item d-flex align-items-center">
                                    <img src="./images/icons/withdrawdollar.svg" alt="" />
                                    <h5 class="feature-content">
                                        Withdraw
                                    </h5>
                                </div>
                                <div class="feature-item d-flex align-items-center">
                                    <img src="./images/icons/transaction-ava.svg" alt="" />
                                    <h5 class="feature-content">
                                        Transactions
                                    </h5>
                                </div>
                                <div class="feature-item d-flex align-items-center">
                                    <img src="./images/icons/affiliate.png" alt="" />
                                    <h5 class="feature-content">Affiliate</h5>
                                </div>
                                <div class="feature-item d-flex align-items-center">
                                    <img src="./images/icons/profile.svg" alt="" />
                                    <h5 class="feature-content">Profile</h5>
                                </div>
                                <div class="feature-item d-flex align-items-center">
                                    <img src="./images/icons/setting-icon.svg" alt="" />
                                    <h5 class="feature-content">Setting</h5>
                                </div>
                                <div class="feature-item d-flex align-items-center">
                                    <img src="./images/icons/logout.svg" alt="" />
                                    <h5 class="feature-content">Log out</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line-yblue"></div>
                <div class="header-right">
                    <select name="currency" id="currentcy">
                        <option value="usdt">$USDT</option>
                        <option value="Moon">$BTC</option>
                        <option value="trx">$ETH</option>
                        <option value="bnb">$BNB</option>
                    </select>
                </div>
            </header>


        </div>
    );
}

export default Home;