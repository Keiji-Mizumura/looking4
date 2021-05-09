import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import classes from "../../styles/ui/slideshow.module.css";

export default function SlideShow() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false
  };

  return (
    <Slider {...settings}>
      <div className={classes.slide}>
        <img src="/images/slides/cover.jpg" />
      </div>
      <div className={classes.slide}>
        <img src="/images/slides/cover2.jpg" />
      </div>
      <div className={classes.slide}>
        <img src="/images/slides/cover3.jpg" />
      </div>
    </Slider>
  );
}
