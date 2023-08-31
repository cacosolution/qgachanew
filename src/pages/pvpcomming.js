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

const pvpcomming = () => {
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div class="main-home">
                    <div class="main-content">
                        <div class="bread-crumb pvp">
                            <a href="">PVP</a>
                        </div>
                        <section class="my-3">
                            <img src="./images/comming-pvp.png" alt="" />
                        </section>
                        <div class="spacer my-5 py-5"></div>
                    </div>
                    <Footer />
                </div>
                <BoxOverlay />
            </main>
        </div>
    )
}

export default pvpcomming