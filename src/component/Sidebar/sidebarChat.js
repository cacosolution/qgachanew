import "../../css/base.css"

import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { SidebarContext } from "../../context/sideBarContext";
import BoxOverlay from "../Box/BoxOverlay";

const SidebarChat = () => {

    const {
        setIsSidebarChat,
        isSidebarChat,
    } = useContext(SidebarContext)


    
    return (
        <>
            <div className={isSidebarChat === true ? "side-chat active-chat" : "side-chat"}>
                <header >
                    <div className={isSidebarChat === true ? `box-chat active` : null} id="box-chat" >
                        <div className="box-header d-flex justify-content-between">
                            Online Chat
                            <button className="btn__exit-chat" onClick={() => setIsSidebarChat(false)}>
                                <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                            </button>
                        </div>

                        <div className="box-body p-3">
                            <div className="list-user-online">
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div className="info-user d-flex align-items-center">
                                    <div className="ava-user"></div>
                                    <div className="message">
                                        <div className="user-name">Name1 <span className="time"> 00:00</span></div>
                                        <div className="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-action d-flex align-items-center">
                            <input type="text" placeholder="Your message" />
                            <button><img src="./images/icons/deposit/send.svg" alt="" /></button>
                        </div>
                    </div>
                </header>
            </div >

        </>
    )
}

export default SidebarChat;