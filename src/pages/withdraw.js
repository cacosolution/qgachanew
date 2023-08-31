import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/deposit.css";
import "../css/withdraw.css";
import "../css/responsive.css";
import Navbar from "../component/Navbar/navbar";
import Sidebar from "../component/Sidebar/sidebar";
import Footer from "../component/Footer/footer";
import BoxOverlay from "../component/Box/BoxOverlay";

const withdraw = () => {
  return (
    <div class="container-wrapper">
      <Navbar />
      <main>
        <Sidebar />
        <div class="main-deposit">
          <div class="deposit-content">
            <button class="btn-wallet text-15">Wallet <img class="mobile"
              src="./images/icons/deposit/icon-exit.svg" alt="" /></button>
            <div class="feature-content d-flex">
              <div class="list-feature">
                <ul>
                  <li class="feature-item d-flex align-items-center">
                    <img src="./images/icons/deposit/wallet.svg" alt="" class="feature-icon" />
                    <h4 class="feature-title text-15">Balance</h4>
                  </li>
                  <li class="feature-item d-flex align-items-center">
                    <img src="./images/icons/deposit/deposit.svg" alt="" class="feature-icon" />
                    <h4 class="feature-title text-15">Deposit</h4>
                  </li>
                  <li class="feature-item d-flex align-items-center active">
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
                    <h5 class="text-15 mt-3">Withdraw Currency</h5>
                    <div class="currency-show d-flex align-items-center balance">
                      <img src="./images/icons/deposit/usdt.svg" alt="" />
                      <div class="text-cur">USDT</div>
                      <div class="balance-detail flex-grow-1 text-end">
                        <span>Blance <strong class="strong-withdraw">0,00</strong></span>
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                            fill="white" />
                        </svg>
                      </div>
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
                    <h4 class="text-15 mt-4">Withdrawal Address</h4>
                    <div class="currency-show">
                      <p>Fill in carefully according to the specific currency</p>
                    </div>
                    <div style={{ height: "20px" }}
                      class="d-flex justify-content-between align-items-center mt-3">
                      <h4 class="text-15">Withdraw amount</h4>
                      <span>Min: 109.622844</span>
                    </div>
                    <div
                      class="currency-show show-list d-flex align-items-center justify-content-between">
                      <span>0.0000</span>
                      <div class="list-amount d-flex align-items-center">
                        <div class="amount-item text-center">
                          Min
                        </div>
                        <div class="amount-item text-center">
                          25%
                        </div>
                        <div class="amount-item text-center">
                          50%
                        </div>
                        <div class="amount-item text-center">
                          Max
                        </div>
                      </div>
                    </div>

                    <div class="currency-show value-withdraw mt-3 px-3 pt-2">
                      <div class="value-item py-2 d-flex justify-content-between align-items-center">
                        <h5>Withdraw amount:</h5>
                        <span class="value">0.00000000 USDT</span>
                      </div>
                      <div class="value-item py-2 d-flex justify-content-between align-items-center">
                        <h5>Fee:</h5>
                        <span class="value">0.00000 USDT</span>
                      </div>
                      <div class="value-item py-2 d-flex justify-content-between align-items-center">
                        <h5>Total withdrawal amount:</h5>
                        <span class="value">0.00000 USDT</span>
                      </div>
                    </div>

                    <div class="notice mt-3">
                      <p class="text-15"><strong>NOTICE:</strong> Send only USDT to this deposit
                        address. Coins will be
                        deposited automatically after 6 network confirmations.
                        Smart contract addresses are not supported(Contact us).</p>
                    </div>

                    <div class="text-center confirm-wrap">
                      <button id="confirm-withdraw" class="btn__purple-confirm">Confirm</button>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="fiat" role="tabpanel" aria-labelledby="fiat-tab">fiat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="box-security" class="box-auth signin mt-5">
          <div class="box-header d-flex justify-content-between align-items-center">
            Security
            <button class="btn__exit-security">
              <img src="./images/icons/deposit/icon-exit.svg" alt="" />
            </button>
          </div>

          <form>
            <p>Please enter the 6-digit verification code sent to your email Or 6 Digit Authentication code
              The code is valid for 10
              minutes.</p>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="verification Code" />
              <span>Didn't Receive The Verification Code?</span>
            </div>
            <div class="form-group">
              <label for="verificationCode">Google Securrity 2FA</label>
              <input type="text" class="form-control" placeholder="6-Digit Authentication Code" />
            </div>

            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
        <BoxOverlay />
      </main>
      <Footer />

    </div>
  );
};

export default withdraw;
