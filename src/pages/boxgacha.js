import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/completegacha.css";
import "../css/responsive.css";
import { BiChevronRight } from 'react-icons/bi'
import Layout from '../layout';
import { Link } from 'react-router-dom';

const Boxgacha = () => {

    return (
        <Layout>
            <div class="main-content">

                <div class="bread-crumb">
                    <Link>Gacha</Link> <BiChevronRight size={20} />   <Link>Box Gacha</Link>
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


        </Layout>



    )
}

export default Boxgacha