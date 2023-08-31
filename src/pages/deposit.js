import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/deposit.css";
import "../css/responsive.css";
import Navbar from "../component/Navbar/navbar";
import Sidebar from "../component/Sidebar/sidebar";
import Footer from "../component/Footer/footer";
import ListFeature from "../component/SectionList/listFeature";
import BoxOverlay from "../component/Box/BoxOverlay";

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
              <div>
                <ListFeature />

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
              <BoxOverlay />

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
