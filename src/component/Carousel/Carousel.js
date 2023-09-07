import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/Carousel.css";

const Carousel = () => {
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
        <Slider {...settings}>
          <div className="carousel-cell">
            <div className="item-buy d-flex align-items-center justify-content-center">
              <img
                src="./images/icons/avatar-default.svg"
                alt=""
                className="avatar me-2"
              />
              <p>Name1: Đã mua (03:05)</p>
            </div>
          </div>
          <div className="carousel-cell">
            <div className="item-buy d-flex align-items-center justify-content-center">
              <img
                src="./images/icons/avatar-default.svg"
                alt=""
                className="avatar me-2"
              />
              <p>Name1: Đã mua (03:05)</p>
            </div>
          </div>
          <div className="carousel-cell">
            <div className="item-buy d-flex align-items-center justify-content-center">
              <img
                src="./images/icons/avatar-default.svg"
                alt=""
                className="avatar me-2"
              />
              <p>Name1: Đã mua (03:05)</p>
            </div>
          </div>
          <div className="carousel-cell">
            <div className="item-buy d-flex align-items-center justify-content-center">
              <img
                src="./images/icons/avatar-default.svg"
                alt=""
                className="avatar me-2"
              />
              <p>Name1: Đã mua (03:05)</p>
            </div>
          </div>
          <div className="carousel-cell">
            <div className="item-buy d-flex align-items-center justify-content-center">
              <img
                src="./images/icons/avatar-default.svg"
                alt=""
                className="avatar me-2"
              />
              <p>Name1: Đã mua (03:05)</p>
            </div>
          </div>
          <div className="carousel-cell">
            <div className="item-buy d-flex align-items-center justify-content-center">
              <img
                src="./images/icons/avatar-default.svg"
                alt=""
                className="avatar me-2"
              />
              <p>Name1: Đã mua (03:05)</p>
            </div>
          </div>
        </Slider>
      </div>

    </div>
  );
};

export default Carousel;



