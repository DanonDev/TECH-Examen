import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider1 from '../../Assets/sliderImages/slider1.jpg';
import Slider2 from '../../Assets/sliderImages/slider2.jpg';
import Slider3 from '../../Assets/sliderImages/slider3.jpg';

const settings = {
    infinite: true, // Loop the carousel
    autoplay: true, // Enable autoplay
    speed: 1000, // Transition speed in milliseconds
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
};

const Carousel = () => {
    return (
        <Slider {...settings}>
            <img
                className="w-full h-slider-mob md:h-slider-desc object-cover"
                src={Slider1}
                alt="Slide 1"
            />
            <img
                className="w-full h-slider-mob md:h-slider-desc object-cover"
                src={Slider2}
                alt="Slide 2"
            />

            <img
                className="w-full h-slider-mob md:h-slider-desc object-cover"
                src={Slider3}
                alt="Slide 3"
            />
        </Slider>
    );
};

export default Carousel;
