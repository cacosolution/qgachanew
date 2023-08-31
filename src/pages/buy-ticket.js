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

const buyTicket = () => {
  return (
    <div class="container-wrapper">
      <main>
        <div class="body-content-wrapper">
          <div class="header">
            <span class="header-desc"> Buy Lottery Tickets</span>
            <button class="exit-btn">x</button>
          </div>
          <div class="body">
            <div class="number-tickets-wrapper">
              <div class="body-number-tickets">
                <span class="body-number-desc">Numbers Of Ticket</span>
                <p class="body-number-complain">
                  1 Ticket = 1 <span class="body-number-currency">USDT</span>
                </p>
              </div>
              <div class="ticket-number-input-container">
                <div class="ticket-number-input">
                  <img
                    src="./images/buy-ticket/sub.png"
                    class="ticket-number-input-img"
                    alt=""
                  />
                  <span id="ticket-number-input-value">5</span>
                  <img
                    src="./images/buy-ticket/add.png"
                    class="ticket-number-input-img"
                    alt=""
                  />
                </div>
                <div class="ticket-number-suggest">
                  <button class="ticket-number-suggest-btn">20</button>
                  <button class="ticket-number-suggest-btn">50</button>
                  <button class="ticket-number-suggest-btn">100</button>
                </div>
              </div>
              <div class="completed">
                <div class="completed-container d-flex align-items-center justify-content-between">
                  <p class="completed-desc">
                    Completed <span id="complete-number">0</span> /{" "}
                    <span id="complete-total">5</span>
                    Ticket<span class="many">(S)</span>
                  </p>
                  <div class="completed-btns">
                    <span class="complete-btn   complete-btn-quick">
                      Quick pick
                    </span>
                    <span class="complete-btn   complete-btn-clear">
                      Clear all
                    </span>
                  </div>
                </div>
                <p class="completed-complain">
                  <span class="completed-complain-text">
                    You can only handpick 10 tickets of your own numbers, we
                    will automatically generate the rest of the tickets.
                  </span>
                </p>
              </div>
              <div class="choose-section">
                <div class="choose-table choose-table--1">
                  <div class="choose-status">
                    <span class="choose-number">0</span>/
                    <span class="choose-total">6</span>
                  </div>
                  <div class="choose-table-container">
                    <div class="choose-table-header">Choose 5 numbers</div>
                    <div class="choose-36-numbers">
                      <div class="choose-36-number-row choose-36-number-row--1">
                        <span class="choose-36-numbers-btn flex-center-row">
                          1
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          2
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          3
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          4
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          5
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          6
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--2">
                        <span class="choose-36-numbers-btn flex-center-row">
                          7
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          8
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          9
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          10
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          11
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          12
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--3">
                        <span class="choose-36-numbers-btn flex-center-row">
                          13
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          14
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          15
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          16
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          17
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          18
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--4">
                        <span class="choose-36-numbers-btn flex-center-row">
                          19
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          20
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          21
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          22
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          23
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          24
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--5">
                        <span class="choose-36-numbers-btn flex-center-row">
                          25
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          26
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          27
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          28
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          29
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          30
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--6">
                        <span class="choose-36-numbers-btn flex-center-row">
                          31
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          32
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          33
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          34
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          35
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          36
                        </span>
                      </div>
                    </div>
                    <div class="choose-jackpot-ball">
                      <p class="choose-jackpot-ball-text">
                        Choose 1 Jackpot Ball
                      </p>
                      <div class="choose-jackpot-ball-container">
                        <div class="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              1
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              2
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              3
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              4
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              5
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              6
                            </span>
                          </p>
                        </div>
                        <div class="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              7
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              8
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              9
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              10
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="choose-table choose-table--2">
                  <div class="choose-status">
                    <span class="choose-number">0</span>/
                    <span class="choose-total">6</span>
                  </div>
                  <div class="choose-table-container">
                    <div class="choose-table-header">Choose 5 numbers</div>
                    <div class="choose-36-numbers">
                      <div class="choose-36-number-row choose-36-number-row--1">
                        <span class="choose-36-numbers-btn flex-center-row">
                          1
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          2
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          3
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          4
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          5
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          6
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--2">
                        <span class="choose-36-numbers-btn flex-center-row">
                          7
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          8
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          9
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          10
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          11
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          12
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--3">
                        <span class="choose-36-numbers-btn flex-center-row">
                          13
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          14
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          15
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          16
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          17
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          18
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--4">
                        <span class="choose-36-numbers-btn flex-center-row">
                          19
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          20
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          21
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          22
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          23
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          24
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--5">
                        <span class="choose-36-numbers-btn flex-center-row">
                          25
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          26
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          27
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          28
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          29
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          30
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--6">
                        <span class="choose-36-numbers-btn flex-center-row">
                          31
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          32
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          33
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          34
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          35
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          36
                        </span>
                      </div>
                    </div>
                    <div class="choose-jackpot-ball">
                      <p class="choose-jackpot-ball-text">
                        Choose 1 Jackpot Ball
                      </p>
                      <div class="choose-jackpot-ball-container">
                        <div class="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              1
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              2
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              3
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              4
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              5
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              6
                            </span>
                          </p>
                        </div>
                        <div class="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              7
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              8
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              9
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              10
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="choose-table choose-table--3">
                  <div class="choose-status">
                    <span class="choose-number">0</span>/
                    <span class="choose-total">6</span>
                  </div>
                  <div class="choose-table-container">
                    <div class="choose-table-header">Choose 5 numbers</div>
                    <div class="choose-36-numbers">
                      <div class="choose-36-number-row choose-36-number-row--1">
                        <span class="choose-36-numbers-btn flex-center-row">
                          1
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          2
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          3
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          4
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          5
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          6
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--2">
                        <span class="choose-36-numbers-btn flex-center-row">
                          7
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          8
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          9
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          10
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          11
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          12
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--3">
                        <span class="choose-36-numbers-btn flex-center-row">
                          13
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          14
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          15
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          16
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          17
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          18
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--4">
                        <span class="choose-36-numbers-btn flex-center-row">
                          19
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          20
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          21
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          22
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          23
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          24
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--5">
                        <span class="choose-36-numbers-btn flex-center-row">
                          25
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          26
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          27
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          28
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          29
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          30
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--6">
                        <span class="choose-36-numbers-btn flex-center-row">
                          31
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          32
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          33
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          34
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          35
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          36
                        </span>
                      </div>
                    </div>
                    <div class="choose-jackpot-ball">
                      <p class="choose-jackpot-ball-text">
                        Choose 1 Jackpot Ball
                      </p>
                      <div class="choose-jackpot-ball-container">
                        <div class="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              1
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              2
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              3
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              4
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              5
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              6
                            </span>
                          </p>
                        </div>
                        <div class="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              7
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              8
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              9
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              10
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="choose-table choose-table--4">
                  <div class="choose-status">
                    <span class="choose-number">0</span>/
                    <span class="choose-total">6</span>
                  </div>
                  <div class="choose-table-container">
                    <div class="choose-table-header">Choose 5 numbers</div>
                    <div class="choose-36-numbers">
                      <div class="choose-36-number-row choose-36-number-row--1">
                        <span class="choose-36-numbers-btn flex-center-row">
                          1
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          2
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          3
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          4
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          5
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          6
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--2">
                        <span class="choose-36-numbers-btn flex-center-row">
                          7
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          8
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          9
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          10
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          11
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          12
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--3">
                        <span class="choose-36-numbers-btn flex-center-row">
                          13
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          14
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          15
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          16
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          17
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          18
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--4">
                        <span class="choose-36-numbers-btn flex-center-row">
                          19
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          20
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          21
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          22
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          23
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          24
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--5">
                        <span class="choose-36-numbers-btn flex-center-row">
                          25
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          26
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          27
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          28
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          29
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          30
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--6">
                        <span class="choose-36-numbers-btn flex-center-row">
                          31
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          32
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          33
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          34
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          35
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          36
                        </span>
                      </div>
                    </div>
                    <div class="choose-jackpot-ball">
                      <p class="choose-jackpot-ball-text">
                        Choose 1 Jackpot Ball
                      </p>
                      <div class="choose-jackpot-ball-container">
                        <div class="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              1
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              2
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              3
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              4
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              5
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              6
                            </span>
                          </p>
                        </div>
                        <div class="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              7
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              8
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              9
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              10
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="choose-table choose-table--5">
                  <div class="choose-status">
                    <span class="choose-number">0</span>/
                    <span class="choose-total">6</span>
                  </div>
                  <div class="choose-table-container">
                    <div class="choose-table-header">Choose 5 numbers</div>
                    <div class="choose-36-numbers">
                      <div class="choose-36-number-row choose-36-number-row--1">
                        <span class="choose-36-numbers-btn flex-center-row">
                          1
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          2
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          3
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          4
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          5
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          6
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--2">
                        <span class="choose-36-numbers-btn flex-center-row">
                          7
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          8
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          9
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          10
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          11
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          12
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--3">
                        <span class="choose-36-numbers-btn flex-center-row">
                          13
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          14
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          15
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          16
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          17
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          18
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--4">
                        <span class="choose-36-numbers-btn flex-center-row">
                          19
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          20
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          21
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          22
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          23
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          24
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--5">
                        <span class="choose-36-numbers-btn flex-center-row">
                          25
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          26
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          27
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          28
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          29
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          30
                        </span>
                      </div>
                      <div class="choose-36-number-row choose-36-number-row--6">
                        <span class="choose-36-numbers-btn flex-center-row">
                          31
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          32
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          33
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          34
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          35
                        </span>
                        <span class="choose-36-numbers-btn flex-center-row">
                          36
                        </span>
                      </div>
                    </div>
                    <div class="choose-jackpot-ball">
                      <p class="choose-jackpot-ball-text">
                        Choose 1 Jackpot Ball
                      </p>
                      <div class="choose-jackpot-ball-container">
                        <div class="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              1
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              2
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              3
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              4
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              5
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              6
                            </span>
                          </p>
                        </div>
                        <div class="choose-jackpot-ball-row  choose-jackpot-ball-row--1">
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              7
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              8
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
                              9
                            </span>
                          </p>
                          <p class="choose-jackpot-ball-item ">
                            <span class="choose-jackpot-ball-btn-content flex-center-row">
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
            <div class="body-separate"></div>
            <div class="payment-wrapper">
              <div class="payment">
                <p class="payment-desc">Pay with</p>
                <div class="payment-section">
                  <div id="payment-curency">USDT</div>
                  <div class="payment-amount-section">
                    <p class="payment-balance">balance</p>
                    <p class="payment-balance-amount">
                      <span class="payment-local-currency">đ</span>
                      <span class="payment-quantity">0.00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="second-body-content">
                <div class="ticket">
                  <p class="ticket-complain">
                    <span class="ticket-complain-number">5</span> tickets
                  </p>
                  <p class="ticket-total">
                    <span id="ticket-quantity">1</span>
                    <span>ticket</span>
                    <span class="tikcet-x">x</span>
                    <span id="ticket-number">5</span>
                  </p>
                </div>
                <div class="total">
                  <p class="total-desc">Total</p>
                  <p class="total-price">
                    <span id="total-price-number">5</span>
                    <span id="total-price-currency">USDT</span>
                  </p>
                </div>
                <button class="btn__buy-ticket">BUY TICKET</button>
              </div>
            </div>
          </div>
        </div>
        <BoxOverlay />
      </main>
    </div>
  );
};

export default buyTicket;
