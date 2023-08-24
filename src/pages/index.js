import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/flickity.css"
import "../css/base.css"
import "../css/home.css"
import Navbar from '../component/Navbar/navbar';
import Sidebar from '../component/Sidebar/sidebar';



const Home = () => {
    return (
        <div class="container-wrapper">
            <Navbar />
            <main>
                <Sidebar />
            </main>

        </div>
    );
}

export default Home;