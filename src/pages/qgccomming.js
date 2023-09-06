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
import { useSelector } from 'react-redux';


const Qgccomming = () => {
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
                        <div class="bread-crumb pvp">
                            <a href="">QGC</a>
                        </div>
                        <section class="my-3">
                            <img src="./images/comming-coin.png" alt="" />
                        </section>
                        <div class="spacer my-5 py-5"></div>
                    </div>

                </div>

            </main>
            <Footer />

        </div>
    )
}

export default Qgccomming