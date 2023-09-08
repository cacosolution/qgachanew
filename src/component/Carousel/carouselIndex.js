import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/Carousel.css";
import { Link } from "react-router-dom";

const CarouselIndex = () => {
    const settings = {
        dots: true,
        infinite: true,
        // arrows: true, // Đã bỏ chọn
        fade: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <div className="carou">
                <Slider {...settings} autoplay autoplaySpeed={2000}>

                    <Link to="/upgradesoon">
                        <img src="./images/img-main4.png" alt="" width={"100%"} height={"100%"} />
                    </Link>
                    <Link to="/boxgacha">
                        <img src="./images/img-main5.png" alt="" width={"100%"} height={"150px"} style={{ objectFit: "cover" }} />
                    </Link>
                    <Link to="/mystery">
                        <img src="./images/img-main6.png" alt="" width={"100%"} height={"100%"} />
                    </Link>
                    <Link to="/completedgacha">
                        <img src="./images/img-main7.png" alt="" width={"100%"} height={"100%"} />
                    </Link>
                    <Link to="/reroll">
                        <img src="./images/img-main8.png" alt="" width={"100%"} height={"100%"} />
                    </Link>
                    <Link to="/sugoroku">
                        <img src="./images/img-main9.png" alt="" width={"100%"} height={"100%"} />
                    </Link>
                </Slider>
            </div>

        </div>
    );
}

export default CarouselIndex