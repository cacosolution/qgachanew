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
import BoxOverlay from '../component/Box/BoxOverlay';

const tournament = () => {
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div className="main-home">
                    <div class="main-content">
                        <div class="bread-crumb pvp">
                            <a href="">Tournament</a>
                        </div>
                        <section class="my-3">
                            <img src="./images/comming-tournament.png" alt="" />
                        </section>
                        <div class="spacer my-5 py-5"></div>
                    </div>

                </div>
                <BoxOverlay />
            </main>
            <Footer />

        </div>
    )
}

export default tournament