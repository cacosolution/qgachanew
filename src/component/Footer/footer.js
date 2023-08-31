import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/flickity.css";
import "../../css/base.css";
import "../../css/home.css";
import { SidebarContext } from "../../context/sideBarContext";

const Footer = () => {
  const { isOpenSideBar, setIsOpenSideBar } = useContext(SidebarContext)

  return (

    <footer>
      <div class="footer-content">
        <h4 class="pl-100">PARTNER</h4>
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
              <div class="social-item"><img src="./images/icons/youtube.svg" alt="" /></div>
              <div class="social-item"><img src="./images/icons/twitter.svg" alt="" /></div>
              <div class="social-item"><img src="./images/icons/tele.svg" alt="" /></div>
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
                    <div class="social-item"><img src="./images/icons/youtube.svg" alt="" />
                    </div>
                    <div class="social-item"><img src="./images/icons/twitter.svg" alt="" />
                    </div>
                    <div class="social-item"><img src="./images/icons/tele.svg" alt="" />
                    </div>
                  </div>
                  <h4 class="text-blue hd-email">Email</h4>
                  <div class="email-info">support@qgacha.com</div>
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
        <div class="footer-info pl-100 d-flex">
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
              <a class="social-item"><img style={{ width: "14px" }} src="./images/icons/youtube.svg"
                alt="" /></a>
              <a class="social-item"><img style={{ width: "14px" }} src="./images/icons/twitter.svg"
                alt="" /></a>
              <a class="social-item"><img style={{ width: "14px" }} src="./images/icons/tele.svg"
                alt="" /></a>
            </div>
          </div>
          <div class="mobile wrapp-link">
            <div class="row gx-0">
              <div class="col-5">
                <div class="list-link">
                  <h4>QGACHA</h4>
                  <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About QGacha</a></li>
                    <li><a href="">VIP club</a></li>
                    <li><a href="">Event</a></li>
                    <li><a href="">Affiliate</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-2">
                <div class="get-help">
                  <h4>GET HELP</h4>
                  <div class="link-faq"><a>FAQ</a></div>
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
                <li><a href="">Home</a></li>
                <li><a href="">About QGacha</a></li>
                <li><a href="">VIP club</a></li>
                <li><a href="">Event</a></li>
                <li><a href="">Affiliate</a></li>
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
          <div class="box box-link d-flex pc">
            <div class="list-link">
              <h4>GET HELP</h4>
              <ul>
                <li><a href="">FAQ</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div class="line-white top-copy"></div>
      <div class="text-center copy-right">Copyright QGacha ©2023 All Rights Reserved.</div>
      <div class="mobile menu-bottom" style={{ zIndex: 999999 }}>
        <div class="list-feature">
          <div class="menu-feature d-flex flex-column justify-content-center align-items-center w-49">
            <img src="./images/icons/gacha.png" alt="" />
            <div class="name-feature">Gacha</div>
          </div>
          <div
            class="menu-feature upgrade d-flex flex-column justify-content-center align-items-center">
            <img src="./images/icons/upgrademobile.svg" alt="" />
            <div class="name-feature">Upgrade</div>
          </div>
          <div
            class="menu-feature wallet d-flex flex-column justify-content-center align-items-center">
            <img src="./images/icons/icon-cardmobile.svg" alt="" />
            <div class="name-feature">Wallet</div>
          </div>
          <div
            class="menu-feature d-flex flex-column justify-content-center align-items-center  w-49">
            <img src="./images/icons/chat.svg" alt="" />
            <div class="name-feature">Chat</div>
          </div>
          <div
            class="menu-feature d-flex flex-column justify-content-center align-items-center  w-49" onClick={() => setIsOpenSideBar(!isOpenSideBar)}>
            <img src="./images/icons/menu-icon.svg" alt="" />
            <div class="name-feature">Menu</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
