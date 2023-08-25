import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import Navbar from "../component/Navbar/navbar";
import Sidebar from "../component/Sidebar/sidebar";
import Footer from "../component/Footer/footer";
const affiliate = () => {
  return (
    <div class="container-wrapper">
      <Navbar />
      <div>
        <Sidebar />
        <div class="main-home">
          <div class="main-content">
            <div class="header-affi">
              <button class="active">
                General
              </button>
              <button>
                Network Management
              </button>
            </div>
          </div>
          <Footer />
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
        <div class="box__spin-overlay">
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
        </div>
      </div>
    </div>
  );
};

export default affiliate;
