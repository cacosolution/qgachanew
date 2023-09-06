import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/completegacha.css";
import "../css/responsive.css";

import Footer from '../component/Footer/footer'
import Navbar from '../component/Navbar/navbar'
import Sidebar from '../component/Sidebar/sidebar'
import { BiChevronRight } from 'react-icons/bi'
import BoxOverlay from '../component/Box/BoxOverlay';
import { useSelector } from 'react-redux';

const Reroll = () => {
    const {
        isOpenSideBar,
    } = useSelector((state) => state.siderBar);
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div className={`main-home ${isOpenSideBar && "active"}`} >
                    <div class="main-content">
                        <div class="bread-crumb">
                            <a href="">Gacha</a> <BiChevronRight size={20} /> <a href="">Re-roll Gacha</a>
                        </div>
                        <section class="my-3">
                            <img src="./images/comming-reroll.png" alt="" />
                        </section>
                        <div class="spacer my-5 py-5"></div>
                    </div>
                </div>


            </main>
            <Footer />

        </div>
    )
}

export default Reroll