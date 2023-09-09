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
    setIsSidebarChat,
    isSidebarChat,
  } = useContext(SidebarContext)
  return (
    <div className="bg-footer">
      <div className="footer-border"></div>
      <footer className={`${isOpenSideBar && "active"}`}>
        <div className="footer-content ">
          <div className="footer-contact d-flex">
            <h4 >PARTNER</h4>
          </div>
          <div className="img-box">
            <img src="./images/baka.png" alt="" />
            <h5>BAKAC</h5>
          </div>
          <div className="line-white mt-3"></div>
          <div className="footer-contact d-flex ">
            <div className="contact-para">
              <p>The online gacha platform has become a widespread and captivating cultural phenomenon
                nowadays. With the advancement
                of
                technology and the internet, players can experience the usual luck-based gift box
                openings and participate in
                diverse
                gaming and entertainment applications that utilize gacha systems.</p>
              <p className="mt-12">
                The prominent features of the online gacha platform lie in its commemorative,
                surprising, and diverse nature. Players
                often can collect unique items, attractive characters, or high-value goods. This
                creates excitement, interest, and
                curiosity not only for young gamers but also draws the attention of adult players.
              </p>
            </div>
            <div className="follow-contact pc">
              <h4 className="text-blue">Follow us</h4>
              <div className="list-social d-flex">
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
              <h4 className="text-blue hd-email">Email</h4>
              <span>support@qgacha.com</span>
            </div>
            <div className="line-y mt-12"></div>
            <div className="get-intouch pc">
              <h3>GET IN TOUCH</h3>
              <h5 className="text-blue py-3">EMAIL</h5>
              <input placeholder="Your email" />
              <h5 className="text-blue py-3">MESSAGE</h5>
              <textarea className="mb-2" name="" id="" cols="30" rows="5"></textarea>
              <button>Submit</button>
            </div>
            <div className="line-white my-1 mobile"></div>
            <h3 className="mobile">GET IN TOUCH</h3>
            <div className="wrapper-contact mobile">
              <div className="row gx-0">
                <div className="col-6">
                  <div className="follow-contact">
                    <h4 className="text-blue">Follow us</h4>
                    <div className="list-social d-flex">
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
                    <h4 className="text-blue hd-email">Email</h4>
                    <div className="email-info" style={{ textDecoration: "underline" }}>support@qgacha.com</div>
                  </div>
                </div>
                <div className="col-6 email-msg">
                  <div className="get-intouch">
                    <h4 className="text-blue email-label">EMAIL</h4>
                    <input placeholder="Your email" />
                    <h4 className="text-blue message">MESSAGE</h4>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line-white mt-39"></div>
          <div className="footer-info d-flex">
            <div className="box box-logo">
              <img src="./images/icons/logo.svg" alt="" />
              <p>
                Qgacha is a community-based platform providing its players with the best online
                gacha gaming experience. We have created
                a simple, user-friendly gaming platform accessible to everyone. Join us and indulge
                in experiences beyond your
                imagination.
              </p>
              <div className="list-social d-flex">
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
            <div className="mobile wrapp-link">
              <div className="row gx-0">
                <div className="col-4">
                  <div className="list-link">
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
                <div className="col-4">
                  <div className="list-link">
                    <h4>GET HELP</h4>
                    <ul>

                      <li><Link to="/faq">FAQ</Link></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>

                    </ul>

                  </div>
                </div>
                <div className="col-4">
                  <div className="list-link">
                    <h4>DOCS</h4>
                    <ul>
                      <li><a href="">Privacy Policy</a></li>
                      <li><a href="">Terms & Conditions</a></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="line-yblue pc"></div>
            <div className="box box-link d-flex pc">
              <div className="list-link">
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
            <div className="box box-link d-flex pc">
              <div className="list-link" style={{ textAlign: "right" }}>
                <h4>GET HELP</h4>
                <ul>
                  <li><Link to="/faq">FAQ</Link></li>
                </ul>
              </div>

            </div>
            <div className="line-yblue pc"></div>
            <div className="box box-link d-flex pc">
              <div className="list-link">
                <h4>DOCS</h4>
                <ul>
                  <li><a href="">Privacy Policy</a></li>
                  <li><a href="">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
            <div className="line-yblue pc"></div>

          </div>
        </div>
        <div className="line-white top-copy"></div>
        <div className="text-center copy-right copy-right" >Copyright QGacha ©2023 All Rights Reserved.</div>
        <div className="mobile menu-bottom" style={{ zIndex: 999999 }}>
          <div className="list-feature">

            <Link to="/boxgacha">
              <div className="menu-feature d-flex flex-column justify-content-center align-items-center w-49">
                <img src="./images/icons/gacha.png" alt="" />
                <div className="name-feature">Gacha</div>
              </div>
            </Link>
            <Link to="/upgrade">
              <div
                className="menu-feature upgrade d-flex flex-column justify-content-center align-items-center">
                <img src="./images/icons/upgrademobile.svg" alt="" />
                <div className="name-feature">Upgrade</div>
              </div>
            </Link>
            <Link to="/wallet">
              <div
                className="menu-feature wallet d-flex flex-column justify-content-center align-items-center">
                <img src="./images/icons/icon-cardmobile.svg" alt="" />
                <div className="name-feature">Wallet</div>
              </div>
            </Link>

            <div
              onClick={() => setIsSidebarChat(!isSidebarChat)}
              className="menu-feature d-flex flex-column justify-content-center align-items-center  w-49" >
              <img src="./images/icons/chat.svg" alt="" />
              <div className="name-feature">Chat</div>
            </div>
            <div
              className="menu-feature d-flex flex-column justify-content-center align-items-center  w-49" onClick={() => dispatch({ type: "SET_IS_OPEN_SIDEBAR", payload: !isOpenSideBar, position: sideBarPosition })}>
              <img src="./images/icons/menu-icon.svg" alt="" />
              <div className="name-feature">Menu</div>
            </div>
          </div>
        </div>


      </footer>
    </div>
  );
};

export default Footer;
