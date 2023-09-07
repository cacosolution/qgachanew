import React from 'react'
import { Link } from 'react-router-dom'

const ListFeature = () => {
    return (
        <div className="list-feature">
            <ul>
                <Link to="/balance">
                    <li className="feature-item d-flex align-items-center ">
                        <img src="./images/icons/deposit/wallet.svg" alt="" className="feature-icon" />
                        <h4 className="feature-title text-15">Balance</h4>
                    </li>
                </Link>

                <Link to="/deposit">
                    <li className="feature-item d-flex align-items-center">
                        <img src="./images/icons/deposit/deposit.svg" alt="" className="feature-icon" />
                        <h4 className="feature-title text-15">Deposit</h4>
                    </li>
                </Link>
                <Link to="/withdraw">
                    <li className="feature-item d-flex align-items-center">
                        <img src="./images/icons/deposit/withdraw.svg" alt="" className="feature-icon" />
                        <h4 className="feature-title text-15">Withdraw</h4>
                    </li>
                </Link>

                <li className="feature-item d-flex align-items-center">
                    <img src="./images/icons/deposit/buy.svg" alt="" className="feature-icon" />
                    <h4 className="feature-title text-15">Buy Crypto <span>(Coming Soon)</span></h4>
                </li>
                <li className="feature-item d-flex align-items-center">
                    <img src="./images/icons/deposit/nft.svg" alt="" className="feature-icon" />
                    <h4 className="feature-title text-15">NFTs <span>(Coming Soon)</span></h4>
                </li>
                <Link to="/transaction">
                    <li className="feature-item d-flex align-items-center">
                        <img src="./images/icons/deposit/transaction.svg" alt="" className="feature-icon" />
                        <h4 className="feature-title text-15">Transaction</h4>
                    </li>
                </Link>

            </ul>

        </div>
    )
}

export default ListFeature