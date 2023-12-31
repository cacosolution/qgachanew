import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/giftTicket.css";
import "../css/responsive.css";
import "../css/transactionDetail.css";
import "../css/transactionTable.css";

import Navbar from "../component/Navbar/navbar";
import Sidebar from "../component/Sidebar/sidebar";
import Footer from "../component/Footer/footer";
import BoxOverlay from "../component/Box/BoxOverlay";
const ticketform = () => {
  return (
    <div className="container-wrapper">
      <Navbar />
      <main>
        <Sidebar />
        <div className="main-home">
          <div className="main-content" style={{ width: "80%" }}>
            <section className="section-gift-ticket">
              <div className="gift-ticket-header">
                <p>Gift Ticket</p>
                <img src="./images/icons/deposit/icon-exit.svg" alt="close" />
              </div>

              <div className="gift-ticket-content">
                <div className="gift-ticket-title">
                  <img src="./images/gift.png" alt="gift" />
                  <h6>Successfully bought [N] lottery tickets!</h6>
                  <p>Share to your friends and they can choose lottery numbers themselves</p>
                </div>

                <div className="gift-ticket-code">
                  <div className="gift-ticket-code__title">
                    <p>Gift Link</p>
                    <p>Referral Code</p>
                  </div>
                  <div className="gift-ticket-code__content">
                    <div>
                      <p>Try your luck, man!</p>
                      <img src="./images/icons/deposit/icon-copy.svg" alt="copy" />
                    </div>
                    <div>
                      <p>Referral Code</p>
                      <img src="./images/icons/deposit/icon-copy.svg" alt="copy" />
                    </div>

                  </div>
                  <p>*This link is available for 24 hours from the time of generation. If the link is not
                    used within this time frame, the amount you paid will be refunded to your wallet.
                  </p>
                </div>

                <div className="gift-ticket-social">
                  <p>Or Share With</p>
                  <div className="d-flex">
                    <a href="#"><img src="./images/twitter--media-twitter-social.png"
                      alt="twitter" /></a>
                    <a className="ms-4" href="#"><img src="./images/telegramgift.svg" alt="telegram" /></a>
                  </div>
                </div>
              </div>
            </section>


            <section className="section-gift-ticket">
              <div className="gift-ticket-header">
                <p>Gift Ticket</p>
                <img src="./images/icons/deposit/icon-exit.svg" alt="close" />
              </div>

              <div className="gift-ticket-content">
                <div className="gift-ticket-received-title">
                  <img src="./images/gift.png" alt="gift" />
                  <h6>you’ve received</h6>
                  <p>free lottery tickets</p>

                  <span>x1</span>
                </div>

                <div className="gift-ticket-received-content">
                  <div className="gift-ticket-received-user">
                    <p className="d-flex align-items-center justify-content-center">
                      <span>From: </span> <img src="./images/icons/avatar-default.svg" />
                      <span>Name 1</span>
                    </p>

                    <p>“Try your luck, bro!”</p>
                  </div>

                  <p className="gift-ticket-received-expiryTime">tickets expire in: 00h:00m:00s</p>
                  <button className="gift-ticket-received-button">
                    claim tickets
                  </button>
                </div>
              </div>
            </section>


            <section className="transaction-detail">
              <div className="gift-ticket-header">
                <p>transaction detail</p>
                <img src="./images/icons/deposit/icon-exit.svg" alt="close" />
              </div>

              <div className="transaction-detail-content">
                <div className="transaction-detail-currency">
                  <img src="./images/Rectangle.png" alt="Rectangle" />
                  <div>
                    <p>+ 0.000000</p>
                    <span>uSDT</span>
                  </div>
                </div>

                <div className="transaction-detail-info">
                  <div>
                    <p>Status</p>
                    <span id="status">Success</span>
                  </div>
                  <div>
                    <p>Txid</p>
                    <span className="d-flex">abc123456789 <img className="ms-1"
                      src="./images/icons/deposit/icon-copy.svg" alt="copy" /></span>

                  </div>
                  <div>
                    <p>Order ID</p>
                    <span className="d-flex">ABC7878y7990890 <img className="ms-1"
                      src="./images/icons/deposit/icon-copy.svg" alt="copy" /></span>

                  </div>
                  <div>
                    <p>Time</p>
                    <span>03/07/2023</span>
                  </div>
                </div>
              </div>
            </section>


            <section className="transaction-table">
              <table>
                <thead>

                  <tr>
                    <th>Type</th>
                    <th>Merchant ID</th>
                    <th>Amount</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td>Deposit</td>
                    <td></td>
                    <td>+₫ 0.0000000</td>
                    <td>03/07/2023</td>
                    <td>Success</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="4"></td>
                    <td colspan="1">
                      <div>

                        <p>Total</p>
                        <p>1</p>
                        <div> <button className="d-flex align-items-center justify-content-center"><img
                          src="./images/icons/pre.png" alt="previous" /></button>
                          <button className="d-flex align-items-center justify-content-center"><img
                            src="./images/icons/next.png" alt="next" /></button>
                        </div>
                      </div>


                    </td>


                  </tr>
                </tfoot>
              </table>


            </section>
          </div>
          <Footer />
        </div>

      </main>
    </div>
  );
};

export default ticketform;
