import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/buy5ticket.css";
import "../css/gift-jackpot.css";
import "../css/responsive.css";



import Navbar from "../component/Navbar/navbar";
import Sidebar from "../component/Sidebar/sidebar";
import Footer from "../component/Footer/footer";
import BoxOverlay from "../component/Box/BoxOverlay";

const Buy5ticket = () => {
    return (
        <div className="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div className="main-home">
                    <div className="buy-five-ticket">
                        <div className="luckynumber-header">
                            <span className="header-text">Buy four numbers Tickets</span>
                            <button className="btn__exit">
                                <img
                                    src="./images/icons/deposit/icon-exit.svg"
                                    alt="exit button"
                                />
                            </button>
                        </div>
                        <div className="luckynumber-form">
                            <form action="" className="form">
                                <div className="form--wrapper">
                                    <div className="luckynumber-form-header--wraper luckynumber-form-item">
                                        <div className=" luckynumber-form-header-content">
                                            <span className="luckynumber-form-input-header-label">
                                                Numbers Of Ticket
                                            </span>
                                            <p className="luckynumber-form-input-header-desc">
                                                <span className="luckynumber-form-input-header-desc-quantity">
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
                                        <div className=" luckynumber-form-item-section-wrapper">
                                            <div className="luckynumber-form-item-input-section">
                                                <button className="luckynumber-form-item-input-btn luckynumber-form-item-input--sub">
                                                    -
                                                </button>
                                                <span className="luckynumber-form-item-input-quantity">
                                                    5
                                                </span>
                                                <button className="luckynumber-form-item-input-btn luckynumber-form-item-input--add">
                                                    +
                                                </button>
                                            </div>
                                            <div className="luckynumber-form-item-input-suggestion-btn--wrapper">
                                                <div className="luckynumber-form-item-input-clear-btn--wrapper">
                                                    <a className="luckynumber-form-item-input-clear-btn">
                                                        CLEAR
                                                    </a>
                                                </div>
                                                <div className="luckynumber-form-item-input-suggestion-btn">
                                                    <button className="luckynumber-form-suggestion-btn">
                                                        20
                                                    </button>
                                                    <button className="luckynumber-form-suggestion-btn">
                                                        50
                                                    </button>
                                                    <button className="luckynumber-form-suggestion-btn">
                                                        100
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="luckynumber-form-submit-container luckynumber-form-item">
                                        <div className="luckynumber-form-submit-payment">
                                            <div className="luckynumber-form-payment">
                                                <span className="luckynumber-form-item-label">
                                                    Pay with
                                                </span>
                                                <div className="luckynumber-form-item-payment--wrapper">
                                                    <div className="luckynumber-form-item-payment--currency">
                                                        USDT
                                                    </div>
                                                    <div className="luckynumber-form-item-payment--balance">
                                                        <span className="luckynumber-form-item-payment-text">
                                                            Balance
                                                        </span>
                                                        <p className="luckynumber-form-item-payment-amount--wrapper">
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
                                            <div className="luckynumber-form-item-total-wrapper">
                                                <div className="luckynumber-form-total-header-section">
                                                    <p className="luckynumber-form-total-header-item luckynumber-form-total-header-item--left">
                                                        <span
                                                            id="luckynumber-form-total-quantity--left"
                                                            className="mr-1"
                                                        >
                                                            5
                                                        </span>
                                                        <span>Tickets</span>
                                                    </p>
                                                    <p className="luckynumber-form-total-header-item luckynumber-form-total-header-item--right">
                                                        <span className="while-text mr-1">1</span>
                                                        <span className="while-text mr-1">Tickets</span>
                                                        <span className="normal-text mr-1">x</span>
                                                        <span id="luckynumber-form-total-quantity-left">
                                                            5
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="luckynumber-form-total-section">
                                                    <p className="luckynumber-form-total-desc">total</p>
                                                    <p className="luckynumber-form-total-amount">
                                                        <span id="luckynumber-form-total-amount">25</span>
                                                        <span id="luckynumber-form-total-currency">
                                                            USDT
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="luckynumber-form-submit-btn-section">
                                                    <button className="luckynumber-form-submit-btn">
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

                    <div className="gift-wrapper mt-4">
                        <div className="gift-jackpot">
                            <div className="luckynumber-header">
                                <span className="header-text">gift jackpot Tickets</span>
                                <button className="btn__exit">
                                    <img
                                        src="./images/icons/deposit/icon-exit.svg"
                                        alt="exit button"
                                    />
                                </button>
                            </div>
                            <div className="luckynumber-form">
                                <form action="">
                                    <div className="luckynumber-form-item">
                                        <div className="luckynumber-form-item-label">
                                            <span className="luckynumber-form-item-label-text">
                                                Numbers Of Ticket
                                            </span>
                                        </div>
                                        <div className="luckynumber-form-item-input--wapper">
                                            <div className="luckynumber-form-item-input">
                                                <button className="luckynumber-form-item-input-btn luckynumber-form-item-input-btn--sub">
                                                    -
                                                </button>
                                                <span id="luckynumber-form-item-input-ticket-quantity">
                                                    1
                                                </span>
                                                <button className="luckynumber-form-item-input-btn luckynumber-form-item-input-btn--add">
                                                    +
                                                </button>
                                            </div>
                                            <div className=" luckynumber-form-item-input luckynumber-form-item-suggestion--quantity">
                                                <button className="luckynumber-form-item-suggestion--quantity-btn">
                                                    20
                                                </button>
                                                <button className="luckynumber-form-item-suggestion--quantity-btn">
                                                    50
                                                </button>
                                                <button className="luckynumber-form-item-suggestion--quantity-btn">
                                                    100
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="luckynumber-form-item">
                                        <div className="luckynumber-form-item-label">
                                            <span className="luckynumber-form-item-label-text">
                                                Message With Gift (optional)
                                            </span>
                                        </div>
                                        <div className="luckynumber-form-item-input--wapper">
                                            <input type="text" placeholder="Try your luck, man!" />
                                        </div>
                                    </div>
                                    <div className="separate-line"></div>
                                    <div className="luckynumber-form-item">
                                        <div className="luckynumber-form-item-label">
                                            <span className="luckynumber-form-item-label-text">
                                                Pay with
                                            </span>
                                        </div>
                                        <div className="luckynumber-form-item-input--wapper luckynumber-form-item-input--payment-method">
                                            <span className="luckynumber-form-item-input--payment-method-label">
                                                USDT
                                            </span>
                                            <div className="luckynumber-form-item-input--payment-method-balance--wrapper">
                                                <div className="luckynumber-form-item-input--payment-method-balance">
                                                    <span className="luckynumber-form-item-input--payment-method-balance-label">
                                                        Balance
                                                    </span>
                                                    <p className="luckynumber-form-item-input--payment-method-balance-amount">
                                                        <span className="luckynumber-form-item-input--payment-method--curency">
                                                            đ
                                                        </span>
                                                        <span id="payment-method-amount">0000</span>
                                                    </p>
                                                </div>
                                                <button className="luckynumber-form-item-input--payment-method-balance-btn"></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="luckynumber-form-total--wrapper">
                                        <div className="luckynumber-form-total--overview--wrapper">
                                            <p className="luckynumber-form-total--overview-quantity--wrapper">
                                                <span className="luckynumber-form-total--overview luckynumber-form-total--overview-quantity">
                                                    5
                                                </span>
                                                <span className="luckynumber-form-total--overview luckynumber-form-total--overview-label">
                                                    tickets
                                                </span>
                                            </p>
                                            <p className="luckynumber-form-item-input--payment-method-balance-amount">
                                                <span className="luckynumber-form-item-input--payment-method--curency">
                                                    đ
                                                </span>
                                                <span id="payment-method-total">0000</span>
                                                <span className="x-text">x</span>
                                                <span className="luckynumber-form-item-ticket-quantity">
                                                    5
                                                </span>
                                            </p>
                                        </div>
                                        <div className="luckynumber-form-total">
                                            <span className="luckynumber-form-total-text">Total</span>
                                            <p className="luckynumber-form-item-input--payment-method-balance-amount">
                                                <span className="luckynumber-form-item-input--payment-method--curency">
                                                    đ
                                                </span>
                                                <span id="total">0000</span>
                                            </p>
                                        </div>
                                        <div className="luckynumber-form-total-currency--wrapper">
                                            <span className="luckynumber-form-total-currency-amount">
                                                0000000
                                            </span>
                                            <span className="luckynumber-form-total-currency">usdt</span>
                                        </div>
                                    </div>
                                    <div className="luckynumber-form-submit-btn--wrapper">
                                        <button className="luckynumber-form-submit-btn" type="submit">
                                            buy ticket
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Footer />

                </div>
                <BoxOverlay />
            </main>
        </div>
    );
};

export default Buy5ticket;
