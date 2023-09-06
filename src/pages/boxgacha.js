import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/completegacha.css";
import "../css/responsive.css";

import { BiChevronRight } from 'react-icons/bi'

import Footer from '../component/Footer/footer'
import Navbar from '../component/Navbar/navbar'
import Sidebar from '../component/Sidebar/sidebar'
import BoxOverlay from '../component/Box/BoxOverlay';
import { useSelector } from 'react-redux';

const Boxgacha = () => {
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
                            <a href="">Gacha</a> <BiChevronRight size={20} />   <a href="">Box Gacha</a>
                        </div>
                        <section class="my-3">
                            <div class="mt-4">
                                <img src="./images/treasure-chest.png" alt="" />
                            </div>

                            <div class="game">
                                <button>game</button>
                                <img src="./images/treasure-box.png" alt="" />
                            </div>
                            <div class="upcomming">
                                <button>Upcomming</button>
                                <div class="list-up d-flex">
                                    <img src="./images/box-gacha1.png" alt="" />
                                    <img src="./images/box-gacha2.png" alt="" />
                                    <img src="./images/box-comming-soon.png" alt="" />
                                    <img src="./images/box-com2.png" alt="" />

                                </div>
                            </div>
                        </section>


                    </div>

                </div>
                <BoxOverlay />
            </main>
            <Footer />
        </div>
    )
}

export default Boxgacha