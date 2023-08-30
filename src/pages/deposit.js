import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/deposit.css";
import "../css/responsive.css";
import Navbar from "../component/Navbar/navbar";
import Sidebar from "../component/Sidebar/sidebar";
import Footer from "../component/Footer/footer";

const deposit = () => {
  return (
    <div class="container-wrapper">
      <Navbar />
      <main>
        <Sidebar />

        <div class="main-deposit">
          <div class="deposit-content">
            <button class="btn-wallet text-15 d-flex align-items-center justify-content-between">Wallet
              <img class="mobile" src="./images/icons/deposit/icon-exit.svg" alt="" />
            </button>
            <div class="feature-content d-flex">
              <div class="list-feature">
                <ul>
                  <li class="feature-item d-flex align-items-center">
                    <img src="./images/icons/deposit/wallet.svg" alt="" class="feature-icon" />
                    <h4 class="feature-title text-15">Balance</h4>
                  </li>
                  <li class="feature-item d-flex align-items-center active">
                    <img src="./images/icons/deposit/deposit.svg" alt="" class="feature-icon" />
                    <h4 class="feature-title text-15">Deposit</h4>
                  </li>
                  <li class="feature-item d-flex align-items-center">
                    <img src="./images/icons/deposit/withdraw.svg" alt="" class="feature-icon" />
                    <h4 class="feature-title text-15">Withdraw</h4>
                  </li>
                  <li class="feature-item d-flex align-items-center">
                    <img src="./images/icons/deposit/buy.svg" alt="" class="feature-icon" />
                    <h4 class="feature-title text-15">Buy Crypto <span>(Coming Soon)</span></h4>
                  </li>
                  <li class="feature-item d-flex align-items-center">
                    <img src="./images/icons/deposit/nft.svg" alt="" class="feature-icon" />
                    <h4 class="feature-title text-15">NFTs <span>(Coming Soon)</span></h4>
                  </li>
                  <li class="feature-item d-flex align-items-center">
                    <img src="./images/icons/deposit/transaction.svg" alt="" class="feature-icon" />
                    <h4 class="feature-title text-15">Transaction</h4>
                  </li>
                </ul>

              </div>
              <div class="feature-detail">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="crypto-tab" data-toggle="tab"
                      data-target="#crypto" type="button" role="tab" aria-controls="crypto"
                      aria-selected="true">Crypto</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="fiat-tab" data-toggle="tab" data-target="#fiat"
                      type="button" role="tab" aria-controls="fiat"
                      aria-selected="false">Fiat</button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="crypto" role="tabpanel"
                    aria-labelledby="crypto-tab">
                    <h5 class="text-15 mt-3">Deposit Currency</h5>
                    <div class="list-currency mt-1 d-flex">
                      <button class="currency d-flex align-items-center">
                        <img src="./images/icons/deposit/usdt.svg" alt="" />
                        <div class="text-cur">USDT</div>
                      </button>
                      <button class="currency d-flex align-items-center">
                        <img src="./images/icons/qgc-coin.png" alt="" />
                        <div class="text-cur">QGC</div>
                      </button>
                    </div>
                    <div class="currency-show d-flex align-items-center">
                      <img src="./images/icons/deposit/usdt.svg" alt="" />
                      <div class="text-cur">USDT</div>
                    </div>

                    <h4 class="text-15 mt-4">Choose Network</h4>
                    <div class="mt-3 d-flex justify-content-between select-network align-items-center">
                      <select class="text-15">
                        <option selected>BEP20</option>
                        <option value="1">P2P</option>
                        <option value="2">BEP2N</option>
                      </select>
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                          fill="white" />
                      </svg>
                    </div>
                    <h4 class="text-15 mt-4">Minimum of 10.00 USDT deposit</h4>
                    <div
                      class="d-flex flex-column flex-sm-row align-items-center justify-content-between info-address mt-3">
                      <div class="qr d-flex justify-content-center align-items-center">
                        Mã QR
                      </div>
                      <div class="address-code">
                        <h5 class="text-15">Deposit Address</h5>
                        <div
                          class="d-flex align-items-center justify-content-between address-wrapper mt-1">
                          <p class="m-0">mã ví...</p>
                          <button class="text-15">Copy</button>
                        </div>
                      </div>
                    </div>

                    <div class="notice mt-3">
                      <p class="text-15"><strong>NOTICE:</strong> Send only USDT to this deposit
                        address. Coins will be
                        deposited automatically after 6 network confirmations.
                        Smart contract addresses are not supported(Contact us).</p>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="fiat" role="tabpanel" aria-labelledby="fiat-tab">fiat
                  </div>
                </div>
              </div>
              <button class="btn-support">
                <img src="images/icons/livesupport-icon.svg" alt="" />
              </button>
              <div id="box__support-chat" class="box__support-chat">
                <div class="box__support-header">
                  <div class="header-top d-flex justify-content-between align-items-center">
                    <img src="./images/icons/qgc-coin.png" alt="qgc-coin" />
                    <h5>Support QGC</h5>
                    <div class="icon__exit-chat">
                      <img src="./images/icons/deposit/icon-exit.svg" alt="icon__exit-chat" />
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

              {/* <div class="box__spin-overlay">
                <div id="box-spin">
                  <div class="row gx-0">
                    <div class="col-4">
                      <div class="box-item d-flex flex-column">
                        <div class="icon__exit-spinbox align-self-end">
                          <img src="./images/icons/deposit/icon-exit.svg" alt="icon__exit-spinbox" />
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
                          <img src="./images/icons/deposit/icon-exit.svg" alt="icon__exit-spinbox" />
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
                          <img src="./images/icons/deposit/icon-exit.svg" alt="icon__exit-spinbox" />
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
              </div> */}

              {/* <div class="box__quest-overlay">
                <div id="box-quest">
                  <div class="row gx-0">
                    <div class="col-6">
                      <div class="box-item">
                        <div class="box-header d-flex align-items-center justify-content-between">
                          Quest Hub
                          <div class="icon__exit-quest">
                            <img src="./images/icons/deposit/icon-exit.svg" alt="icon__exit-quest" />
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
                            <img src="./images/icons/deposit/icon-exit.svg" alt="icon__exit-quest" />
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
              </div> */}

              {/* <div class="box__refer-overlay">
                <div id="box-refer">
                  <div class="box-item">
                    <div class="box-header d-flex align-items-center justify-content-between">
                      Refer a friend
                      <div class="icon__exit-refer">
                        <img src="./images/icons/deposit/icon-exit.svg" alt="icon__exit-refer" />
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
              </div> */}


              {/* <div class="box__info-overlay">

                <div id="box__user-info">
                  <div class="box-header d-flex justify-content-between">
                    User Information
                    <button class="btn__exit-noti">
                      <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                    </button>
                  </div>
                  <div class="user-info justify-content-center d-flex">
                    <div class="info-main d-flex flex-column align-items-center">
                      <img src="./images/icons/avatar-default.svg" alt="" />
                      <h5>Name 1</h5>
                      <span>User ID: 9999999999</span>
                    </div>
                    <button class="btn__edit-info">
                      <img src="./images/icons/pencil.svg" alt="" />
                    </button>
                  </div>
                  <div class="user-statis">
                    <div class="statis-head d-flex justify-content-between align-items-center">
                      Statistics
                      <button class="d-flex align-items-center">Detail
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                            fill="white" />
                        </svg>
                      </button>
                    </div>
                    <div class="d-flex summary-total">
                      <div class="total-win d-flex flex-column align-items-center justify-content-center">
                        <h5>Total Wins</h5>
                        <span>0</span>
                      </div>
                      <div class="total-play d-flex flex-column align-items-center justify-content-center">
                        <h5>Total Plays</h5>
                        <span>$0.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="box__edit-username">
                  <div class="box-header d-flex justify-content-between">
                    <div class="header-action d-flex align-items-center">
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                          fill="white" />
                      </svg>
                      My Profile
                    </div>
                    <button class="btn__exit-edit">
                      <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                    </button>
                  </div>
                  <div class="edit-ava d-flex flex-column align-items-center">
                    <img src="./images/icons/avatar-default.svg" alt="" />
                    <button>Edit Your Avatar</button>
                  </div>
                  <form action="" class="d-flex align-items-center flex-column">
                    <div class="form-group">
                      <label for="inputRePassword4">Username</label>
                      <input type="text" class="form-control" id="inputEmail4" placeholder="name edit...." />
                      <div class="notice">Do not use special symbols, otherwise your account may not be supported.
                      </div>
                    </div>
                    <button type="submit">Modify </button>
                  </form>
                </div>

                <div id="box__user-detail">
                  <div class="box-header d-flex justify-content-between">
                    <div class="header-action d-flex align-items-center">
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                          fill="white" />
                      </svg>
                      Detail
                    </div>
                    <button class="btn__exit-detail">
                      <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                    </button>
                  </div>
                  <div class="select-network d-flex align-items-center mt-3" />
                  Statistics
                  <input type="text" value="BEP20" />
                  <div class="user-select d-flex">
                    <img src="./images/icons/avatar-default.svg" alt="" />
                  </div>
                </div>
                <div class="user-statis">
                  <div class="d-flex summary-total">
                    <div class="total-win d-flex flex-column align-items-center justify-content-center">
                      <h5>Total Wins</h5>
                      <span>0</span>
                    </div>
                    <div class="total-play d-flex flex-column align-items-center justify-content-center">
                      <h5>Total Plays</h5>
                      <span>$0.00</span>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </main >
      <div>
        <Footer />
      </div>
    </div >
  );
};

export default deposit;
