import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/responsive.css";
import Footer from '../component/Footer/footer'
import Sidebar from '../component/Sidebar/sidebar'
import Navbar from '../component/Navbar/navbar'
import { BiChevronRight } from 'react-icons/bi'
import BoxOverlay from '../component/Box/BoxOverlay';
import { Link } from 'react-router-dom';

const Event = () => {
    const [isEven, setEven] = useState(false);
    const [isEvenlastest, setEvenlastest] = useState(true);
    const handlerEventLatest = () => {
        setEven(false);
        setEvenlastest(true);
    }
    const handlerEventArchived = () => {
        setEven(true);
        setEvenlastest(false);
    }
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div class="main-home" style={{ width: "100%" }}>
                    <div class="main-content main-event">
                        <button class="btn-event">Event</button>
                        <div class="banner-event">
                            <img src="./images/event1.png" alt="banner-home" />
                        </div>
                        <div class="group__btn-event mt-2 mt-sm-5 d-flex align-items-center">

                            <button class={`btn-event ${isEvenlastest ? "btn-archived" : "btn-last"} `} onClick={handlerEventLatest}>Latest Event</button>

                            <button class={`btn-event ${isEven ? "btn-archived" : "btn-last"} `} onClick={handlerEventArchived}>Archived</button>
                        </div>



                        {isEven ? (

                            <div class="list-event">
                                <div className='class="row gx-3 gx-sm-0 gy-3 gy-sm-5"'>
                                    <table style={{ width: "100%" }}>
                                        <tr>
                                            <th>Ordinal</th>
                                            <th>Date</th>
                                            <th>Event</th>
                                            <th>archive</th>
                                            <th>Status</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>10/8/2023</td>
                                            <td>Name Event</td>
                                            <td>Reward event</td>
                                            <td class="status confirm">Confirmed</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>10/8/2023</td>
                                            <td>Name Event</td>
                                            <td>Reward event</td>
                                            <td class="status unconfirm">Unconfirmed</td>
                                        </tr>
                                    </table>
                                </div>




                                <div class="spacer mb-5 pb-5"></div>
                            </div>

                        ) : isEvenlastest ? (
                            <div class="list-event">
                                <div class="row gx-3 gx-sm-0 gy-3 gy-sm-5">
                                    <Link to={"/eventdetail"} class="col-12 col-sm-4">
                                        <div class="event-item">
                                            <img src="./images/nft-upgrade.png" alt="" />
                                            <div class="event-info d-flex justify-content-between align-items-center" >
                                                <div class="time my-3">
                                                    Ends at 23:59:59 28/8/2023
                                                    <p>Join Cash X Share</p>
                                                </div>
                                                <button>In progress</button>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to={"/eventdetail"} class="col-12 col-sm-4">
                                        <div class="event-item">
                                            <img src="./images/nft-upgrade.png" alt="" />
                                            <div class="event-info d-flex justify-content-between align-items-center">
                                                <div class="time my-3">
                                                    Ends at 23:59:59 28/8/2023
                                                    <p>Join Cash X Share</p>
                                                </div>
                                                <button>In progress</button>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to={"/eventdetail"} class="col-12 col-sm-4">
                                        <div class="event-item">
                                            <img src="./images/nft-upgrade.png" alt="" />
                                            <div class="event-info d-flex justify-content-between align-items-center">
                                                <div class="time my-3">
                                                    Ends at 23:59:59 28/8/2023
                                                    <p>Join Cash X Share</p>
                                                </div>
                                                <button>In progress</button>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to={"/eventdetail"} class="col-12 col-sm-4">
                                        <div class="event-item">
                                            <img src="./images/nft-upgrade.png" alt="" />
                                            <div class="event-info d-flex justify-content-between align-items-center">
                                                <div class="time my-3">
                                                    Ends at 23:59:59 28/8/2023
                                                    <p>Join Cash X Share</p>
                                                </div>
                                                <button>In progress</button>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to={"/eventdetail"} class="col-12 col-sm-4">
                                        <div class="event-item">
                                            <img src="./images/nft-upgrade.png" alt="" />
                                            <div class="event-info d-flex justify-content-between align-items-center">
                                                <div class="time my-3">
                                                    Ends at 23:59:59 28/8/2023
                                                    <p>Join Cash X Share</p>
                                                </div>
                                                <button>In progress</button>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to={"/eventdetail"} class="col-12 col-sm-4">
                                        <div class="event-item">
                                            <img src="./images/nft-upgrade.png" alt="" />
                                            <div class="event-info d-flex justify-content-between align-items-center">
                                                <div class="time my-3">
                                                    Ends at 23:59:59 28/8/2023
                                                    <p>Join Cash X Share</p>
                                                </div>
                                                <button>In progress</button>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        ) : (
                            <></>
                        )}

                        <div class="spacer mb-5 pb-5"></div>
                    </div>

                </div>


                <BoxOverlay />
            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Event