import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/flickity.css";
import "../../css/base.css";
import "../../css/home.css";
import { SidebarContext } from "../../context/sideBarContext";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BoxOverlay from "../Box/BoxOverlay";
import img1 from "../../images/icons/f1.svg"
const FooterWallet = () => {
    const [activeFeature, setActiveFeature] = useState(null);


    const {
        isOpenSideBar,
        sideBarPosition
    } = useSelector((state) => state.siderBar);

    const {
        isOpenBalance,
        isOpenDeposit,
        isOpenWithdraw,
        isOpenTransaction,
    } = useSelector((state) => state.wallet);
    const dispatch = useDispatch();

    const handlerChangeBalance = () => {
        dispatch({ type: "SET_IS_OPEN_BALANCE" });
    }

    const handlerChangeDeposit = () => {
        dispatch({ type: "SET_IS_OPEN_DEPOSIT" });
    }

    const handlerChangeWithdraw = () => {
        dispatch({ type: "SET_IS_OPEN_WITHDRAW" });
    }
    const handlerChangeTransaction = () => {
        dispatch({ type: "SET_IS_OPEN_TRANSACTION" });
    }


    return (
        <div className="bg-footer">
            <footer className={`${isOpenSideBar && "active"}`}>

                <div className="mobile menu-bottom" style={{ zIndex: 999999 }}>
                    <div className="list-feature">
                        <div
                            className={`menu-featurefooter ${isOpenBalance === true ? 'active' : ''}`}
                            onClick={handlerChangeBalance}
                        >
                            <img src={isOpenBalance === true ? './images/icons/balancepurple.svg' : './images/icons/walletgrey.svg'} alt="" />
                            <div className="name-feature">Balance</div>
                        </div>
                        <div
                            className={`menu-featurefooter ${isOpenDeposit === true ? 'active' : ''}`}
                            onClick={handlerChangeDeposit}
                        >
                            <img src={isOpenDeposit === true ? './images/icons/depositactive.svg' : './images/icons/depositfooter.svg'} alt="" style={{ width: "20px" }} />

                            <div className="name-feature">Deposit</div>
                        </div>
                        <div
                            className={`menu-featurefooter ${isOpenWithdraw === true ? 'active' : ''}`}
                            onClick={handlerChangeWithdraw}
                        >
                            <img src={isOpenWithdraw === true ? './images/icons/withdraw-purple.svg' : './images/icons/widthdrawfooter.svg'} alt="" />

                            <div className="name-feature">Withdraw</div>
                        </div>
                        <div
                            className={`menu-featurefooter ${isOpenTransaction === true ? 'active' : ''}`}
                            onClick={handlerChangeTransaction}
                        >
                            <img src={isOpenTransaction === true ? './images/icons/transactionactive.svg' : img1} alt="" />
                            <div className="name-feature">Transaction</div>
                        </div>
                    </div>
                </div>


            </footer>
        </div>
    );
};

export default FooterWallet;
