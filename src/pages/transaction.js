
import Navbar from '../component/Navbar/navbar';
import Sidebar from '../component/Sidebar/sidebar';
import Footer from '../component/Footer/footer';
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/flickity.css";
import "../css/base.css";
import "../css/home.css";
import "../css/deposit.css";
import "../css/transactionTable.css";
import "../css/responsive.css";
import ListFeature from '../component/SectionList/listFeature';
const Transaction = () => {
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);

    const [selectedOption, setSelectedOption] = useState('Deposit');
    const [selectedOption2, setSelectedOption2] = useState('All assets');
    const [selectedOption3, setSelectedOption3] = useState('Past 60 days');
    const [selectedOption4, setSelectedOption4] = useState('All assets');


    const toggleDropdown = (dropdownNumber) => {
        setIsDropdownOpen1(!isDropdownOpen1);

        if (dropdownNumber !== 2) setIsDropdownOpen2(false);
        if (dropdownNumber !== 3) setIsDropdownOpen3(false);
        if (dropdownNumber !== 4) setIsDropdownOpen4(false);
    };
    const toggleDropdown2 = (dropdownNumber) => {
        setIsDropdownOpen2(!isDropdownOpen2);

        if (dropdownNumber !== 3) setIsDropdownOpen3(false);
        if (dropdownNumber !== 4) setIsDropdownOpen4(false);
        if (dropdownNumber !== 1) setIsDropdownOpen1(false);



    };
    const toggleDropdown3 = (dropdownNumber) => {
        setIsDropdownOpen3(!isDropdownOpen3);
        if (dropdownNumber !== 1) setIsDropdownOpen1(false);
        if (dropdownNumber !== 2) setIsDropdownOpen2(false);
        if (dropdownNumber !== 4) setIsDropdownOpen4(false);
    };
    const toggleDropdown4 = (dropdownNumber) => {
        setIsDropdownOpen4(!isDropdownOpen4);
        if (dropdownNumber !== 1) setIsDropdownOpen1(false);
        if (dropdownNumber !== 2) setIsDropdownOpen2(false);
        if (dropdownNumber !== 3) setIsDropdownOpen3(false);
    };


    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen1(false);
    };
    const handleOptionSelect2 = (option) => {
        setSelectedOption2(option);
        setIsDropdownOpen2(false);
    };
    const handleOptionSelect3 = (option) => {
        setSelectedOption3(option);
        setIsDropdownOpen3(false);
    };
    const handleOptionSelect4 = (option) => {
        setSelectedOption4(option);
        setIsDropdownOpen4(false);
    };
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div class="main-deposit">
                    <div class="deposit-content">
                        <button class="btn-wallet btn-setting text-15">Wallet <img class="mobile"
                            src="./images/icons/deposit/icon-exit.svg" alt="" /></button>
                        <div class="feature-content d-flex">
                            <div>
                                <ListFeature />

                            </div>
                            <div class="customtran">
                                <div class="list-button">
                                    <button className="items" onClick={toggleDropdown}>
                                        {selectedOption}
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z" fill="white" />
                                        </svg>
                                    </button>
                                    {isDropdownOpen1 && (
                                        <div className="dropdown-options">
                                            <div className="option" onClick={() => handleOptionSelect('Deposit')}>Deposit</div>
                                            <div className="option" onClick={() => handleOptionSelect('Withdraw')}>Withdraw</div>

                                        </div>
                                    )}
                                    <button className="items" onClick={toggleDropdown2}>
                                        {selectedOption2}
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z" fill="white" />
                                        </svg>
                                    </button>
                                    {isDropdownOpen2 && (
                                        <div className="dropdown-options2">
                                            <div className="option" onClick={() => handleOptionSelect2('USDT')}>USDT</div>


                                        </div>
                                    )}
                                    <button className="items" onClick={toggleDropdown3}>
                                        {selectedOption3}
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z" fill="white" />
                                        </svg>
                                    </button>
                                    {isDropdownOpen3 && (
                                        <div className="dropdown-options3">
                                            <div className="option" onClick={() => handleOptionSelect3('Deposit')}>Past 60 days</div>
                                            <div className="option" onClick={() => handleOptionSelect3('Deposit')}>Past 24 hours</div>
                                            <div className="option" onClick={() => handleOptionSelect3('Deposit')}>Past 7 days</div>
                                            <div className="option" onClick={() => handleOptionSelect3('Deposit')}>Past 30 days</div>
                                            <div className="option" onClick={() => handleOptionSelect3('Deposit')}>Past 90 days</div>
                                        </div>
                                    )}
                                    <button className="items" onClick={toggleDropdown4}>
                                        {selectedOption4}
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z" fill="white" />
                                        </svg>
                                    </button>
                                    {isDropdownOpen4 && (
                                        <div className="dropdown-options4">
                                            <div className="option" onClick={() => handleOptionSelect4('Deposit')}>All assets</div>
                                            <div className="option" onClick={() => handleOptionSelect4('Deposit')}>Complete</div>
                                            <div className="option" onClick={() => handleOptionSelect4('Deposit')}>Processing</div>
                                            <div className="option" onClick={() => handleOptionSelect4('Deposit')}>Failed</div>
                                            <div className="option" onClick={() => handleOptionSelect4('Deposit')}>Canceled</div>
                                        </div>
                                    )}
                                </div>

                                <section class="transaction-table detail-trans">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    Type
                                                </th>
                                                <th>
                                                    Merchant ID
                                                </th>
                                                <th>
                                                    Amount
                                                </th>
                                                <th>
                                                    Time
                                                </th>
                                                <th class="text-end">
                                                    Status
                                                </th>
                                            </tr>

                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Deposit</td>
                                                <td></td>
                                                <td class="amount">+₫ 0.0000000</td>
                                                <td>03/07/2023</td>
                                                <td class="status text-end align-items-center">Success <svg width="8"
                                                    height="6" viewBox="0 0 8 6" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                                        fill="white" />
                                                </svg></td>
                                            </tr>
                                            <tr></tr>
                                            <tr></tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <div class="pagination">
                                                        <p>Total</p>
                                                        <p class="page">1</p>
                                                        <div>
                                                            <button
                                                                class="d-flex align-items-center justify-content-center"><img
                                                                    src="./images/icons/pre.png" alt="previous" /></button>
                                                            <button
                                                                class="d-flex align-items-center justify-content-center"><img
                                                                    src="./images/icons/next.png" alt="next" /></button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    {/* <div class="footer-bg pc"></div> */}
                                    <div class=""></div>

                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="btn-support">
                    <img src="images/icons/livesupport-icon.svg" alt="" />
                </button>
            </main>
            <Footer />

        </div>



    );
}

export default Transaction;