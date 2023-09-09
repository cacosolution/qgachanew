import React, { useState } from 'react'
import { Button, Modal } from 'antd';

const Transaction = () => {
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);

    const [selectedOption, setSelectedOption] = useState('Deposit');
    const [selectedOption2, setSelectedOption2] = useState('All assets');
    const [selectedOption3, setSelectedOption3] = useState('Past 60 days');
    const [selectedOption4, setSelectedOption4] = useState('All assets');

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlerModal = () => {
        setIsModalOpen(!isModalOpen)
    }


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

        <div className="customtran" style={{ width: "100%" }}>
            <div className="list-button">
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


            {isModalOpen && (
                <div className='transaction-detail2' >
                    <section className="transaction-modal-Trans">
                        <div className="gift-ticket-header">
                            <p>transaction detail</p>
                            <button style={{ background: "none", border: "none" }}>
                                <img src="./images/icons/deposit/icon-exit.svg" alt="close" onClick={() => setIsModalOpen(!isModalOpen)} />
                            </button>
                        </div>

                        <div className="transaction-detail-content">

                            <div className="transaction-detail-currency">
                                <img src="./images/Rectangle.png" alt="Rectangle" />
                                <div>
                                    <p>+ 0.000000</p>
                                    <span>uSDT</span>
                                </div>
                            </div>

                            <div className="transaction-detail-info">
                                <div>
                                    <p>Status</p>
                                    <span id="status">Success</span>
                                </div>
                                <div>
                                    <p>Txid</p>
                                    <span className="d-flex">abc123456789 <img className="ms-1"
                                        src="./images/icons/deposit/icon-copy.svg" alt="copy" /></span>

                                </div>
                                <div>
                                    <p>Order ID</p>
                                    <span className="d-flex">ABC7878y7990890 <img className="ms-1"
                                        src="./images/icons/deposit/icon-copy.svg" alt="copy" /></span>

                                </div>
                                <div>
                                    <p>Time</p>
                                    <span>03/07/2023</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


            )
            }


            <section className="transaction-table detail-trans">
                <table>
                    <thead>
                        <tr >
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
                            <th className="text-end">
                                Status
                            </th>
                        </tr>

                    </thead>

                    <tbody>
                        <tr style={{ height: "38px" }}>
                            <td>Deposit</td>
                            <td></td>
                            <td className="amount">+₫ 0.0000000</td>
                            <td>03/07/2023</td>
                            <td className="status text-end align-items-center" onClick={handlerModal}>

                                <button className='text-s13-w7' style={{ background: "none", border: "none", color: "#E275F9", marginRight: "10px" }}>
                                    Success <svg width="8"
                                        height="6" viewBox="0 0 8 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                            fill="white" />
                                    </svg>
                                </button>
                            </td>
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
                                <div className="pagination">
                                    <p>Total</p>
                                    <p className="page">1</p>
                                    <div>
                                        <button
                                            className="d-flex align-items-center justify-content-center"><img
                                                src="./images/icons/pre.png" alt="previous" /></button>
                                        <button
                                            className="d-flex align-items-center justify-content-center"><img
                                                src="./images/icons/next.png" alt="next" /></button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>



                {/* <div id="box__user-info">
                    <div className="box-header d-flex justify-content-between">
                        User Information
                        <button className="btn__exit-noti">
                            <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                        </button>
                    </div>
                    <div className="user-info justify-content-center d-flex">
                        <div className="info-main d-flex flex-column align-items-center">
                            <img src="./images/icons/avatar-default.svg" alt="" />
                            <h5>Name 1</h5>
                            <span>User ID: 9999999999</span>
                        </div>
                        <button className="btn__edit-info">
                            <img src="./images/icons/pencil.svg" alt="" />
                        </button>
                    </div>
                    <div className="user-statis">
                        <div className="statis-head d-flex justify-content-between align-items-center">
                            Statistics
                            <button className="d-flex align-items-center">Detail
                                <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                        fill="white" />
                                </svg>
                            </button>
                        </div>
                        <div className="d-flex summary-total">
                            <div className="total-win d-flex flex-column align-items-center justify-content-center">
                                <h5>Total Wins</h5>
                                <span>0</span>
                            </div>
                            <div className="total-play d-flex flex-column align-items-center justify-content-center">
                                <h5>Total Plays</h5>
                                <span>$0.00</span>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* <div className="footer-bg pc"></div> */}
                {/* <div id="box__user-detail">
                    <div className="box-header d-flex justify-content-between">
                        <div className="header-action d-flex align-items-center">
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                    fill="white" />
                            </svg>
                            Detail
                        </div>
                        <button className="btn__exit-detail">
                            <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                        </button>
                    </div>
                    <div className="select-network d-flex align-items-center mt-3">
                        Statistics
                        <input type="text" value="BEP20" />
                        <div className="user-select d-flex">
                            <img src="./images/icons/avatar-default.svg" alt="" />
                        </div>
                    </div>
                    <div className="user-statis">
                        <div className="d-flex summary-total">
                            <div className="total-win d-flex flex-column align-items-center justify-content-center">
                                <h5>Total Wins</h5>
                                <span>0</span>
                            </div>
                            <div className="total-play d-flex flex-column align-items-center justify-content-center">
                                <h5>Total Plays</h5>
                                <span>$0.00</span>
                            </div>
                        </div>
                    </div>
                </div> */}


                {/* <div id="box__edit-username">
                    <div className="box-header d-flex justify-content-between">
                        <div className="header-action d-flex align-items-center">
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.76822 5.57814C4.36843 6.05789 3.63157 6.05789 3.23178 5.57813L0.36682 2.14018C-0.175952 1.48886 0.287204 0.499999 1.13504 0.499999L6.86496 0.5C7.7128 0.5 8.17595 1.48886 7.63318 2.14018L4.76822 5.57814Z"
                                    fill="white" />
                            </svg>
                            My Profile
                        </div>
                        <button className="btn__exit-edit">
                            <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                        </button>
                    </div>
                    <div className="edit-ava d-flex flex-column align-items-center">
                        <img src="./images/icons/avatar-default.svg" alt="" />
                        <button>Edit Your Avatar</button>
                    </div>
                    <form action="" className="d-flex align-items-center flex-column">
                        <div className="form-group">
                            <label for="inputRePassword4">Username</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="name edit...." />
                            <div className="notice">Do not use special symbols, otherwise your account may not be supported.
                            </div>
                        </div>
                        <button type="submit">Modify </button>
                    </form>
                </div> */}
            </section>


        </div>


    );
}

export default Transaction;