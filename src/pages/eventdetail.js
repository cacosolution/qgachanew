import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/responsive.css";

import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Layout from '../layout';

const EventDetail = () => {

    return (
        <Layout>

            <div>
                <div className="main-content main-event">
                    <Link to="/eventlastest">
                        <button className="btn-event btn-detail">Event <BiChevronRight size={20} />  <strong><Link>Details</Link></strong></button>
                    </Link>
                    <div className="banner-event">
                        <img src="./images/nft-upgrade.png" alt="banner-nft" />
                    </div>
                    <div className="info-detail">
                        <h4>tên sự kiện</h4>
                        <p>Phần thưởng sự kiện</p>
                        <p className="time">📅 22th of Auguest 2023</p>

                    </div>
                    <div className="info-guide">
                        <div className="total-max d-flex">
                            <span className="total">TOTAL PRIZE</span>
                            <span className="max">
                                MAx prize(usdt)
                            </span>
                        </div>

                        <div className="rules distribute">
                            <Link>
                                General Rules
                            </Link>
                        </div>
                        <div className="guide text-game">NỘI DUNG HƯỚNG DẪN CHƠI</div>
                        <div className="rules">
                            <Link>
                                Prize Distribution
                            </Link>
                        </div>
                        <div className="text-center text-game py-2">NỘI DUNG GIẢI THƯỞNG</div>
                        <div className="rules terms">
                            <Link>
                                Terms and Conditions
                            </Link>
                        </div>
                        <div className="text-center text-game py-2">NỘI DUNG ĐIỀU KHOẢN VÀ ĐIỀU KIỆN</div>
                    </div>

                    <div className="spacer mb-5 pb-5"></div>
                </div>
            </div>
        </Layout>
    )
}

export default EventDetail