import "../../css/base.css"

import { useContext, useEffect, useRef } from "react";
import { SidebarContext } from "../../context/sideBarContext";

const SidebarNoti = () => {

    const {
        isSidebarNoti,
        setIsSidebarNoti,
    } = useContext(SidebarContext)

    const modalRef = useRef(null);
    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Kiểm tra xem sự kiện click có xảy ra bên ngoài modal không
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsSidebarNoti(false);
            }
        };

        // Thêm sự kiện lắng nghe vào document khi component được render
        document.addEventListener('mousedown', handleOutsideClick);

        // Hủy sự kiện lắng nghe khi component bị hủy
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);


    return (
        <>
            <div className={isSidebarNoti === true ? "side-chat active-chat" : "side-chat"} ref={modalRef}>
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