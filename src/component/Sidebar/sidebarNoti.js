import "../../css/base.css"

import { useContext } from "react";
import { SidebarContext } from "../../context/sideBarContext";

const SidebarNoti = () => {

    const {
        isSidebarNoti,
        setIsSidebarNoti,
    } = useContext(SidebarContext)



    return (
        <>
            <div className={isSidebarNoti === true ? "side-chat active-chat" : "side-chat"}>
                <header >
                    <div className={isSidebarNoti === true ? `box-chat active` : null} id="box-noti" >
                        <div className="box-header d-flex justify-content-between">
                            Notification
                            <button className="btn__exit-chat" onClick={() => setIsSidebarNoti(false)}>
                                <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                            </button>
                        </div>

                        <div className="box-body">
                            <div className="wrapper-title">
                                <h4>System Notice</h4>
                            </div>
                            <div className="list-noti">
                                <div className="noti-item d-flex align-items-center">
                                </div>
                                <div className="noti-item d-flex align-items-center">
                                </div>
                                <div className="noti-item d-flex align-items-center">
                                </div>
                                <div className="noti-item d-flex align-items-center">
                                </div>
                                <div className="noti-item d-flex align-items-center">
                                </div>
                                <div className="noti-item d-flex align-items-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div >

        </>
    )
}

export default SidebarNoti;