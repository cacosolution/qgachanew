import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/buy5ticket.css";
import "../css/gift-jackpot.css";

import Navbar from "../component/Navbar/navbar";
import Sidebar from "../component/Sidebar/sidebar";
import Footer from "../component/Footer/footer";

const buy5ticket = () => {
  return (
    <div class="container-wrapper">
      <Navbar />
      <main>
        <Sidebar />
        <div className="main-home">
          <div class="buy-five-ticket">
            <div class="luckynumber-header">
              <span class="header-text">Buy four numbers Tickets</span>
              <button class="btn__exit">
                <img
                  src="./images/icons/deposit/icon-exit.svg"
                  alt="exit button"
                />
              </button>
            </div>
            <div class="luckynumber-form">
              <form action="" class="form">
                <div class="form--wrapper">
                  <div class="luckynumber-form-header--wraper luckynumber-form-item">
                    <div class=" luckynumber-form-header-content">
                      <span class="luckynumber-form-input-header-label">
                        Numbers Of Ticket
                      </span>
                      <p class="luckynumber-form-input-header-desc">
                        <span class="luckynumber-form-input-header-desc-quantity">
                          1
                        </span>
                        <span>Ticket =</span>
                        <span id="luckynumber-form-input-header-desc-cost-quantity">
                          2
                        </span>
                        <span id="luckynumber-form-input-header-desc-cost-currency">
                          USDT
                        </span>
                      </p>
                    </div>
                    <div class=" luckynumber-form-item-section-wrapper">
                      <div class="luckynumber-form-item-input-section">
                        <button class="luckynumber-form-item-input-btn luckynumber-form-item-input--sub">
                          -
                        </button>
                        <span class="luckynumber-form-item-input-quantity">
                          5
                        </span>
                        <button class="luckynumber-form-item-input-btn luckynumber-form-item-input--add">
                          +
                        </button>
                      </div>
                      <div class="luckynumber-form-item-input-suggestion-btn--wrapper">
                        <div class="luckynumber-form-item-input-clear-btn--wrapper">
                          <a class="luckynumber-form-item-input-clear-btn">
                            CLEAR
                          </a>
                        </div>
                        <div class="luckynumber-form-item-input-suggestion-btn">
                          <button class="luckynumber-form-suggestion-btn">
                            20
                          </button>
                          <button class="luckynumber-form-suggestion-btn">
                            50
                          </button>
                          <button class="luckynumber-form-suggestion-btn">
                            100
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="luckynumber-form-submit-container luckynumber-form-item">
                    <div class="luckynumber-form-submit-payment">
                      <div class="luckynumber-form-payment">
                        <span class="luckynumber-form-item-label">
                          Pay with
                        </span>
                        <div class="luckynumber-form-item-payment--wrapper">
                          <div class="luckynumber-form-item-payment--currency">
                            USDT
                          </div>
                          <div class="luckynumber-form-item-payment--balance">
                            <span class="luckynumber-form-item-payment-text">
                              Balance
                            </span>
                            <p class="luckynumber-form-item-payment-amount--wrapper">
                              <span id="luckynumber-form-item-payment--currency">
                                đ
                              </span>
                              <span id="luckynumber-form-item-payment--amount">
                                0.00
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="luckynumber-form-item-total-wrapper">
                        <div class="luckynumber-form-total-header-section">
                          <p class="luckynumber-form-total-header-item luckynumber-form-total-header-item--left">
                            <span
                              id="luckynumber-form-total-quantity--left"
                              class="mr-1"
                            >
                              5
                            </span>
                            <span>Tickets</span>
                          </p>
                          <p class="luckynumber-form-total-header-item luckynumber-form-total-header-item--right">
                            <span class="while-text mr-1">1</span>
                            <span class="while-text mr-1">Tickets</span>
                            <span class="normal-text mr-1">x</span>
                            <span id="luckynumber-form-total-quantity-left">
                              5
                            </span>
                          </p>
                        </div>
                        <div class="luckynumber-form-total-section">
                          <p class="luckynumber-form-total-desc">total</p>
                          <p class="luckynumber-form-total-amount">
                            <span id="luckynumber-form-total-amount">25</span>
                            <span id="luckynumber-form-total-currency">
                              USDT
                            </span>
                          </p>
                        </div>
                        <div class="luckynumber-form-submit-btn-section">
                          <button class="luckynumber-form-submit-btn">
                            BUY TICKET
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="gift-wrapper mt-4">
            <div class="gift-jackpot">
              <div class="luckynumber-header">
                <span class="header-text">gift jackpot Tickets</span>
                <button class="btn__exit">
                  <img
                    src="./images/icons/deposit/icon-exit.svg"
                    alt="exit button"
                  />
                </button>
              </div>
              <div class="luckynumber-form">
                <form action="">
                  <div class="luckynumber-form-item">
                    <div class="luckynumber-form-item-label">
                      <span class="luckynumber-form-item-label-text">
                        Numbers Of Ticket
                      </span>
                    </div>
                    <div class="luckynumber-form-item-input--wapper">
                      <div class="luckynumber-form-item-input">
                        <button class="luckynumber-form-item-input-btn luckynumber-form-item-input-btn--sub">
                          -
                        </button>
                        <span id="luckynumber-form-item-input-ticket-quantity">
                          1
                        </span>
                        <button class="luckynumber-form-item-input-btn luckynumber-form-item-input-btn--add">
                          +
                        </button>
                      </div>
                      <div class=" luckynumber-form-item-input luckynumber-form-item-suggestion--quantity">
                        <button class="luckynumber-form-item-suggestion--quantity-btn">
                          20
                        </button>
                        <button class="luckynumber-form-item-suggestion--quantity-btn">
                          50
                        </button>
                        <button class="luckynumber-form-item-suggestion--quantity-btn">
                          100
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="luckynumber-form-item">
                    <div class="luckynumber-form-item-label">
                      <span class="luckynumber-form-item-label-text">
                        Message With Gift (optional)
                      </span>
                    </div>
                    <div class="luckynumber-form-item-input--wapper">
                      <input type="text" placeholder="Try your luck, man!" />
                    </div>
                  </div>
                  <div class="separate-line"></div>
                  <div class="luckynumber-form-item">
                    <div class="luckynumber-form-item-label">
                      <span class="luckynumber-form-item-label-text">
                        Pay with
                      </span>
                    </div>
                    <div class="luckynumber-form-item-input--wapper luckynumber-form-item-input--payment-method">
                      <span class="luckynumber-form-item-input--payment-method-label">
                        USDT
                      </span>
                      <div class="luckynumber-form-item-input--payment-method-balance--wrapper">
                        <div class="luckynumber-form-item-input--payment-method-balance">
                          <span class="luckynumber-form-item-input--payment-method-balance-label">
                            Balance
                          </span>
                          <p class="luckynumber-form-item-input--payment-method-balance-amount">
                            <span class="luckynumber-form-item-input--payment-method--curency">
                              đ
                            </span>
                            <span id="payment-method-amount">0000</span>
                          </p>
                        </div>
                        <button class="luckynumber-form-item-input--payment-method-balance-btn"></button>
                      </div>
                    </div>
                  </div>
                  <div class="luckynumber-form-total--wrapper">
                    <div class="luckynumber-form-total--overview--wrapper">
                      <p class="luckynumber-form-total--overview-quantity--wrapper">
                        <span class="luckynumber-form-total--overview luckynumber-form-total--overview-quantity">
                          5
                        </span>
                        <span class="luckynumber-form-total--overview luckynumber-form-total--overview-label">
                          tickets
                        </span>
                      </p>
                      <p class="luckynumber-form-item-input--payment-method-balance-amount">
                        <span class="luckynumber-form-item-input--payment-method--curency">
                          đ
                        </span>
                        <span id="payment-method-total">0000</span>
                        <span class="x-text">x</span>
                        <span class="luckynumber-form-item-ticket-quantity">
                          5
                        </span>
                      </p>
                    </div>
                    <div class="luckynumber-form-total">
                      <span class="luckynumber-form-total-text">Total</span>
                      <p class="luckynumber-form-item-input--payment-method-balance-amount">
                        <span class="luckynumber-form-item-input--payment-method--curency">
                          đ
                        </span>
                        <span id="total">0000</span>
                      </p>
                    </div>
                    <div class="luckynumber-form-total-currency--wrapper">
                      <span class="luckynumber-form-total-currency-amount">
                        0000000
                      </span>
                      <span class="luckynumber-form-total-currency">usdt</span>
                    </div>
                  </div>
                  <div class="luckynumber-form-submit-btn--wrapper">
                    <button class="luckynumber-form-submit-btn" type="submit">
                      buy ticket
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
};

export default buy5ticket;
