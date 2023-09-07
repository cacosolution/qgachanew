import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/completegacha.css";
import "../css/responsive.css";
import Layout from '../layout';
import { Link } from 'react-router-dom';

const Tournament = () => {
    return (
        <Layout>

            <div class="main-content">
                <div class="bread-crumb pvp">
                    <Link>Tournament</Link>
                </div>
                <section class="my-3">
                    <img src="./images/comming-tournament.png" alt="" />
                </section>
                <div class="spacer my-5 py-5"></div>
            </div>

        </Layout>
    )
}

export default Tournament