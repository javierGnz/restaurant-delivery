import React, { Component } from "react";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./styles.scss";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-arrow--prev" onClick={onClick}>
      <MdKeyboardArrowLeft />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-arrow--next" onClick={onClick}>
      <MdKeyboardArrowRight />
    </div>
  );
};

export class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      dots: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    return (
      <div className="slider-container">
        <Slider {...settings}>
          {this.props.data.map(({ id, img, alt }) => {
            return (
              <div key={id}>
                <img src={img} alt={alt} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
