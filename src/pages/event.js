import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/responsive.css";
import { Link } from 'react-router-dom';
import Layout from '../layout';

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
        <Layout>

            <div className="main-content main-event">
                <p className="text-event">EVENT</p>
                <div className="banner-event">
                    <img src="./images/event1.png" alt="banner-home" />
                </div>
                <div className="group__btn-event mt-2 mt-sm-5 d-flex align-items-center">

                    <button className={`btn-event ${isEvenlastest ? "btn-archived" : "btn-last"} `} onClick={handlerEventLatest}>Latest Event</button>

                    <button className={`btn-event ${isEven ? "btn-archived" : "btn-last"} `} onClick={handlerEventArchived}>Archived</button>
                </div>



                {isEven ? (

                    <div className="list-event">
                        <div className='className="row gx-3 gx-sm-0 gy-3 gy-sm-5"'>
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
                                    <td className="status confirm">Confirmed</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>10/8/2023</td>
                                    <td>Name Event</td>
                                    <td>Reward event</td>
                                    <td className="status unconfirm">Unconfirmed</td>
                                </tr>
                            </table>
                        </div>




                        <div className="spacer mb-5 pb-5"></div>
                    </div>

                ) : isEvenlastest ? (
                    <div className="list-event">
                        <div className="row gx-3 gx-sm-0 gy-3 gy-sm-5">
                            <Link to={"/eventdetail"} className="col-12 col-sm-4">
                                <div className="event-item">
                                    <img src="./images/nft-upgrade.png" alt="" />
                                    <div className="event-info d-flex justify-content-between align-items-center" >
                                        <div className="time my-3">
                                            Ends at 23:59:59 28/8/2023
                                            <p>Join Cash X Share</p>
                                        </div>
                                        <button>In progress</button>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/eventdetail"} className="col-12 col-sm-4">
                                <div className="event-item">
                                    <img src="./images/nft-upgrade.png" alt="" />
                                    <div className="event-info d-flex justify-content-between align-items-center">
                                        <div className="time my-3">
                                            Ends at 23:59:59 28/8/2023
                                            <p>Join Cash X Share</p>
                                        </div>
                                        <button>In progress</button>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/eventdetail"} className="col-12 col-sm-4">
                                <div className="event-item">
                                    <img src="./images/nft-upgrade.png" alt="" />
                                    <div className="event-info d-flex justify-content-between align-items-center">
                                        <div className="time my-3">
                                            Ends at 23:59:59 28/8/2023
                                            <p>Join Cash X Share</p>
                                        </div>
                                        <button>In progress</button>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/eventdetail"} className="col-12 col-sm-4">
                                <div className="event-item">
                                    <img src="./images/nft-upgrade.png" alt="" />
                                    <div className="event-info d-flex justify-content-between align-items-center">
                                        <div className="time my-3">
                                            Ends at 23:59:59 28/8/2023
                                            <p>Join Cash X Share</p>
                                        </div>
                                        <button>In progress</button>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/eventdetail"} className="col-12 col-sm-4">
                                <div className="event-item">
                                    <img src="./images/nft-upgrade.png" alt="" />
                                    <div className="event-info d-flex justify-content-between align-items-center">
                                        <div className="time my-3">
                                            Ends at 23:59:59 28/8/2023
                                            <p>Join Cash X Share</p>
                                        </div>
                                        <button>In progress</button>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/eventdetail"} className="col-12 col-sm-4">
                                <div className="event-item">
                                    <img src="./images/nft-upgrade.png" alt="" />
                                    <div className="event-info d-flex justify-content-between align-items-center">
                                        <div className="time my-3">
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

                <div className="spacer mb-5 pb-5"></div>

            </div>

        </Layout>

    )
}

export default Event