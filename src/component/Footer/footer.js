import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/flickity.css";
import "../../css/base.css";
import "../../css/home.css";
import { SidebarContext } from "../../context/sideBarContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BoxOverlay from "../Box/BoxOverlay";

const Footer = () => {
  const {
    isOpenSideBar,
    sideBarPosition
  } = useSelector((state) => state.siderBar);
  const dispatch = useDispatch();

  const {
    isOpenSupport,
    setIsOpenSupport,
    setIsChat,
    isChat,
  } = useContext(SidebarContext)
  return (
    <div className="bg-footer">
      <footer className={`${isOpenSideBar && "active"}`}>
        <div class="footer-content ">
          <div className="footer-contact d-flex">
            <h4 >PARTNER</h4>
          </div>
          <div class="img-box">
            <img src="./images/baka.png" alt="" />
            <h5>BAKA</h5>
          </div>
          <div class="line-white mt-3"></div>
          <div class="footer-contact d-flex ">
            <div class="contact-para">
              <p>The online gacha platform has become a widespread and captivating cultural phenomenon
                nowadays. With the advancement
                of
                technology and the internet, players can experience the usual luck-based gift box
                openings and participate in
                diverse
                gaming and entertainment applications that utilize gacha systems.</p>
              <p class="mt-12">
                The prominent features of the online gacha platform lie in its commemorative,
                surprising, and diverse nature. Players
                often can collect unique items, attractive characters, or high-value goods. This
                creates excitement, interest, and
                curiosity not only for young gamers but also draws the attention of adult players.
              </p>
            </div>
            <div class="follow-contact pc">
              <h4 class="text-blue">Follow us</h4>
              <div class="list-social d-flex">
                <a className="social-item" href="http://youtube.com/@qgacha" target="_blank" rel="noopener noreferrer">
                  <img style={{ width: "15px" }} src="./images/icons/youtube.svg" alt="YouTube" />
                </a>
                <a className="social-item" href="https://twitter.com/@qgachagame" target="_blank" rel="noopener noreferrer">
                  <img style={{ width: "15px" }} src="./images/icons/twitter.svg" alt="Twitter" />
                </a>
                <a className="social-item" href="http://t.me/qgacha" target="_blank" rel="noopener noreferrer">
                  <img style={{ width: "15px" }} src="./images/icons/tele.svg" alt="Telegram" />
                </a>
              </div>
              <h4 class="text-blue hd-email">Email</h4>
              <span>support@qgacha.com</span>
            </div>
            <div class="line-y mt-12"></div>
            <div class="get-intouch pc">
              <h3>GET IN TOUCH</h3>
              <h5 class="text-blue py-3">EMAIL</h5>
              <input placeholder="Your email" />
              <h5 class="text-blue py-3">MESSAGE</h5>
              <textarea class="mb-2" name="" id="" cols="30" rows="5"></textarea>
              <button>Submit</button>
            </div>
            <div class="line-white my-1 mobile"></div>
            <h3 class="mobile">GET IN TOUCH</h3>
            <div class="wrapper-contact mobile">
              <div class="row gx-0">
                <div class="col-6">
                  <div class="follow-contact">
                    <h4 class="text-blue">Follow us</h4>
                    <div class="list-social d-flex">
                      {/* <a className="social-item" href="http://youtube.com/@qgacha" target="_blank" rel="noopener noreferrer">
                      <img style={{ width: "14px" }} src="./images/icons/youtube.svg" alt="YouTube" />
                    </a>
                    <a className="social-item" href="https://twitter.com/@qgachagame" target="_blank" rel="noopener noreferrer">
                      <img style={{ width: "14px" }} src="./images/icons/twitter.svg" alt="Twitter" />
                    </a>
                    <a className="social-item" href="http://t.me/qgacha" target="_blank" rel="noopener noreferrer">
                      <img style={{ width: "14px" }} src="./images/icons/tele.svg" alt="Telegram" />
                    </a> */}
                    </div>
                    <h4 class="text-blue hd-email">Email</h4>
                    <div class="email-info" style={{ textDecoration: "underline" }}>support@qgacha.com</div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="get-intouch">
                    <h4 class="text-blue email-label">EMAIL</h4>
                    <input placeholder="Your email" />
                    <h4 class="text-blue message">MESSAGE</h4>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="line-white mt-39"></div>
          <div class="footer-info d-flex">
            <div class="box box-logo">
              <img src="./images/icons/logo.svg" alt="" />
              <p>
                Qgacha is a community-based platform providing its players with the best online
                gacha gaming experience. We have created
                a simple, user-friendly gaming platform accessible to everyone. Join us and indulge
                in experiences beyond your
                imagination.
              </p>
              <div class="list-social d-flex">
                <a className="social-item" href="http://youtube.com/@qgacha" target="_blank" rel="noopener noreferrer">
                  <img style={{ width: "14px" }} src="./images/icons/youtube.svg" alt="YouTube" />
                </a>
                <a className="social-item" href="https://twitter.com/@qgachagame" target="_blank" rel="noopener noreferrer">
                  <img style={{ width: "14px" }} src="./images/icons/twitter.svg" alt="Twitter" />
                </a>
                <a className="social-item" href="http://t.me/qgacha" target="_blank" rel="noopener noreferrer">
                  <img style={{ width: "14px" }} src="./images/icons/tele.svg" alt="Telegram" />
                </a>
              </div>
            </div>
            <div class="mobile wrapp-link">
              <div class="row gx-0">
                <div class="col-5">
                  <div class="list-link">
                    <h4>QGACHA</h4>
                    <ul>

                      <li><Link to="/">Home</Link></li>
                      <li><Link to="">About QGacha</Link></li>
                      <li><Link to="">VIP club</Link></li>
                      <li><Link to="/event">Event</Link></li>
                      <li><Link to="/affiliate">Affiliate</Link></li>
                    </ul>
                  </div>
                </div>
                <div class="col-2">
                  <div class="get-help">
                    <h4>GET HELP</h4>
                    <div class="link-faq"><Link to="/faq">FAQ</Link></div>
                  </div>
                </div>
                <div class="col-5">
                  <div class="box box-docs">
                    <h4>DOCS</h4>
                    <ul>
                      <li><a href="">Privacy Policy</a></li>
                      <li><a href="">Terms & Conditions</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="line-yblue pc"></div>
            <div class="box box-link d-flex pc">
              <div class="list-link">
                <h4>QGACHA</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="">About QGacha</Link></li>
                  <li><Link to="">VIP club</Link></li>
                  <li><Link to="/event">Event</Link></li>
                  <li><Link to="/affiliate">Affiliate</Link></li>
                </ul>
              </div>
            </div>
            <div class="box box-link d-flex pc">
              <div class="list-link" style={{ textAlign: "right" }}>
                <h4>GET HELP</h4>
                <ul>
                  <li><Link to="/faq">FAQ</Link></li>
                </ul>
              </div>

            </div>
            <div class="line-yblue pc"></div>
            <div class="box box-link d-flex pc">
              <div class="list-link">
                <h4>DOCS</h4>
                <ul>
                  <li><a href="">Privacy Policy</a></li>
                  <li><a href="">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
            <div class="line-yblue pc"></div>

          </div>
        </div>
        <div class="line-white top-copy"></div>
        <div class="text-center copy-right copy-right" >Copyright QGacha ©2023 All Rights Reserved.</div>
        <div class="mobile menu-bottom" style={{ zIndex: 999999 }}>
          <div class="list-feature">

            <Link to="/completedgacha">
              <div class="menu-feature d-flex flex-column justify-content-center align-items-center w-49">
                <img src="./images/icons/gacha.png" alt="" />
                <div class="name-feature">Gacha</div>
              </div>
            </Link>
            <Link to="/upgrade">
              <div
                class="menu-feature upgrade d-flex flex-column justify-content-center align-items-center">
                <img src="./images/icons/upgrademobile.svg" alt="" />
                <div class="name-feature">Upgrade</div>
              </div>
            </Link>
            <Link to="/walletMobi">
              <div
                class="menu-feature wallet d-flex flex-column justify-content-center align-items-center">
                <img src="./images/icons/icon-cardmobile.svg" alt="" />
                <div class="name-feature">Wallet</div>
              </div>
            </Link>

            <div
              onClick={() => setIsChat(!isChat)}
              class="menu-feature d-flex flex-column justify-content-center align-items-center  w-49" >
              <img src="./images/icons/chat.svg" alt="" />
              <div class="name-feature">Chat</div>
            </div>
            <div
              class="menu-feature d-flex flex-column justify-content-center align-items-center  w-49" onClick={() => dispatch({ type: "SET_IS_OPEN_SIDEBAR", payload: !isOpenSideBar, position: sideBarPosition })}>
              <img src="./images/icons/menu-icon.svg" alt="" />
              <div class="name-feature">Menu</div>
            </div>
          </div>
        </div>


      </footer>
    </div>
  );
};

export default Footer;
