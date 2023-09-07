import "../../css/base.css"

import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { SidebarContext } from "../../context/sideBarContext";
import BoxOverlay from "../Box/BoxOverlay";

const SidebarNoti = () => {

    const {
        isSidebarNoti,
        setIsSidebarNoti,
    } = useContext(SidebarContext)



    return (
        <>
            <div className={isSidebarChat === true ? "side-chat active-chat" : "side-chat"}>
                <header >
                    <div class={isSidebarChat === true ? `box-chat active` : null} id="box-chat" >
                        <div class="box-header d-flex justify-content-between">
                            Online Chat
                            <button class="btn__exit-chat" onClick={() => setIsSidebarChat(false)}>
                                <img src="./images/icons/deposit/icon-exit.svg" alt="" />
                            </button>
                        </div>

                        <div class="box-body p-3">
                            <div class="list-user-online">
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                                <div class="info-user d-flex align-items-center">
                                    <div class="ava-user"></div>
                                    <div class="message">
                                        <div class="user-name">Name1 <span class="time"> 00:00</span></div>
                                        <div class="cur-mess">Nội dung nhắn</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-action d-flex align-items-center">
                            <input type="text" placeholder="Your message" />
                            <button><img src="./images/icons/deposit/send.svg" alt="" /></button>
                        </div>
                    </div>
                </header>
            </div >

        </>
    )
}

export default SidebarNoti;