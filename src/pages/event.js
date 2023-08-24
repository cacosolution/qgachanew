import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import Navbar from "../component/Navbar/navbar";
import Sidebar from "../component/Sidebar/sidebar";
import Footer from "../component/Footer/footer";

const event = () => {
  return (
    <div class="container-wrapper">
      <Navbar />
      <main>
        <Sidebar />
        <div className="main-home">
          <div class="main-content main-event">
            <button class="btn-event">Event</button>
            <div class="banner-event">
              <img src="./images/event1.png" alt="banner-home" />
            </div>
            <div class="group__btn-event d-flex align-items-center">
              <button class="btn-event btn-last">Latest Event</button>
              <button class="btn-event btn-archived">Archived</button>
            </div>

            <table>
              <tr>
                <th>Ordinal</th>
                <th>Date</th>
                <th>Event</th>
                <th>archive</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>1</td>
                <td>10/8/2023</td>
                <td>Name Event</td>
                <td>Reward event</td>
                <td class="status confirm">Confirmed</td>
              </tr>
              <tr>
                <td>2</td>
                <td>10/8/2023</td>
                <td>Name Event</td>
                <td>Reward event</td>
                <td class="status unconfirm">Unconfirmed</td>
              </tr>
            </table>

            <div class="spacer mb-5 pb-5"></div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
};

export default event;
