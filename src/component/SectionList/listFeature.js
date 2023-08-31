import React from 'react'
import { Link } from 'react-router-dom'

const ListFeature = () => {
    return (
        <div class="list-feature">
            <ul>
                <Link to="/balance">
                    <li class="feature-item d-flex align-items-center ">
                        <img src="./images/icons/deposit/wallet.svg" alt="" class="feature-icon" />
                        <h4 class="feature-title text-15">Balance</h4>
                    </li>
                </Link>

                <Link to="/deposit">
                    <li class="feature-item d-flex align-items-center">
                        <img src="./images/icons/deposit/deposit.svg" alt="" class="feature-icon" />
                        <h4 class="feature-title text-15">Deposit</h4>
                    </li>
                </Link>
                <Link to="/withdraw">
                    <li class="feature-item d-flex align-items-center">
                        <img src="./images/icons/deposit/withdraw.svg" alt="" class="feature-icon" />
                        <h4 class="feature-title text-15">Withdraw</h4>
                    </li>
                </Link>

                <li class="feature-item d-flex align-items-center">
                    <img src="./images/icons/deposit/buy.svg" alt="" class="feature-icon" />
                    <h4 class="feature-title text-15">Buy Crypto <span>(Coming Soon)</span></h4>
                </li>
                <li class="feature-item d-flex align-items-center">
                    <img src="./images/icons/deposit/nft.svg" alt="" class="feature-icon" />
                    <h4 class="feature-title text-15">NFTs <span>(Coming Soon)</span></h4>
                </li>
                <Link to="/transaction">
                    <li class="feature-item d-flex align-items-center">
                        <img src="./images/icons/deposit/transaction.svg" alt="" class="feature-icon" />
                        <h4 class="feature-title text-15">Transaction</h4>
                    </li>
                </Link>

            </ul>

        </div>
    )
}

export default ListFeature