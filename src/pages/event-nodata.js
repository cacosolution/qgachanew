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
import BoxOverlay from '../component/Box/BoxOverlay';
import { useSelector } from 'react-redux';

const EventNodata = () => {
    const {
        isOpenSideBar,
    } = useSelector((state) => state.siderBar);
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div className={`main-home ${isOpenSideBar && "active"}`} >
                    <div class="main-content main-event">
                        <button class="btn-event">Event</button>
                        <div class="banner-event">
                            <img src="./images/event1.png" alt="banner-home" />
                        </div>
                        <div class="group__btn-event d-flex align-items-center">
                            <button class="btn-event btn-last">Latest Event</button>
                            <button class="btn-event btn-archived">Archived</button>
                        </div>

                        <div class="m-5">
                            <div class="p-5 text-center">
                                Oops! There is no data yet!
                            </div>
                        </div>

                        <div class="spacer mb-5 pb-5"></div>
                    </div>

                </div>


            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default EventNodata