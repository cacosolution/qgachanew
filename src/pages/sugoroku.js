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



const Sugoroku = () => {

    return (

        <Layout>
            <div classNameName="main-content">
                <div className="bread-crumb">
                    <Link>Gacha</Link> <BiChevronRight size={20} /> <Link>Sugoroku Gacha</Link>
                </div>
                <section className="my-3">
                    <img src="./images/comming-sugo.png" alt="" />
                </section>
                <div className="spacer my-5 py-5"></div>
            </div>
        </Layout>

    )
}

export default Sugoroku