import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/flickity.css"
import "../css/base.css"
import "../css/home.css"
import "../css/responsive.css"
import Navbar from '../component/Navbar/navbar';
import Sidebar from '../component/Sidebar/sidebar';
import Footer from '../component/Footer/footer';
import BoxOverlay from '../component/Box/BoxOverlay';



const UserAction = () => {
    return (


        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
                <div class="main-home">
                    <div class="main-content">
                        <div class="big-prize">
                            <div class="fire d-flex align-items-center">
                                <img width="14px" src="./images/icons/fire.svg" alt="" />
                                Big Prize
                            </div>
                            <div class="group-big d-flex align-items-center">
                                <div class="big-item d-flex align-items-center">
                                    <img width="25px" src="./images/icons/treasure-nice.svg" alt="" />
                                    <h3>Treasure chest: <span>$15000</span></h3>
                                </div>
                                <div class="big-item d-flex align-items-center">
                                    <img width="20px" src="./images/icons/spin-small.svg" alt="" />
                                    <h3>Spin: <span>$1000</span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="banner-main">
                            <div class="banner-content">
                                <h3>Join and enjoy rewards</h3>
                                <h1>up to <span>100.000$</span></h1>
                                <button>SIGN UP NOW</button>
                            </div>
                            <img src="./images/img-main1.png" alt="banner-home" />
                        </div>

                        <section class="feature mb-5">
                            <div class="row gx-3">
                                <div class="col-12 col-sm-6">
                                    <img src="./images/img-main2.png" alt="" />
                                </div>
                                <div class="col-12 col-sm-6">
                                    <img src="./images/img-main3.png" alt="" />
                                </div>
                            </div>
                            <div class="row g-3 mt-3">
                                <div class="col-12 col-sm-4 d-flex flex-column justify-content-end">
                                    <img src="./images/img-main4.png" alt="" />
                                </div>
                                <div class="col-12 col-sm-4">
                                    <img src="./images/img-main5.png" alt="" />
                                </div>
                                <div class="col-12 col-sm-4  d-flex flex-column justify-content-end">
                                    <img src="./images/img-main6.png" alt="" />
                                </div>
                                <div class="col-12 col-sm-4">
                                    <img src="./images/img-main7.png" alt="" />
                                </div>

                                <div class="col-12 col-sm-4">
                                    <img src="./images/img-main8.png" alt="" />
                                </div>

                                <div class="col-12 col-sm-4">
                                    <img src="./images/img-main9.png" alt="" />
                                </div>
                            </div>
                        </section>
                        <section class="section-list-news">
                            <div class="news-item">
                                <h2>Top Rated Games</h2>
                                <img src="./images/treasure-box.png" alt="" />
                            </div>
                            <div class="news-item">
                                <h2>Recommend</h2>
                                <img src="./images/treasure-box.png" alt="" />
                            </div>
                        </section>
                    </div>

                    <Footer />
                </div>
                <BoxOverlay />
            </main>
        </div>
    );
}

export default UserAction;