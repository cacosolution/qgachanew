
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/flickity.css"
import "../../css/base.css"
import "../../css/home.css"
import "../../css/deposit.css"
import "../../css/balance.css"
import "../../css/responsive.css"
import "../../css/withdraw.css"
import Navbar from "../../component/Navbar/navbar";
import Sidebar from "../../component/Sidebar/sidebar";
import FooterWallet from "../Footer/footerWallet";
import BoxOverlay from "../../component/Box/BoxOverlay";
import Transaction from "../../component/Transaction/Transaction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";




const WalletMobi = () => {
    const {
        isOpenBalance,
        isOpenDeposit,
        isOpenWithdraw,
        isOpenTransaction,
    } = useSelector((state) => state.wallet);
    const dispatch = useDispatch();

    const handlerChangeBalance = () => {
        dispatch({ type: "SET_IS_OPEN_BALANCE" });
    }

    const handlerChangeDeposit = () => {
        dispatch({ type: "SET_IS_OPEN_DEPOSIT" });
    }

    const handlerChangeWithdraw = () => {
        dispatch({ type: "SET_IS_OPEN_WITHDRAW" });
    }
    const handlerChangeTransaction = () => {
        dispatch({ type: "SET_IS_OPEN_TRANSACTION" });
    }


    return (
        <div className="container-wrapper openmobi">
            {/* <Navbar /> */}
            <main>
                <Sidebar />
                <div className="main-deposit">
                    <div className="deposit-content">
                        <button className="btn-wallet text-15">{isOpenBalance ? ("Wallet") : isOpenDeposit ? ("Deposit") : isOpenTransaction ? ("Transaction") : isOpenWithdraw && ("Withdraw")}
                            <Link to="/">
                                <img className="mobile"
                                    src="./images/icons/deposit/icon-exit.svg" alt="" />
                            </Link>
                        </button>
                        <div className="feature-content d-flex" style={{ width: "470px", margin: "auto" }}>
                            <div>
                                <div className="list-feature hide-pc">
                                    <ul>

                                        <li className="feature-item d-flex align-items-center " onClick={handlerChangeBalance}>
                                            <img src="./images/icons/deposit/wallet.svg" alt="" className="feature-icon" />
                                            <h4 className="feature-title text-15">Balance</h4>
                                        </li>
                                        <li className="feature-item d-flex align-items-center" onClick={handlerChangeDeposit}>
                                            <img src="./images/icons/deposit/deposit.svg" alt="" className="feature-icon" />
                                            <h4 className="feature-title text-15">Deposit</h4>
                                        </li>
                                        <li className="feature-item d-flex align-items-center" onClick={handlerChangeWithdraw}>

                                            <img src="./images/icons/deposit/withdraw.svg" alt="" className="feature-icon" />
                                            <h4 className="feature-title text-15">Withdraw</h4>
                                        </li>
                                        <li className="feature-item d-flex align-items-center">
                                            <img src="./images/icons/deposit/buy.svg" alt="" className="feature-icon" />
                                            <h4 className="feature-title text-15">Buy Crypto <span>(Coming Soon)</span></h4>
                                        </li>
                                        <li className="feature-item d-flex align-items-center">
                                            <img src="./images/icons/deposit/nft.svg" alt="" className="feature-icon" />
                                            <h4 className="feature-title text-15">NFTs <span>(Coming Soon)</span></h4>
                                        </li>

                                        <li className="feature-item d-flex align-items-center" onClick={handlerChangeTransaction}>
                                            <img src="./images/icons/deposit/transaction.svg" alt="" className="feature-icon" />
                                            <h4 className="feature-title text-15">Transaction</h4>
                                        </li>


                                    </ul>

                                </div>
                            </div>

                        </div>
                        <div className="feature-content  d-flex">
                            <div>
                                <div className="list-feature hide-mobi">
                                    <ul>

                                        <li className="feature-item d-flex align-items-center " onClick={handlerChangeBalance}>
                                            <img src="./images/icons/deposit/wallet.svg" alt="" className="feature-icon" />
                                            <h4 className="feature-title text-15">Balance</h4>
                                        </li>
                                        <li className="feature-item d-flex align-items-center" onClick={handlerChangeDeposit}>
                                            <img src="./images/icons/deposit/deposit.svg" alt="" className="feature-icon" />
                                            <h4 className="feature-title text-15">Deposit</h4>
                                        </li>
                                        <li className="feature-item d-flex align-items-center" onClick={handlerChangeWithdraw}>

                                            <img src="./images/icons/deposit/withdraw.svg" alt="" className="feature-icon" />
                                            <h4 className="feature-title text-15">Withdraw</h4>
                                        </li>
                                        <li className="feature-item d-flex align-items-center">
                                            <img src="./images/icons/deposit/buy.svg" alt="" className="feature-icon" />
                                            <h4 className="feature-title text-15">Buy Crypto <span>(Coming Soon)</span></h4>
                                        </li>
                                        <li className="feature-item d-flex align-items-center">
                                            <img src="./images/icons/deposit/nft.svg" alt="" className="feature-icon" />
                                            <h4 className="feature-title text-15">NFTs <span>(Coming Soon)</span></h4>
                                        </li>

                                        <li className="feature-item d-flex align-items-center" onClick={handlerChangeTransaction}>
                                            <img src="./images/icons/deposit/transaction.svg" alt="" className="feature-icon" />
                                            <h4 className="feature-title text-15">Transaction</h4>
                                        </li>


                                    </ul>

                                </div>
                            </div>

                            {isOpenBalance ? (
                                <div className="feature-detail">
                                    <div className="header-balance d-flex justify-content-between align-items-center pb-4">
                                        <div className="total d-flex align-items-center">
                                            <img src="./images/icons/gold.svg" alt="" />
                                            Total Balance
                                        </div>
                                        <div className="total-value">$ 0.000000</div>
                                    </div>
                                    <h3 className="mt-4">Fiat Currency</h3>
                                    <div className="currency-show d-flex align-items-center">
                                        <img src="./images/icons/deposit/usdt.svg" alt="" />
                                        <div className="text-cur">USDT</div>
                                    </div>
                                    <h3 className="mt-4">Crypto Currency</h3>
                                    <div className="currency-show d-flex align-items-center">
                                        <img src="./images/icons/deposit/usdt.svg" alt="" />
                                        <div className="text-cur">USDT</div>
                                    </div>

                                    <div className="currency-show d-flex align-items-center">
                                        <img src="./images/icons/qgc-coin.png" alt="" />
                                        <div className="text-cur d-flex justify-content-between upcomming">QGC
                                            <span>(Upcoming)</span>
                                        </div>
                                    </div>

                                </div>
                            ) : isOpenDeposit ? (
                                <div className="feature-detail">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="crypto-tab" data-toggle="tab"
                                                data-target="#crypto" type="button" role="tab" aria-controls="crypto"
                                                aria-selected="true">Crypto</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="fiat-tab" data-toggle="tab" data-target="#fiat"
                                                type="button" role="tab" aria-controls="fiat"
                                                aria-selected="false">Fiat (coming soon)</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="crypto" role="tabpanel"
                                            aria-labelledby="crypto-tab">
                                            <h5 className="text-15 mt-3">Deposit Currency</h5>
                                            <div className="list-currency mt-1 d-flex">
                                                <button className="currency d-flex align-items-center">
                                                    <img src="./images/icons/deposit/usdt.svg" alt="" />
                                                    <div className="text-cur">USDT</div>
                                                </button>
                                                <button className="currency d-flex align-items-center">
                                                    <img src="./images/icons/qgc-coin.png" alt="" />
                                                    <div className="text-cur">QGC</div>
                                                </button>
                                            </div>
                                            <div className="currency-show d-flex align-items-center">
                                                <img src="./images/icons/deposit/usdt.svg" alt="" />
                                                <div className="text-cur">USDT</div>
                                            </div>

                                            <h4 className="text-15 mt-4">Choose Network</h4>
                                            <div className="mt-3 d-flex justify-content-between select-network align-items-center">
                                                <select className="text-15">
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
                                            <h4 className="text-15 mt-4">Minimum of 10.00 USDT deposit</h4>
                                            <div
                                                className="d-flex flex-column flex-sm-row align-items-center justify-content-between info-address mt-3">
                                                <div className="qr d-flex justify-content-center align-items-center">
                                                    Mã QR
                                                </div>
                                                <div className="address-code">
                                                    <h5 className="text-15">Deposit Address</h5>
                                                    <div
                                                        className="d-flex align-items-center justify-content-between address-wrapper mt-1">
                                                        <p className="m-0">mã ví...</p>
                                                        <button className="text-15">Copy</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="notice mt-3">
                                                <p className="text-15"><strong>NOTICE:</strong> Send only USDT to this deposit
                                                    address. Coins will be
                                                    deposited automatically after 6 network confirmations.
                                                    Smart contract addresses are not supported(Contact us).</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="fiat" role="tabpanel" aria-labelledby="fiat-tab">fiat
                                        </div>
                                    </div>
                                </div>
                            ) : isOpenWithdraw ? (
                                <div className="feature-detail">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="crypto-tab" data-toggle="tab"
                                                data-target="#crypto" type="button" role="tab" aria-controls="crypto"
                                                aria-selected="true">Crypto</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="fiat-tab" data-toggle="tab" data-target="#fiat"
                                                type="button" role="tab" aria-controls="fiat"
                                                aria-selected="false">Fiat (coming soon)</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="crypto" role="tabpanel"
                                            aria-labelledby="crypto-tab">
                                            <h5 className="text-15 mt-3">Withdraw Currency</h5>
                                            <div className="currency-show d-flex align-items-center balance">
                                                <img src="./images/icons/deposit/usdt.svg" alt="" />
                                                <div className="text-cur">USDT</div>
                                                <div className="balance-detail flex-grow-1 text-end">
                                                    <span>Blance <strong className="strong-withdraw">0,00</strong></span>
                                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                                            fill="white" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <h4 className="text-15 mt-4">Choose Network</h4>
                                            <div className="mt-3 d-flex justify-content-between select-network align-items-center">
                                                <select className="text-15">
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
                                            <h4 className="text-15 mt-4">Withdrawal Address</h4>
                                            <div className="currency-show">
                                                <p>Fill in carefully according to the specific currency</p>
                                            </div>
                                            <div style={{ height: "20px" }}
                                                className="d-flex justify-content-between align-items-center mt-3">
                                                <h4 className="text-15">Withdraw amount</h4>
                                                <span>Min: 109.622844</span>
                                            </div>
                                            <div
                                                className="currency-show show-list d-flex align-items-center justify-content-between">
                                                <span>0.0000</span>
                                                <div className="list-amount d-flex align-items-center">
                                                    <div className="amount-item text-center">
                                                        Min
                                                    </div>
                                                    <div className="amount-item text-center">
                                                        25%
                                                    </div>
                                                    <div className="amount-item text-center">
                                                        50%
                                                    </div>
                                                    <div className="amount-item text-center">
                                                        Max
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="currency-show value-withdraw mt-3 px-3 pt-2">
                                                <div className="value-item py-2 d-flex justify-content-between align-items-center">
                                                    <h5>Withdraw amount:</h5>
                                                    <span className="value">0.00000000 USDT</span>
                                                </div>
                                                <div className="value-item py-2 d-flex justify-content-between align-items-center">
                                                    <h5>Fee:</h5>
                                                    <span className="value">0.00000 USDT</span>
                                                </div>
                                                <div className="value-item py-2 d-flex justify-content-between align-items-center">
                                                    <h5>Total withdrawal amount:</h5>
                                                    <span className="value">0.00000 USDT</span>
                                                </div>
                                            </div>

                                            <div className="notice mt-3">
                                                <p className="text-15"><strong>NOTICE:</strong> Send only USDT to this deposit
                                                    address. Coins will be
                                                    deposited automatically after 6 network confirmations.
                                                    Smart contract addresses are not supported(Contact us).</p>
                                            </div>

                                            <div className="text-center confirm-wrap">
                                                <button id="confirm-withdraw" className="btn__purple-confirm">Confirm</button>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="fiat" role="tabpanel" aria-labelledby="fiat-tab">fiat
                                        </div>
                                    </div>
                                </div>
                            ) : isOpenTransaction && (
                                <Transaction />

                            )}



                        </div>


                    </div>

                </div>
                <BoxOverlay />



            </main>
            <div >
                <FooterWallet />
                {/* <div>alo</div> */}
            </div>

        </div>
    );
}

export default WalletMobi;