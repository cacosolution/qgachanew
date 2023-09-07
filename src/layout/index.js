import { useContext } from "react";
import { useSelector } from "react-redux";
import Footer from "../component/Footer/footer";
import Navbar from "../component/Navbar/navbar";
import Sidebar from "../component/Sidebar/sidebar";
import { SidebarContext } from "../context/sideBarContext";

const Layout = ({ children }) => {
    const {
        isOpenSideBar,
    } = useSelector((state) => state.siderBar);
    const {
        isSidebarChat,
        isSidebarNoti,
    } = useContext(SidebarContext)
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div className={`main-home ${isOpenSideBar ? "active" : isSidebarChat ? "active" : isSidebarNoti && "active"}`} >
                    {children}
                </div>
            </main>
            <Footer />

        </div>


    );
}

export default Layout;