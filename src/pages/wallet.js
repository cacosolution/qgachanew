
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css"
import "../css/base.css"
import "../css/home.css"
import "../css/deposit.css"
import "../css/balance.css"
import "../css/responsive.css"
import Navbar from "../component/Navbar/navbar";
import Sidebar from "../component/Sidebar/sidebar";
import Footer from "../component/Footer/footer";
import ListFeature from "../component/SectionList/listFeature";
import BoxOverlay from "../component/Box/BoxOverlay";
import { Link } from "react-router-dom";



const Wallet = () => {
    const [isOpenBalance, SetIsOpenBalance] = useState(true)
    const [isOpenDeposit, SetIsOpenDeposit] = useState(false)
    const [isOpenWithdraw, SetIsOpenWithdraw] = useState(false)
    const [isOpenTransaction, SetIsOpenTransaction] = useState(false)

    const handlerChangeBalance = () => {
        SetIsOpenBalance(true)
        SetIsOpenDeposit(false)
        SetIsOpenWithdraw(false)
        SetIsOpenTransaction(false)
    }

    const handlerChangeDeposit = () => {
        SetIsOpenDeposit(true)
        SetIsOpenBalance(false)
        SetIsOpenWithdraw(false)
        SetIsOpenTransaction(false)

    }

    const handlerChangeWithdraw = () => {
        SetIsOpenWithdraw(true)
        SetIsOpenBalance(false)
        SetIsOpenTransaction(false)
        SetIsOpenDeposit(false)

    }
    const handlerChangeTransaction = () => {
        SetIsOpenTransaction(true)
        SetIsOpenBalance(false)
        SetIsOpenWithdraw(false)

        SetIsOpenDeposit(false)
    }
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
                            <div>
                                <div class="list-feature">
                                    <ul>

                                        <li class="feature-item d-flex align-items-center " onClick={handlerChangeBalance}>
                                            <img src="./images/icons/deposit/wallet.svg" alt="" class="feature-icon" />
                                            <h4 class="feature-title text-15">Balance</h4>
                                        </li>
                                        <li class="feature-item d-flex align-items-center" onClick={handlerChangeDeposit}>
                                            <img src="./images/icons/deposit/deposit.svg" alt="" class="feature-icon" />
                                            <h4 class="feature-title text-15">Deposit</h4>
                                        </li>
                                        <li class="feature-item d-flex align-items-center" onClick={handlerChangeWithdraw}>

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

                                        <li class="feature-item d-flex align-items-center" onClick={handlerChangeTransaction}>
                                            <img src="./images/icons/deposit/transaction.svg" alt="" class="feature-icon" />
                                            <h4 class="feature-title text-15">Transaction</h4>
                                        </li>


                                    </ul>

                                </div>
                            </div>

                            {isOpenBalance ? (
                                <div class="feature-detail">
                                    <div class="header-balance d-flex justify-content-between align-items-center pb-4">
                                        <div class="total d-flex align-items-center">
                                            <img src="./images/icons/gold.svg" alt="" />
                                            Total Balance
                                        </div>
                                        <div class="total-value">$ 0.000000</div>
                                    </div>
                                    <h3 class="mt-4">Fiat Currency</h3>
                                    <div class="currency-show d-flex align-items-center">
                                        <img src="./images/icons/deposit/usdt.svg" alt="" />
                                        <div class="text-cur">USDT</div>
                                    </div>
                                    <h3 class="mt-4">Crypto Currency</h3>
                                    <div class="currency-show d-flex align-items-center">
                                        <img src="./images/icons/deposit/usdt.svg" alt="" />
                                        <div class="text-cur">USDT</div>
                                    </div>

                                    <div class="currency-show d-flex align-items-center">
                                        <img src="./images/icons/qgc-coin.png" alt="" />
                                        <div class="text-cur d-flex justify-content-between upcomming">QGC
                                            <span>(Upcoming)</span>
                                        </div>
                                    </div>

                                </div>
                            ) : (
                                <></>
                            )}



                        </div>


                    </div>

                </div>
                <BoxOverlay />



            </main>
            <Footer />

        </div>
    );
}

export default Wallet;