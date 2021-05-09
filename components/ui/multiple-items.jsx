import Slider from "react-slick";

export default function MultipleItems(props){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: props.slides,
        slidesToScroll: props.slides
    }
    return(
        <Slider {...settings}>
            {props.children}
        </Slider>
    )
}