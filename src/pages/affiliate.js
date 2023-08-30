import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/affiliate.css";
import "../css/responsive.css";
import Navbar from "../component/Navbar/navbar";
import Sidebar from "../component/Sidebar/sidebar";
import Footer from "../component/Footer/footer";
import BoxOverlay from "../component/Box/BoxOverlay";

import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const Affiliate = () => {
  useEffect(() => {
    const ctx = document.getElementById('chart').getContext('2d');
    var isMobile = window.innerWidth <= 767;
    var tickFontSize = isMobile ? 10 : 15;

    let chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5'],
        datasets: [{
          label: '# of Votes',
          data: [18000, 900, 8000, 55000, 73000],
          borderWidth: 1,
          backgroundColor: ['#D9D9D9', '#D9D9D9', '#D9D9D9', '#D9D9D9', '#9E9E9E'],
          borderRadius: 6,
          barPercentage: 0.6,
          categoryPercentage: 0.8,
          datalabels: {
            anchor: 'end',
            align: 'top',
            formatter: function (value, context) {
              return value > 1000 ? '$' + value / 1000 + '.000' : '$' + value;
            },
            color: 'white',
            font: {
              size: tickFontSize,
              family: 'Montserrat'
            }
          }
        }]
      },
      plugins: [ChartDataLabels],
      options: {
        responsive: true,
        scales: {
          x: {
            ticks: {
              color: 'white',
              font: {
                family: 'Montserrat',
                size: tickFontSize,
              }
            },

          },
          y: {
            beginAtZero: true,
            max: 80000,
            stepSize: 10000,
            ticks: {
              color: 'white',
              font: {
                family: 'Montserrat',
                size: tickFontSize,
              },
              callback: function (value, index) {
                return value > 1000 ? this.getLabelForValue(value / 1000) + 'k' : 0;
              },
            },
            grid: {
              color: '#15566d',

            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div class="container-wrapper">
      <Navbar />
      <main>
        <Sidebar />
        <div class="">
          <div class="affiliate-content">
            <button class="mobile btn-affi">affiliate</button>
            <div class="header-affi">
              <div class="header-content">
                <button class="active btn-general">
                  General
                </button>
                <button class="btn-network">
                  Network Management
                </button>
              </div>
            </div>

            <div class="container-affiliate">
              <div class="body-affi d-flex">
                <div class="box-default box-main">
                  <div class="d-flex main-info">
                    <div class="total-info">
                      <div class="total-reward d-flex box-sub">
                        <img src="./images/icons/treasure.png" alt="" />
                        <div class="info">
                          <h3>TOTAL REWARD EARNED:</h3>
                          <span class="value">$ 0.00</span>
                        </div>
                      </div>
                      <div class="total-refer d-flex box-sub">
                        <img src="./images/icons/adfriend.png" alt="" />
                        <div class="info">
                          <h3>TOTAL FRIENDS REFERRED:</h3>
                          <span class="value">0</span>
                        </div>
                      </div>
                    </div>
                    <div class="commission box-sub">
                      <div class="commit-head d-flex align-items-center">
                        <img src="./images/icons/commit.png" alt="" />
                        <h3>COMMISSION REWARDS</h3>
                        <button class="d-flex align-items-center">Detail
                          <svg class="ms-1" xmlns="http://www.w3.org/2000/svg" width="6"
                            height="8" viewBox="0 0 6 8" fill="none">
                            <path
                              d="M5.07814 3.23178C5.55789 3.63157 5.55789 4.36843 5.07813 4.76822L1.64018 7.63318C0.988856 8.17595 0 7.7128 0 6.86496V1.13504C0 0.287204 0.988857 -0.175952 1.64018 0.36682L5.07814 3.23178Z"
                              fill="#E275F9" />
                          </svg></button>
                      </div>
                      <div class="commit-body">
                        <h2 class="value">$ 0.00</h2>
                        <button id="btn-withdraw">Withdraw</button>
                      </div>
                    </div>
                  </div>
                  <div class="nav-chart">
                    <div class="feature-detail">
                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="crypto-tab" data-toggle="tab"
                            data-target="#thismonth" type="button" role="tab"
                            aria-controls="thismonth" aria-selected="true">This month</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="lastmonth-tab" data-toggle="tab"
                            data-target="#lastmonth" type="button" role="tab"
                            aria-controls="lastmonth" aria-selected="false">Last month</button>
                        </li>
                      </ul>
                      <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="thismonth" role="tabpanel"
                          aria-labelledby="thismonth-tab">
                          <div
                            class="list-info-chart d-flex align-items-start justify-content-between">
                            <div class="start d-flex">
                              <h5>Stats</h5>
                              <div class="total">
                                <h6>Total</h6>
                                <span class="value-total">
                                  $150.000
                                </span>
                              </div>
                            </div>
                            <div class="total">
                              <h6>By time</h6>
                              <span class="value-total">
                                01/07/23 - 31/07/23
                              </span>
                            </div>
                          </div>
                          <div class="chart-wrapper d-flex justify-content-center">

                            <canvas id="chart"></canvas>

                          </div>


                        </div>
                        <div class="tab-pane fade" id="lastmonth" role="tabpanel"
                          aria-labelledby="lastmonth-tab">
                          <div class="p-5">
                            lastmonth
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box-right">
                  <div class="box-default box-invite">
                    <div class="main-bg">
                      <h1>INVITE A FRIEND TO GET: </h1>
                      <p><strong>$0,000.00 </strong>REFERRAL REWARDS</p>
                      <p><strong>25% </strong>COMMISSION REWARDS</p>
                    </div>
                    <div class="info-item">
                      <label for="">Referral Code</label>
                      <div class="input-wrap">
                        <input value="abcdefgh" />
                      </div>
                    </div>
                    <div class="info-item">
                      <label for="">Referral Link</label>
                      <div class="input-wrap">
                        <input value="https://q-gacha/abcdefgh" />
                      </div>
                    </div>

                    <div class="d-flex align-items-center justify-content-center">
                      <button class="btn-share">Share via social media</button>
                    </div>
                  </div>
                  <div class="box-default box-vol">
                    <div class="vol-header d-flex">
                      <img src="./images/icons/charticon.svg" alt="" />
                      <h3>Network Vol Stats</h3>

                    </div>
                    <table>
                      <tr>
                        <th>month</th>
                        <th>Volume</th>
                      </tr>
                      <tr>
                        <td>07/2023</td>
                        <td>$999.999</td>
                      </tr>
                      <tr>
                        <td>07/2023</td>
                        <td>$999.999</td>
                      </tr>
                      <tr>
                        <td>07/2023</td>
                        <td>$999.999</td>
                      </tr>
                      <tr>
                        <td>07/2023</td>
                        <td>$999.999</td>
                      </tr>
                      <tr>
                        <td>07/2023</td>
                        <td>$999.999</td>
                      </tr>

                    </table>
                    <div class="total-vol d-flex justify-content-between align-items-center">
                      <h4>Total</h4> <span>$999.999.999</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="box-default box-support">
                <div class="support-header d-flex align-items-center">
                  <img src="./images/icons/earphone-headphone-headset_svgrepo.com.svg" alt="" />
                  <h3>Get in touch</h3>
                </div>
                <div class="body-support d-flex">
                  <div class="robot d-flex flex-column align-items-center justify-content-center">
                    <img src="./images/icons/bot.d558e5a7 1.png" alt="" />
                    <span class="robot-name">Support001</span>
                  </div>
                  <div class="info">
                    <h5>Email</h5>
                    <div class="d-flex  mt-1">
                      <svg width="19" height="17" viewBox="0 0 19 17" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector"
                          d="M11.8611 6.5339H7.13889M1.02675 6.98465L7.82323 11.327C8.42909 11.7126 8.73207 11.9053 9.05951 11.9802C9.34879 12.0464 9.65045 12.0464 9.93983 11.9802C10.2673 11.9053 10.5702 11.7126 11.1761 11.327L17.9726 6.98465M7.89265 1.63748L2.41491 4.92129C1.89836 5.23095 1.6401 5.38577 1.45277 5.59507C1.28697 5.78032 1.16222 5.99572 1.08605 6.22828C1 6.49102 1 6.78214 1 7.36437V13.1151C1 14.1249 1 14.6298 1.20588 15.0155C1.38697 15.3548 1.67593 15.6306 2.03135 15.8035C2.4354 16 2.96435 16 4.02222 16H14.9778C16.0356 16 16.5646 16 16.9687 15.8035C17.3241 15.6306 17.6131 15.3548 17.7941 15.0155C18 14.6298 18 14.1249 18 13.1151V7.36437C18 6.78214 18 6.49102 17.914 6.22828C17.8377 5.99572 17.7131 5.78032 17.5472 5.59507C17.3599 5.38577 17.1016 5.23095 16.5851 4.92129L11.1073 1.63747C10.5243 1.28801 10.2329 1.11328 9.92018 1.04517C9.64355 0.984944 9.35644 0.984944 9.07982 1.04517C8.76711 1.11328 8.47566 1.28801 7.89265 1.63748Z"
                          stroke="#05E8FF" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                      <span>Support@qgacha.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="manage-wrapper">
                <div class="box-default box-manage">
                  <div class="box-header">
                    <h2>Manage Your Affiliate</h2>

                  </div>
                  <div class="box-body">
                    <div class="row">
                      <div class="col-12 col-sm-4">
                        <h5>Search Type</h5>
                        <button class="btn-purple btn-user">Username</button>
                      </div>
                      <div class="col-12 col-sm-4">
                        <h5>View your referrals by Username</h5>
                        <input type="text" placeholder="Enter Username" />
                      </div>
                      <div class="col-12 col-sm-4 d-flex flex-column justify-content-end">
                        <button class="btn-purple btn-search">Search</button>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="box-result">
                  <div class="box-header d-flex align-items-center justify-content-between">
                    <h2>Search Results</h2>
                    <div class="list-btn">
                      <span class="pc">Time Range:</span>
                      <button class="active">
                        Yesterday
                      </button>
                      <button>
                        Last 7 days
                      </button>
                      <button>
                        Last 30 days
                      </button>
                      <button>
                        All Time
                      </button>
                    </div>
                  </div>

                  <table class="table table-bordered">
                    <tr>
                      <th>Username</th>
                      <th>Total Vol</th>
                      <th>Com. Earned</th>

                    </tr>
                    <tr>
                      <td>JapanTeam</td>
                      <td>3.000.000</td>
                      <td>240.000</td>
                    </tr>
                    <tr>
                      <td>koreanTeam</td>
                      <td>400.000</td>
                      <td>32.000</td>
                    </tr>
                    <tr>
                      <td>CanadaTeam</td>
                      <td>800.000</td>
                      <td>48.000</td>
                    </tr>
                    <tr>
                      <td>USATeam</td>
                      <td>1.800.000</td>
                      <td>72.000</td>
                    </tr>
                    <tr>
                      <td>philippines</td>
                      <td>2.800.000</td>
                      <td>140.000</td>
                    </tr>
                  </table>
                </div>
              </div>

            </div>
          </div>

          <Footer />
        </div>
      </main>
      <BoxOverlay />

    </div>
  );
};

export default Affiliate;
