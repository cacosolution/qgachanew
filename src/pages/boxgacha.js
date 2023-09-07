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
            <div className="main-content">

                <div className="bread-crumb">
                    <Link>Gacha</Link> <BiChevronRight size={20} />   <Link>Box Gacha</Link>
                </div>
                <section className="my-3">
                    <div className="mt-4">
                        <img src="./images/treasure-chest.png" alt="" />
                    </div>

                    <div className="game">
                        <button>game</button>
                        <img src="./images/treasure-box.png" alt="" />
                    </div>
                    <div className="upcomming">
                        <button>Upcomming</button>
                        <div className="list-up d-flex">
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