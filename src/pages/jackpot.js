import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/flickity.css"
import "../css/base.css"
import "../css/home.css"
import "../css/jackpot.css"
import "../css/responsive.css"
import Layout from '../layout';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Jackpot = () => {
    const [isMyTicket, setMyTicket] = useState(false);
    const [isResult, setResult] = useState(true);
    const [isJackpot, setJackbot] = useState(false);
    const [activeButtonTable, setActiveButtonTable] = useState("MyTicket");

    const handelMyTicket = () => {
        setMyTicket(true);
        setResult(false);
        setResult(false);
        setActiveButtonTable("MyTicket");
    }
    const handelResult = () => {
        setMyTicket(false);
        setResult(true);
        setResult(false);
        setActiveButtonTable("Results");

    }
    const handelJackpot = () => {
        setMyTicket(false);
        setResult(false);
        setJackbot(true);
        setActiveButtonTable("Jackpot");

    }





    return (

        <Layout>
            <div id="jackpot" className="jackpot">
                <div className="navbar-wrapper">
                    <div className={`nav-item ${activeButtonTable === "MyTicket" ? "nav-item--active" : ""}`} onClick={handelMyTicket}>
                        <Link>
                            <span>My Ticket (</span>
                            <span id="ticket-number">
                                0
                            </span>
                            <span>)</span>
                        </Link>
                    </div>
                    <div className={`nav-item ${activeButtonTable === "Results" ? "nav-item--active" : ""}`} onClick={handelResult}>
                        <Link>
                            Result
                        </Link>
                    </div>
                    <div className={`nav-item ${activeButtonTable === "Jackpot" ? "nav-item--active" : ""}`} onClick={handelJackpot}>
                        <Link>
                            Jackpot winner
                        </Link>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="header">
                        <span className="game-id">
                            Game ID
                        </span>
                        <img className="header-btn header-btn--back header-ml" src="./images/icons/jackpot/back.png"
                            alt="back" />
                        <span id="header-game-id" className=" header-ml">
                            20230703
                        </span>
                        <img className="header-btn  header-ml" src="./images/icons/jackpot/next.png" alt="back" />
                        <img className="header-btn  header-ml" src="./images/icons/jackpot/next-all.png" alt="back" />
                        <span id="header-game-date">
                            03/07/2023
                        </span>
                    </div>
                    <div className="ticket-section ticketpc">
                        <div className="ticket">
                            <div className="ticket-bg"></div>
                            <div className="ticket-draw-time">
                                Draw time: <span id="draw-time">22:55:00 29/7/2023</span>
                            </div>
                            <img className="ticket-img" src="./images/jackpot/lucky.png" alt="" />

                            <div className="total-ticket-sold">
                                <img src="./images/jackpot/ticket.png" alt="" className="total-ticket-sold-img" />
                                <p className="total-ticket-sold-desc">
                                    Total tickets sold this round:
                                    <span id="total-ticket-sold">
                                        40992
                                    </span>
                                </p>
                            </div>
                            <div className="total-win-ticket">
                                <img src="./images/jackpot/crown.png" alt="" className="total-ticket-sold-img" />
                                <p className="total-ticket-sold-desc">
                                    Total winning tickets this round:
                                    <span id="total-win-ticket">
                                        328
                                    </span>
                                </p>
                            </div>


                        </div>
                        <div className="winner-section">
                            <div className="ticket-footer-winners-list">
                                Winners List
                            </div>
                            <div className="winner-table-header-section">
                                <div className="winner-table-header">
                                    winner name
                                </div>
                                <div className="winner-table-header winner-table-header--center">
                                    Numbers
                                </div>
                                <div className="winner-table-header winner-table-header--center">
                                    matches
                                </div>
                                <div className="winner-table-header">
                                    prize
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="ticket-section openmobile">


                        <div className="ticket-draw-time">
                            Draw time: <span id="draw-time">22:55:00 29/7/2023</span>
                        </div>
                        <img className="ticket-lucky" src="./images/jackpot/lucky.png" alt="" />
                        <div className="ticket-logo">
                            <img src="./images/jackpot/ticket.png" alt="" />
                            <p>Total tickets sold this round:  <span id="">
                                40992
                            </span></p>
                        </div>
                        <div className="ticket-logocrown">
                            <img src="./images/jackpot/crown.png" alt="" className='logocrown' />
                            <p className="">
                                Total winning tickets this round:
                                <span>
                                    328
                                </span>
                            </p>
                        </div>

                    </div>

                    <div className="winner-table">
                        <div className="winner-table-rows">
                            <div className="winner-rows">
                                <div className="winner-rows-col" id="winner-name">
                                    (AVT) name1
                                </div>
                                <div className="winner-rows-col winner-rows-col--center">
                                    <img src="./images/jackpot/ticket-record.png" alt=""
                                        className="winner-rows-col-img" />
                                </div>
                                <div className="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                    id="matches">
                                    N
                                </div>
                                <div className="winner-rows-col winner-rows-col--prize" id="award-amount">
                                    số tiền giải
                                </div>
                            </div>
                            <div className="winner-rows">
                                <div className="winner-rows-col" id="winner-name">
                                    (AVT) name1
                                </div>
                                <div className="winner-rows-col winner-rows-col--center">
                                    <img src="./images/jackpot/ticket-record.png" alt=""
                                        className="winner-rows-col-img" />
                                </div>
                                <div className="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                    id="matches">
                                    N
                                </div>
                                <div className="winner-rows-col winner-rows-col--prize" id="award-amount">
                                    số tiền giải
                                </div>

                            </div>
                            <div className="winner-rows">
                                <div className="winner-rows-col" id="winner-name">
                                    (AVT) name1
                                </div>
                                <div className="winner-rows-col winner-rows-col--center">
                                    <img src="./images/jackpot/ticket-record.png" alt=""
                                        className="winner-rows-col-img" />
                                </div>
                                <div className="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                    id="matches">
                                    N
                                </div>
                                <div className="winner-rows-col winner-rows-col--prize" id="award-amount">
                                    số tiền giải
                                </div>
                            </div>
                            <div className="winner-rows">
                                <div className="winner-rows-col" id="winner-name">
                                    (AVT) name1
                                </div>
                                <div className="winner-rows-col winner-rows-col--center">
                                    <img src="./images/jackpot/ticket-record.png" alt=""
                                        className="winner-rows-col-img" />
                                </div>
                                <div className="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                    id="matches">
                                    N
                                </div>
                                <div className="winner-rows-col winner-rows-col--prize" id="award-amount">
                                    số tiền giải
                                </div>

                            </div>
                            <div className="winner-rows">
                                <div className="winner-rows-col" id="winner-name">
                                    (AVT) name1
                                </div>
                                <div className="winner-rows-col winner-rows-col--center">
                                    <img src="./images/jackpot/ticket-record.png" alt=""
                                        className="winner-rows-col-img" />
                                </div>
                                <div className="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                    id="matches">
                                    N
                                </div>
                                <div className="winner-rows-col winner-rows-col--prize" id="award-amount">
                                    số tiền giải
                                </div>
                            </div>
                            <div className="winner-rows">
                                <div className="winner-rows-col" id="winner-name">
                                    (AVT) name1
                                </div>
                                <div className="winner-rows-col winner-rows-col--center">
                                    <img src="./images/jackpot/ticket-record.png" alt=""
                                        className="winner-rows-col-img" />
                                </div>
                                <div className="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                    id="matches">
                                    N
                                </div>
                                <div className="winner-rows-col winner-rows-col--prize" id="award-amount">
                                    số tiền giải
                                </div>

                            </div>
                            <div className="winner-rows">
                                <div className="winner-rows-col" id="winner-name">
                                    (AVT) name1
                                </div>
                                <div className="winner-rows-col winner-rows-col--center">
                                    <img src="./images/jackpot/ticket-record.png" alt=""
                                        className="winner-rows-col-img" />
                                </div>
                                <div className="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                    id="matches">
                                    N
                                </div>
                                <div className="winner-rows-col winner-rows-col--prize" id="award-amount">
                                    số tiền giải
                                </div>
                            </div>
                            <div className="winner-rows">
                                <div className="winner-rows-col" id="winner-name">
                                    (AVT) name1
                                </div>
                                <div className="winner-rows-col winner-rows-col--center">
                                    <img src="./images/jackpot/ticket-record.png" alt=""
                                        className="winner-rows-col-img" />
                                </div>
                                <div className="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                    id="matches">
                                    N
                                </div>
                                <div className="winner-rows-col winner-rows-col--prize" id="award-amount">
                                    số tiền giải
                                </div>

                            </div>
                            <div className="winner-rows">
                                <div className="winner-rows-col" id="winner-name">
                                    (AVT) name1
                                </div>
                                <div className="winner-rows-col winner-rows-col--center">
                                    <img src="./images/jackpot/ticket-record.png" alt=""
                                        className="winner-rows-col-img" />
                                </div>
                                <div className="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                    id="matches">
                                    N
                                </div>
                                <div className="winner-rows-col winner-rows-col--prize" id="award-amount">
                                    số tiền giải
                                </div>
                            </div>
                            <div className="winner-rows">
                                <div className="winner-rows-col" id="winner-name">
                                    (AVT) name1
                                </div>
                                <div className="winner-rows-col winner-rows-col--center">
                                    <img src="./images/jackpot/ticket-record.png" alt=""
                                        className="winner-rows-col-img" />
                                </div>
                                <div className="winner-rows-col winner-rows-col--center winner-rows-col--matches"
                                    id="matches">
                                    N
                                </div>
                                <div className="winner-rows-col winner-rows-col--prize" id="award-amount">
                                    số tiền giải
                                </div>

                            </div>
                        </div>
                        <div className="winner-table-paginate">
                            <div className="pagination-numbers">
                                <button className="pagination-number-btn">
                                    1
                                </button>
                                <button className="pagination-number-btn">
                                    2
                                </button>
                                <button className="pagination-number-btn">
                                    3
                                </button>
                                <img src="./images/jackpot/left.png" className="pagination-img-btn" alt="" />
                                <img src="./images/jackpot/right.png" className="pagination-img-btn" alt="" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </Layout >
    );
}

export default Jackpot;