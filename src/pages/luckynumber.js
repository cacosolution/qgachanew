
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/flickity.css"
import "../css/base.css"
import "../css/deposit.css"
import "../css/luckynumber.css"
import "../css/responsive.css"
import Navbar from '../component/Navbar/navbar';
import Sidebar from '../component/Sidebar/sidebar';
import Footer from '../component/Footer/footer';


const LuckyNumber = () => {
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div class="main-deposit">
                    <div class="rules">
                        <div class="top">
                            <div class="lucky-container">
                                <div class="d-flex justify-content-between">
                                    <span>Rules</span>
                                    <img src="./images/icons/deposit/icon-exit.svg" alt="this-is-icon" />
                                </div>
                            </div>
                        </div>

                        <div class="lucky-container">
                            <h2 class="title-play">How to play?</h2>
                        </div>

                        <div class="play">
                            <div class="lucky-container d-flex justify-content-between gap-3">
                                <div class="play-item w-100">
                                    <div class="play-item__image w-100">
                                        <img src="./images/lucky-number/buy-ticket.png" alt="this-is-image" />
                                    </div>
                                    <div class="play-item__content text-center">
                                        <h3 class="text-capitalize mb-1">Buy a ticket</h3>
                                        <p class="text-capitalize">
                                            for $0.1 and choose numbers for the ticket.
                                        </p>
                                    </div>
                                </div>
                                <div class="play-item w-100">
                                    <div class="play-item__image w-100">
                                        <img src="./images/lucky-number/wait-withdraw.png" alt="this-is-image" />
                                    </div>
                                    <div class="play-item__content text-center">
                                        <h3 class="text-capitalize mb-1">Wait For The Draw</h3>
                                        <p class="text-capitalize">
                                            Wait for the draw at 00:00, 08:00, 16:00 UTC+0 daily
                                        </p>
                                    </div>
                                </div>
                                <div class="play-item w-100">
                                    <div class="play-item__image w-100">
                                        <img src="./images/lucky-number/wait-for.png" alt="this-is-image" />
                                    </div>
                                    <div class="play-item__content text-center">
                                        <h3 class="text-capitalize mb-1">Wait For The Draw</h3>
                                        <p class="text-capitalize">
                                            Once the draw is over, come back to this page and check your
                                            prize.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="lucky-container mt-5">
                            <table class="w-100">
                                <thead>
                                    <tr>
                                        <th class="text-start">Winner Name</th>
                                        <th class="text-center">Numbers</th>
                                        <th class="text-end">Prize</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="name-jackpot">
                                            5 NUMBERS <br />
                                            JACKPOT BALL
                                        </td>
                                        <td>
                                            <img class="table-image w-100" src="./images/4number/lucky-number1.png"
                                                alt="this-is-image" />
                                        </td>
                                        <td class="text-end">$300.000 + stack</td>
                                    </tr>
                                    <tr>
                                        <td class="name-jackpot">5 NUMBERS</td>
                                        <td>
                                            <img class="table-image w-100" src="./images/4number/lucky-number1.png"
                                                alt="this-is-image" />
                                        </td>
                                        <td class="text-end">$100.000</td>
                                    </tr>
                                    <tr>
                                        <td class="name-jackpot">
                                            4 NUMBERS <br />
                                            power ball
                                        </td>
                                        <td>
                                            <img class="table-image w-100" src="./images/4number/lucky-number1.png"
                                                alt="this-is-image" />
                                        </td>
                                        <td class="text-end">$10.000</td>
                                    </tr>
                                    <tr>
                                        <td class="name-jackpot">4 NUMBERS</td>
                                        <td>
                                            <img class="table-image w-100" src="./images/4number/lucky-number1.png"
                                                alt="this-is-image" />
                                        </td>
                                        <td class="text-end">$200</td>
                                    </tr>
                                    <tr>
                                        <td class="name-jackpot">
                                            3 NUMBERS<br />
                                            power ball
                                        </td>
                                        <td>
                                            <img class="table-image w-100" src="./images/4number/lucky-number1.png"
                                                alt="this-is-image" />
                                        </td>
                                        <td class="text-end">$100</td>
                                    </tr>
                                    <tr>
                                        <td class="name-jackpot">
                                            2 NUMBERS<br />
                                            power ball
                                        </td>
                                        <td>
                                            <img class="table-image w-100" src="./images/4number/lucky-number1.png"
                                                alt="this-is-image" />
                                        </td>
                                        <td class="text-end">$20</td>
                                    </tr>
                                    <tr>
                                        <td class="name-jackpot">3 NUMBERS</td>
                                        <td>
                                            <img class="table-image w-100" src="./images/4number/lucky-number1.png"
                                                alt="this-is-image" />
                                        </td>
                                        <td class="text-end">$5</td>
                                    </tr>
                                    <tr>
                                        <td class="name-jackpot">
                                            1 NUMBERS<br />
                                            power ball
                                        </td>
                                        <td>
                                            <img class="table-image w-100" src="./images/4number/lucky-number1.png"
                                                alt="this-is-image" />
                                        </td>
                                        <td class="text-end">$3</td>
                                    </tr>
                                    <tr>
                                        <td class="name-jackpot">power ball</td>
                                        <td>
                                            <img class="table-image w-100" src="./images/4number/lucky-number1.png"
                                                alt="this-is-image" />
                                        </td>
                                        <td class="text-end">$2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="content mt-1">
                            <div class="lucky-container">
                                <h2 class="content-title mb-2">Lottery Instructions</h2>

                                <ul class="content-list">
                                    <li>
                                        <span class="content-list__dots d-inline-block rounded-circle me-3"></span>A
                                        provably
                                        fair algorithm
                                        is
                                        used
                                        to draw the lottery prizes.
                                    </li>
                                    <li>
                                        <span class="content-list__dots d-inline-block rounded-circle me-3"></span>Prizes
                                        are
                                        drawn every 8
                                        hours, at
                                        00:00, 08:00, 16:00 UTC+0.
                                    </li>
                                    <li>
                                        <span class="content-list__dots d-inline-block rounded-circle me-3"></span>You can
                                        buy a
                                        ticket for
                                        $0.1. The
                                        sale of tickets stops at 14:55
                                        UTC+0 every day.
                                    </li>
                                    <li>
                                        <span class="content-list__dots d-inline-block rounded-circle me-3"></span>The
                                        player
                                        chooses six
                                        numbers for
                                        each ticket, the first five are
                                        from 1 to 36, and
                                    </li>
                                    <li>
                                        <span class="content-list__dots d-inline-block rounded-circle me-3"></span>the last
                                        one
                                        is from 1 to
                                        10.
                                    </li>
                                    <li>
                                        <span class="content-list__dots d-inline-block rounded-circle me-3"></span>You can
                                        choose numbers
                                        manually or
                                        automatically.
                                    </li>
                                    <li>
                                        <span class="content-list__dots d-inline-block rounded-circle me-3"></span>Each draw
                                        produces six
                                        numbers.
                                    </li>
                                    <li>
                                        <span class="content-list__dots d-inline-block rounded-circle me-3"></span>The more
                                        numbers you
                                        match in
                                        the
                                        first five numbers, greater prize
                                        you will win.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="btn-support" >
                    <img src="images/icons/livesupport-icon.svg" alt="" />
                </button>
            </main>
            <Footer />
        </div>


    );
}

export default LuckyNumber;