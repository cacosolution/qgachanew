import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/flickity.css"
import "../css/base.css"
import "../css/home.css"
import "../css/jackpot.css"
import "../css/responsive.css"
import Navbar from '../component/Navbar/navbar';
import Sidebar from '../component/Sidebar/sidebar';
import Footer from '../component/Footer/footer';
import BoxOverlay from '../component/Box/BoxOverlay';
import { useSelector } from 'react-redux';


const Jackpot = () => {
    const {
        isOpenSideBar,
    } = useSelector((state) => state.siderBar);

    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div className={`main-home ${isOpenSideBar && "active"}`} >


                    <div id="jackpot" class="jackpot">
                        <div class="navbar-wrapper">
                            <div class="nav-item">
                                <a href="#">
                                    <span>My Ticket (</span>
                                    <span id="ticket-number">
                                        0
                                    </span>
                                    <span>)</span>
                                </a>
                            </div>
                            <div class="nav-item nav-item--active">
                                <a href="#">
                                    Result
                                </a>
                            </div>
                            <div class="nav-item">
                                <a href="#">
                                    Jackpot winner
                                </a>
                            </div>
                        </div>
                        <div class="content-wrapper">
                            <div class="header">
                                <span class="game-id">
                                    Game ID
                                </span>
                                <img class="header-btn header-btn--back header-ml" src="./images/icons/jackpot/back.png"
                                    alt="back" />
                                <span id="header-game-id" class=" header-ml">
                                    20230703
                                </span>
                                <img class="header-btn  header-ml" src="./images/icons/jackpot/next.png" alt="back" />
                                <img class="header-btn  header-ml" src="./images/icons/jackpot/next-all.png" alt="back" />
                                <span id="header-game-date">
                                    03/07/2023
                                </span>
                            </div>
                            <div class="ticket-section">
                                <div class="ticket">
                                    <div class="ticket-bg"></div>
                                    <div class="ticket-draw-time">
                                        Draw time: <span id="draw-time">22:55:00 29/7/2023</span>
                                    </div>
                                    <img class="ticket-img" src="./images/jackpot/lucky.png" alt="" />
                                    <div class="total-ticket-sold">
                                        <img src="./images/jackpot/ticket.png" alt="" class="total-ticket-sold-img" />
                                        <p class="total-ticket-sold-desc">
                                            Total tickets sold this round:
                                            <span id="total-ticket-sold">
                                                40992
                                            </span>
                                        </p>
                                    </div>
                                    <div class="total-win-ticket">
                                        <img src="./images/jackpot/crown.png" alt="" class="total-ticket-sold-img" />
                                        <p class="total-ticket-sold-desc">
                                            Total winning tickets this round:
                                            <span id="total-win-ticket">
                                                328
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="winner-section">
                                    <div class="ticket-footer-winners-list">
                                        Winners List
                                    </div>
                                    <div class="winner-table-header-section">
                                        <div class="winner-table-header">
                                            winner name
                                        </div>
                                        <div class="winner-table-header winner-table-header--center">
                                            Numbers
                                        </div>
                                        <div class="winner-table-header winner-table-header--center">
                                            matches
                                        </div>
                                        <div class="winner-table-header">
                                            prize
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="winner-table">
                                <div class="winner-table-rows">
                                    <div class="winner-rows">
                                        <div class="winner-rows-col" id="winner-name">
                                            (AVT) name1
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center">
                                            <img src="./images/jackpot/ticket-record.png" alt=""
                                                class="winner-rows-col-img" />
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                            id="matches">
                                            N
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--prize" id="award-amount">
                                            số tiền giải
                                        </div>
                                    </div>
                                    <div class="winner-rows">
                                        <div class="winner-rows-col" id="winner-name">
                                            (AVT) name1
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center">
                                            <img src="./images/jackpot/ticket-record.png" alt=""
                                                class="winner-rows-col-img" />
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                            id="matches">
                                            N
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--prize" id="award-amount">
                                            số tiền giải
                                        </div>

                                    </div>
                                    <div class="winner-rows">
                                        <div class="winner-rows-col" id="winner-name">
                                            (AVT) name1
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center">
                                            <img src="./images/jackpot/ticket-record.png" alt=""
                                                class="winner-rows-col-img" />
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                            id="matches">
                                            N
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--prize" id="award-amount">
                                            số tiền giải
                                        </div>
                                    </div>
                                    <div class="winner-rows">
                                        <div class="winner-rows-col" id="winner-name">
                                            (AVT) name1
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center">
                                            <img src="./images/jackpot/ticket-record.png" alt=""
                                                class="winner-rows-col-img" />
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                            id="matches">
                                            N
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--prize" id="award-amount">
                                            số tiền giải
                                        </div>

                                    </div>
                                    <div class="winner-rows">
                                        <div class="winner-rows-col" id="winner-name">
                                            (AVT) name1
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center">
                                            <img src="./images/jackpot/ticket-record.png" alt=""
                                                class="winner-rows-col-img" />
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                            id="matches">
                                            N
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--prize" id="award-amount">
                                            số tiền giải
                                        </div>
                                    </div>
                                    <div class="winner-rows">
                                        <div class="winner-rows-col" id="winner-name">
                                            (AVT) name1
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center">
                                            <img src="./images/jackpot/ticket-record.png" alt=""
                                                class="winner-rows-col-img" />
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                            id="matches">
                                            N
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--prize" id="award-amount">
                                            số tiền giải
                                        </div>

                                    </div>
                                    <div class="winner-rows">
                                        <div class="winner-rows-col" id="winner-name">
                                            (AVT) name1
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center">
                                            <img src="./images/jackpot/ticket-record.png" alt=""
                                                class="winner-rows-col-img" />
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                            id="matches">
                                            N
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--prize" id="award-amount">
                                            số tiền giải
                                        </div>
                                    </div>
                                    <div class="winner-rows">
                                        <div class="winner-rows-col" id="winner-name">
                                            (AVT) name1
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center">
                                            <img src="./images/jackpot/ticket-record.png" alt=""
                                                class="winner-rows-col-img" />
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                            id="matches">
                                            N
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--prize" id="award-amount">
                                            số tiền giải
                                        </div>

                                    </div>
                                    <div class="winner-rows">
                                        <div class="winner-rows-col" id="winner-name">
                                            (AVT) name1
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center">
                                            <img src="./images/jackpot/ticket-record.png" alt=""
                                                class="winner-rows-col-img" />
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                            id="matches">
                                            N
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--prize" id="award-amount">
                                            số tiền giải
                                        </div>
                                    </div>
                                    <div class="winner-rows">
                                        <div class="winner-rows-col" id="winner-name">
                                            (AVT) name1
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center">
                                            <img src="./images/jackpot/ticket-record.png" alt=""
                                                class="winner-rows-col-img" />
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                            id="matches">
                                            N
                                        </div>
                                        <div class="winner-rows-col winner-rows-col--prize" id="award-amount">
                                            số tiền giải
                                        </div>

                                    </div>
                                </div>
                                <div class="winner-table-paginate">
                                    <div class="pagination-numbers">
                                        <button class="pagination-number-btn">
                                            1
                                        </button>
                                        <button class="pagination-number-btn">
                                            2
                                        </button>
                                        <button class="pagination-number-btn">
                                            3
                                        </button>
                                        <img src="./images/jackpot/left.png" class="pagination-img-btn" alt="" />
                                        <img src="./images/jackpot/right.png" class="pagination-img-btn" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
                <BoxOverlay />
            </main>
        </div>




    );
}

export default Jackpot;