import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/responsive.css";
import Footer from '../component/Footer/footer'
import Sidebar from '../component/Sidebar/sidebar'
import Navbar from '../component/Navbar/navbar'
import { BiChevronRight } from 'react-icons/bi'

const eventdetail = () => {
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div class="main-home">
                    <div class="main-content main-event">
                        <button class="btn-event btn-detail">Event <BiChevronRight size={20} />  <strong><a href="">Details</a></strong></button>
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
                                <a href="">
                                    General Rules
                                </a>
                            </div>
                            <div class="guide text-game">NỘI DUNG HƯỚNG DẪN CHƠI</div>
                            <div class="rules">
                                <a href="">
                                    Prize Distribution
                                </a>
                            </div>
                            <div class="text-center text-game py-2">NỘI DUNG GIẢI THƯỞNG</div>
                            <div class="rules terms">
                                <a href="">
                                    Terms and Conditions
                                </a>
                            </div>
                            <div class="text-center text-game py-2">NỘI DUNG ĐIỀU KHOẢN VÀ ĐIỀU KIỆN</div>
                        </div>

                        <div class="spacer mb-5 pb-5"></div>
                    </div>

                </div>
                <button class="btn-support">
                    <img src="images/icons/livesupport-icon.svg" alt="" />
                </button>
            </main>
            <Footer />
        </div>
    )
}

export default eventdetail