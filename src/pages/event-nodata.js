import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/responsive.css";
import Layout from '../layout';

const EventNodata = () => {

    return (
        <Layout>
            <div className="main-content main-event">
                <button className="btn-event">Event</button>
                <div className="banner-event">
                    <img src="./images/event1.png" alt="banner-home" />
                </div>
                <div className="group__btn-event d-flex align-items-center">
                    <button className="btn-event btn-last">Latest Event</button>
                    <button className="btn-event btn-archived">Archived</button>
                </div>

                <div className="m-5">
                    <div className="p-5 text-center">
                        Oops! There is no data yet!
                    </div>
                </div>

                <div className="spacer mb-5 pb-5"></div>
            </div>
        </Layout>
    )
}

export default EventNodata