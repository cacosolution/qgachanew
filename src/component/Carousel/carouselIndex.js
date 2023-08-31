import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/Carousel.css";

const CarouselIndex = () => {
    const settings = {
        dots: false,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
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
                    <div>
                        <img src="./images/img-main2.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/img-main3.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/img-main4.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/img-main5.png" alt="" style={{ height: "110px", objectFit: "cover" }} />
                    </div>
                    <div>
                        <img src="./images/img-main6.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/img-main7.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/img-main8.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/img-main9.png" alt="" />
                    </div>
                </Slider>
            </div>

        </div>
    );
}

export default CarouselIndex