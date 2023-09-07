import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/buy-ticket.css";
import Navbar from "../component/Navbar/navbar";
import Sidebar from "../component/Sidebar/sidebar";
import Footer from "../component/Footer/footer";
import BoxOverlay from "../component/Box/BoxOverlay";

const BuyTicket = () => {
  return (
    <div className="container-wrapper">
      <main>
        <div className="body-content-wrapper">
          <div className="header">
            <span className="header-desc"> Buy Lottery Tickets</span>
            <button className="exit-btn">x</button>
          </div>
          <div className="body">
            <div className="number-tickets-wrapper">
              <div className="body-number-tickets">
                <span className="body-number-desc">Numbers Of Ticket</span>
                <p className="body-number-complain">
                  1 Ticket = 1 <span className="body-number-currency">USDT</span>
                </p>
              </div>
              <div className="ticket-number-input-container">
                <div className="ticket-number-input">
                  <img
                    src="./images/buy-ticket/sub.png"
                    className="ticket-number-input-img"
                    alt=""
                  />
                  <span id="ticket-number-input-value">5</span>
                  <img
                    src="./images/buy-ticket/add.png"
                    className="ticket-number-input-img"
                    alt=""
                  />
                </div>
                <div className="ticket-number-suggest">
                  <button className="ticket-number-suggest-btn">20</button>
                  <button className="ticket-number-suggest-btn">50</button>
                  <button className="ticket-number-suggest-btn">100</button>
                </div>
              </div>
              <div className="completed">
                <div className="completed-container d-flex align-items-center justify-content-between">
                  <p className="completed-desc">
                    Completed <span id="complete-number">0</span> /{" "}
                    <span id="complete-total">5</span>
                    Ticket<span className="many">(S)</span>
                  </p>
                  <div className="completed-btns">
                    <span className="complete-btn   complete-btn-quick">
                      Quick pick
                    </span>
                    <span className="complete-btn   complete-btn-clear">
                      Clear all
                    </span>
                  </div>
                </div>
                <p className="completed-complain">
                  <span className="completed-complain-text">
                    You can only handpick 10 tickets of your own numbers, we
                    will automatically generate the rest of the tickets.
                  </span>
                </p>
              </div>
              <div className="choose-section">
                <div className="choose-table choose-table--1">
                  <div className="choose-status">
                    <span className="choose-number">0</span>/
                    <span className="choose-total">6</span>
                  </div>
                  <div className="choose-table-container">
                    <div className="choose-table-header">Choose 5 numbers</div>
                    <div className="choose-36-numbers">
                      <div className="choose-36-number-row choose-36-number-row--1">
                        <span className="choose-36-numbers-btn flex-center-row">
                          1
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          2
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          3
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          4
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          5
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          6
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--2">
                        <span className="choose-36-numbers-btn flex-center-row">
                          7
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          8
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          9
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          10
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          11
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          12
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--3">
                        <span className="choose-36-numbers-btn flex-center-row">
                          13
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          14
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          15
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          16
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          17
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          18
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--4">
                        <span className="choose-36-numbers-btn flex-center-row">
                          19
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          20
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          21
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          22
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          23
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          24
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--5">
                        <span className="choose-36-numbers-btn flex-center-row">
                          25
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          26
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          27
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          28
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          29
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          30
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--6">
                        <span className="choose-36-numbers-btn flex-center-row">
                          31
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          32
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          33
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          34
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          35
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          36
                        </span>
                      </div>
                    </div>
                    <div className="choose-jackpot-ball">
                      <p className="choose-jackpot-ball-text">
                        Choose 1 Jackpot Ball
                      </p>
                      <div className="choose-jackpot-ball-container">
                        <div className="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              1
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              2
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              3
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              4
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              5
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              6
                            </span>
                          </p>
                        </div>
                        <div className="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              7
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              8
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              9
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              10
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="choose-table choose-table--2">
                  <div className="choose-status">
                    <span className="choose-number">0</span>/
                    <span className="choose-total">6</span>
                  </div>
                  <div className="choose-table-container">
                    <div className="choose-table-header">Choose 5 numbers</div>
                    <div className="choose-36-numbers">
                      <div className="choose-36-number-row choose-36-number-row--1">
                        <span className="choose-36-numbers-btn flex-center-row">
                          1
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          2
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          3
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          4
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          5
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          6
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--2">
                        <span className="choose-36-numbers-btn flex-center-row">
                          7
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          8
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          9
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          10
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          11
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          12
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--3">
                        <span className="choose-36-numbers-btn flex-center-row">
                          13
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          14
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          15
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          16
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          17
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          18
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--4">
                        <span className="choose-36-numbers-btn flex-center-row">
                          19
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          20
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          21
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          22
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          23
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          24
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--5">
                        <span className="choose-36-numbers-btn flex-center-row">
                          25
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          26
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          27
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          28
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          29
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          30
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--6">
                        <span className="choose-36-numbers-btn flex-center-row">
                          31
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          32
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          33
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          34
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          35
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          36
                        </span>
                      </div>
                    </div>
                    <div className="choose-jackpot-ball">
                      <p className="choose-jackpot-ball-text">
                        Choose 1 Jackpot Ball
                      </p>
                      <div className="choose-jackpot-ball-container">
                        <div className="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              1
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              2
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              3
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              4
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              5
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              6
                            </span>
                          </p>
                        </div>
                        <div className="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              7
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              8
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              9
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              10
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="choose-table choose-table--3">
                  <div className="choose-status">
                    <span className="choose-number">0</span>/
                    <span className="choose-total">6</span>
                  </div>
                  <div className="choose-table-container">
                    <div className="choose-table-header">Choose 5 numbers</div>
                    <div className="choose-36-numbers">
                      <div className="choose-36-number-row choose-36-number-row--1">
                        <span className="choose-36-numbers-btn flex-center-row">
                          1
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          2
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          3
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          4
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          5
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          6
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--2">
                        <span className="choose-36-numbers-btn flex-center-row">
                          7
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          8
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          9
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          10
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          11
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          12
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--3">
                        <span className="choose-36-numbers-btn flex-center-row">
                          13
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          14
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          15
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          16
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          17
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          18
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--4">
                        <span className="choose-36-numbers-btn flex-center-row">
                          19
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          20
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          21
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          22
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          23
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          24
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--5">
                        <span className="choose-36-numbers-btn flex-center-row">
                          25
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          26
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          27
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          28
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          29
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          30
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--6">
                        <span className="choose-36-numbers-btn flex-center-row">
                          31
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          32
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          33
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          34
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          35
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          36
                        </span>
                      </div>
                    </div>
                    <div className="choose-jackpot-ball">
                      <p className="choose-jackpot-ball-text">
                        Choose 1 Jackpot Ball
                      </p>
                      <div className="choose-jackpot-ball-container">
                        <div className="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              1
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              2
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              3
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              4
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              5
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              6
                            </span>
                          </p>
                        </div>
                        <div className="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              7
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              8
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              9
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              10
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="choose-table choose-table--4">
                  <div className="choose-status">
                    <span className="choose-number">0</span>/
                    <span className="choose-total">6</span>
                  </div>
                  <div className="choose-table-container">
                    <div className="choose-table-header">Choose 5 numbers</div>
                    <div className="choose-36-numbers">
                      <div className="choose-36-number-row choose-36-number-row--1">
                        <span className="choose-36-numbers-btn flex-center-row">
                          1
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          2
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          3
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          4
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          5
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          6
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--2">
                        <span className="choose-36-numbers-btn flex-center-row">
                          7
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          8
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          9
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          10
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          11
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          12
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--3">
                        <span className="choose-36-numbers-btn flex-center-row">
                          13
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          14
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          15
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          16
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          17
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          18
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--4">
                        <span className="choose-36-numbers-btn flex-center-row">
                          19
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          20
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          21
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          22
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          23
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          24
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--5">
                        <span className="choose-36-numbers-btn flex-center-row">
                          25
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          26
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          27
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          28
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          29
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          30
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--6">
                        <span className="choose-36-numbers-btn flex-center-row">
                          31
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          32
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          33
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          34
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          35
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          36
                        </span>
                      </div>
                    </div>
                    <div className="choose-jackpot-ball">
                      <p className="choose-jackpot-ball-text">
                        Choose 1 Jackpot Ball
                      </p>
                      <div className="choose-jackpot-ball-container">
                        <div className="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              1
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              2
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              3
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              4
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              5
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              6
                            </span>
                          </p>
                        </div>
                        <div className="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              7
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              8
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              9
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              10
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="choose-table choose-table--5">
                  <div className="choose-status">
                    <span className="choose-number">0</span>/
                    <span className="choose-total">6</span>
                  </div>
                  <div className="choose-table-container">
                    <div className="choose-table-header">Choose 5 numbers</div>
                    <div className="choose-36-numbers">
                      <div className="choose-36-number-row choose-36-number-row--1">
                        <span className="choose-36-numbers-btn flex-center-row">
                          1
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          2
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          3
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          4
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          5
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          6
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--2">
                        <span className="choose-36-numbers-btn flex-center-row">
                          7
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          8
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          9
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          10
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          11
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          12
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--3">
                        <span className="choose-36-numbers-btn flex-center-row">
                          13
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          14
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          15
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          16
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          17
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          18
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--4">
                        <span className="choose-36-numbers-btn flex-center-row">
                          19
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          20
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          21
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          22
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          23
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          24
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--5">
                        <span className="choose-36-numbers-btn flex-center-row">
                          25
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          26
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          27
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          28
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          29
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          30
                        </span>
                      </div>
                      <div className="choose-36-number-row choose-36-number-row--6">
                        <span className="choose-36-numbers-btn flex-center-row">
                          31
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          32
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          33
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          34
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          35
                        </span>
                        <span className="choose-36-numbers-btn flex-center-row">
                          36
                        </span>
                      </div>
                    </div>
                    <div className="choose-jackpot-ball">
                      <p className="choose-jackpot-ball-text">
                        Choose 1 Jackpot Ball
                      </p>
                      <div className="choose-jackpot-ball-container">
                        <div className="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              1
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              2
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              3
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              4
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              5
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              6
                            </span>
                          </p>
                        </div>
                        <div className="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              7
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              8
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              9
                            </span>
                          </p>
                          <p className="choose-jackpot-ball-item ">
                            <span className="choose-jackpot-ball-btn-content flex-center-row">
                              10
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="body-separate"></div>
            <div className="payment-wrapper">
              <div className="payment">
                <p className="payment-desc">Pay with</p>
                <div className="payment-section">
                  <div id="payment-curency">USDT</div>
                  <div className="payment-amount-section">
                    <p className="payment-balance">balance</p>
                    <p className="payment-balance-amount">
                      <span className="payment-local-currency">đ</span>
                      <span className="payment-quantity">0.00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="second-body-content">
                <div className="ticket">
                  <p className="ticket-complain">
                    <span className="ticket-complain-number">5</span> tickets
                  </p>
                  <p className="ticket-total">
                    <span id="ticket-quantity">1</span>
                    <span>ticket</span>
                    <span className="tikcet-x">x</span>
                    <span id="ticket-number">5</span>
                  </p>
                </div>
                <div className="total">
                  <p className="total-desc">Total</p>
                  <p className="total-price">
                    <span id="total-price-number">5</span>
                    <span id="total-price-currency">USDT</span>
                  </p>
                </div>
                <button className="btn__buy-ticket">BUY TICKET</button>
              </div>
            </div>
          </div>
        </div>
        <BoxOverlay />
      </main>
    </div>
  );
};

export default BuyTicket;
