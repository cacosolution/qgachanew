import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/faq.css";
import "../css/responsive.css";
import Layout from "../layout";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <Layout>
      <div className="main-faq">
        <div className="main-content">
          <button className="btn-faq">FAQ</button>
          <section className="section-faq">
            <h2>Frequently asked questions</h2>
            <div className="faq-box">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link d-flex justify-content-between"
                      data-toggle="collapse"
                      data-target="#meaning"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      <div className="btn-title">
                        <span className="no-faq">01</span> What is Gacha game?
                      </div>
                      <svg
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </h5>
                </div>
                <div
                  id="meaning"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    A gacha game operates by spending money to open gift boxes
                    and collect valuable items. The rarity and value of these
                    items depend on the player’s luck.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed d-flex justify-content-between"
                      data-toggle="collapse"
                      data-target="#competition"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <div className="btn-title">
                        <span className="no-faq">02</span> What are the different
                        genres of Gacha games?
                      </div>
                      <svg
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </h5>
                </div>
                <div
                  id="competition"
                  className="collapse"
                  aria-labelledby="headingTwo"
                >
                  <div className="card-body">
                    There are different genres of Gacha Games like: Complete
                    Gacha, Box Gacha, Re-roll Gacha, Upgrade Gacha, Volume
                    Gacha, Consecutive Gacha, Mystery Gacha, Sugoroku Gacha.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed d-flex justify-content-between"
                      data-toggle="collapse"
                      data-target="#ecosystem"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <div className="btn-title">
                        <span className="no-faq">03</span>What does the QGacha
                        ecosystem offer?
                      </div>
                      <svg
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </h5>
                </div>
                <div
                  id="ecosystem"
                  className="collapse"
                  aria-labelledby="headingThree"
                >
                  <div className="card-body">
                    The QGacha ecosystem offers a community-based platform
                    revolutionizing Gacha gaming through blockchain. It
                    provides an enhanced Gacha experience with NFT ownership,
                    supports game developers, and offers various Gacha game
                    variations. QGacha aims to become the world's largest
                    Gacha platform, fostering a global community of Gacha
                    enthusiasts.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed d-flex justify-content-between"
                      data-toggle="collapse"
                      data-target="#howtoDeposit"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <div className="btn-title">
                        <span className="no-faq">04</span>How to deposit?
                      </div>
                      <svg
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </h5>
                </div>
                <div
                  id="howtoDeposit"
                  className="collapse"
                  aria-labelledby="headingFour"
                >
                  <div className="card-body">
                    Deposit Instructions: <br />
                    <Link>Log into Your Account</Link>: Access your
                    cryptocurrency exchange or wallet account using your
                    credentials. <br />
                    Navigate to Deposit Section: Find and click on the
                    "Deposit" or "Add Funds" section within your account
                    dashboard. <br />
                    <Link>Select Cryptocurrency</Link>: Choose the specific
                    cryptocurrency you wish to deposit from the list provided.{" "}
                    <br />
                    Generate Deposit Address: Your exchange or wallet will
                    provide a unique address. This address is essential for
                    correctly receiving the cryptocurrency. <br />
                    <Link>Copy Deposit Address</Link>: Carefully copy the
                    provided deposit address. Make sure there are no typos or
                    errors. <br />
                    Initiate Transfer: In your external wallet, initiate a
                    transfer by sending the desired amount of cryptocurrency
                    to the deposit address you copied. <br />
                    <Link>Confirm Transaction</Link>: Once you've sent the
                    cryptocurrency, wait for network confirmations (the number
                    may vary depending on the cryptocurrency) to validate the
                    transaction. <br />
                    <Link>Check Deposit Status</Link>: Return to your
                    account dashboard and check the deposit history to see if
                    the transaction has been credited.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFive">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed d-flex justify-content-between"
                      data-toggle="collapse"
                      data-target="#howtoWithdraw"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <div className="btn-title">
                        <span className="no-faq">05</span>How to withdraw?
                      </div>
                      <svg
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </h5>
                </div>
                <div
                  id="howtoWithdraw"
                  className="collapse"
                  aria-labelledby="headingFive"
                >
                  <div className="card-body">
                    Withdrawal Instructions: <br />
                    <Link>Login to Your Account</Link>: Sign in to your
                    cryptocurrency exchange or wallet account. <br />
                    Navigate to Withdrawal Section: Locate and click on the
                    "Withdraw" or "Withdrawal" section within your account.{" "}
                    <br />
                    <Link>Select Cryptocurrency</Link>: Choose the
                    cryptocurrency you intend to withdraw from the list
                    available. <br />
                    <Link>Enter Withdrawal Address</Link>: Provide the
                    recipient's wallet address where you want to send the
                    cryptocurrency. Double-check for accuracy. <br />
                    Enter Amount: Specify the amount of cryptocurrency you
                    want to withdraw. Ensure you leave enough balance for
                    transaction fees. <br />
                    <Link>Review Fee</Link>: The platform might display the
                    withdrawal fee. Take note of this as it will be deducted
                    from your withdrawal amount. <br />
                    Confirm Withdrawal: Review all details vcarefully,
                    including the withdrawal address and amount. Confirm the
                    withdrawal request. <br />
                    <Link>Verify Email/2FA</Link>: Some platforms may
                    require email confirmation or two-factor authentication
                    (2FA) to ensure the security of the withdrawal. <br />
                    <Link>Wait for Processing</Link>: The withdrawal request
                    will be processed by the platform. The processing time may
                    vary depending on network congestion and platform
                    policies. <br />
                    <Link>Check Withdrawal Status</Link>: Monitor the
                    withdrawal history in your account to track the
                    transaction's progress. Once confirmed, you'll see the
                    transaction details.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </Layout>
  );
};

export default Faq;
