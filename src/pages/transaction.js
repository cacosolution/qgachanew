import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/flickity.css"
import "../css/base.css"
import "../css/home.css"
import "../css/deposit.css"
import "../css/responsive.css"
import Navbar from '../component/Navbar/navbar';
import Sidebar from '../component/Sidebar/sidebar';
import Footer from '../component/Footer/footer';


const Transaction = () => {
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div class="main-deposit">
                    <div class="deposit-content">
                        <button class="btn-wallet text-15">Wallet</button>
                        <div class="feature-content d-flex">
                            <div class="list-feature">
                                <ul>
                                    <li class="feature-item d-flex align-items-center">
                                        <img src="./images/icons/deposit/wallet.svg" alt="" class="feature-icon" />
                                        <h4 class="feature-title text-15">Balance</h4>
                                    </li>
                                    <li class="feature-item d-flex align-items-center ">
                                        <img src="./images/icons/deposit/deposit.svg" alt="" class="feature-icon" />
                                        <h4 class="feature-title text-15">Deposit</h4>
                                    </li>
                                    <li class="feature-item d-flex align-items-center">
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
                                    <li class="feature-item d-flex align-items-center active">
                                        <img src="./images/icons/deposit/transaction.svg" alt="" class="feature-icon" />
                                        <h4 class="feature-title text-15">Transaction</h4>
                                    </li>
                                </ul>

                            </div>
                            <div class="feature-detail">
                                <p>
                                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#multiCollapseExample2" aria-expanded="false"
                                        aria-controls="multiCollapseExample2">Toggle second element</button>
                                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                                        data-bs-target=".multi-collapse" aria-expanded="false"
                                        aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both
                                        elements</button>
                                </p>
                                <div class="row">
                                    <div class="col">
                                        <div class="collapse multi-collapse" id="multiCollapseExample2">
                                            <div class="card card-body">
                                                Some placeholder content for the second collapse component of this
                                                multi-collapse example. This panel is
                                                hidden by default but revealed when the user activates the relevant trigger.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                    <Footer />
                </div>

                <button class="btn-support">
                    <img src="images/icons/livesupport-icon.svg" alt="" />
                </button>
            </main>
        </div>



    );
}

export default Transaction;