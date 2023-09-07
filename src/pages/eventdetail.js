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
                <div class="main-content main-event">
                    <Link to="/eventlastest">
                        <button class="btn-event btn-detail">Event <BiChevronRight size={20} />  <strong><Link>Details</Link></strong></button>
                    </Link>
                    <div class="banner-event">
                        <img src="./images/nft-upgrade.png" alt="banner-nft" />
                    </div>
                    <div class="info-detail">
                        <h4>tên sự kiện</h4>
                        <p>Phần thưởng sự kiện</p>
                        <p class="time">📅 22th of Auguest 2023</p>

                    </div>
                    <div class="info-guide">
                        <div class="total-max d-flex">
                            <span class="total">TOTAL PRIZE</span>
                            <span class="max">
                                MAx prize(usdt)
                            </span>
                        </div>

                        <div class="rules distribute">
                            <Link>
                                General Rules
                            </Link>
                        </div>
                        <div class="guide text-game">NỘI DUNG HƯỚNG DẪN CHƠI</div>
                        <div class="rules">
                            <Link>
                                Prize Distribution
                            </Link>
                        </div>
                        <div class="text-center text-game py-2">NỘI DUNG GIẢI THƯỞNG</div>
                        <div class="rules terms">
                            <Link>
                                Terms and Conditions
                            </Link>
                        </div>
                        <div class="text-center text-game py-2">NỘI DUNG ĐIỀU KHOẢN VÀ ĐIỀU KIỆN</div>
                    </div>

                    <div class="spacer mb-5 pb-5"></div>
                </div>
            </div>
        </Layout>
    )
}

export default EventDetail