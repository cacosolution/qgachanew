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

const eventlastest = () => {
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div class="main-home">
                    <div class="main-content main-event">
                        <button class="btn-event">Event</button>
                        <div class="banner-event">
                            <img src="./images/event1.png" alt="banner-home" />
                        </div>
                        <div class="group__btn-event mt-2 mt-sm-5 d-flex align-items-center">
                            <button class="btn-event btn-last">Latest Event</button>
                            <button class="btn-event btn-archived">Archived</button>
                        </div>

                        <div class="list-event">
                            <div class="row gx-3 gx-sm-0 gy-3 gy-sm-5">
                                <div class="col-12 col-sm-4">
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
                                </div>
                                <div class="col-12 col-sm-4">
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
                                </div>
                                <div class="col-12 col-sm-4">
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
                                </div>
                                <div class="col-12 col-sm-4">
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
                                </div>
                                <div class="col-12 col-sm-4">
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
                                </div>
                                <div class="col-12 col-sm-4">
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
                                </div>

                            </div>
                        </div>

                        <div class="spacer mb-5 pb-5"></div>
                    </div>

                </div>


                <button class="btn-support">
                    <img src="images/icons/livesupport-icon.svg" alt="" />
                </button>
            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default eventlastest