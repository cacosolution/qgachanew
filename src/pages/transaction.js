
import Navbar from '../component/Navbar/navbar';
import Sidebar from '../component/Sidebar/sidebar';
import Footer from '../component/Footer/footer';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/deposit.css";
import "../css/transactionTable.css";
import "../css/responsive.css";
import BoxOverlay from '../component/Box/BoxOverlay';
const Transaction = () => {
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div class="main-deposit">
                    <div class="deposit-content">
                        <button class="btn-wallet btn-setting text-15">Wallet <img class="mobile"
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
                            <div class="customtran">
                                <div class="list-button">
                                    <button className='items'>
                                        Deposit
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                                fill="white" />
                                        </svg>
                                    </button >
                                    <button className='items'>
                                        All assets
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                                fill="white" />
                                        </svg>
                                    </button>
                                    <button className='items'>
                                        Past 60 days
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                                fill="white" />
                                        </svg>
                                    </button>
                                    <button className='items'>
                                        All assets
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                                fill="white" />
                                        </svg>
                                    </button>
                                </div>

                                <section class="transaction-table detail-trans">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    Type
                                                </th>
                                                <th>
                                                    Merchant ID
                                                </th>
                                                <th>
                                                    Amount
                                                </th>
                                                <th>
                                                    Time
                                                </th>
                                                <th class="text-end">
                                                    Status
                                                </th>
                                            </tr>

                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Deposit</td>
                                                <td></td>
                                                <td class="amount">+₫ 0.0000000</td>
                                                <td>03/07/2023</td>
                                                <td class="status text-end align-items-center">Success <svg width="8"
                                                    height="6" viewBox="0 0 8 6" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                                        fill="white" />
                                                </svg></td>
                                            </tr>
                                            <tr></tr>
                                            <tr></tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <div class="pagination">
                                                        <p>Total</p>
                                                        <p class="page">1</p>
                                                        <div>
                                                            <button
                                                                class="d-flex align-items-center justify-content-center"><img
                                                                    src="./images/icons/pre.png" alt="previous" /></button>
                                                            <button
                                                                class="d-flex align-items-center justify-content-center"><img
                                                                    src="./images/icons/next.png" alt="next" /></button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    {/* <div class="footer-bg pc"></div> */}
                                    <div class=""></div>

                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <BoxOverlay />
            </main>
            <Footer />

        </div>



    );
}

export default Transaction;