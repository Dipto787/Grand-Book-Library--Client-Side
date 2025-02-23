
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import slider1 from '../../assets/Slider/library 1.jpg'
import slider2 from '../../assets/Slider/library 2.jpg'
import slider3 from '../../assets/Slider/library 3.jpg'
import slider4 from '../../assets/Slider/library 4.jpg'
const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={slider1} />
            </div>
            <div>
                <img src={slider2} />
            </div>
            <div>
                <img src={slider3} />
            </div>
            <div>
                <img src={slider4} />
            </div>
        </Carousel>
    );
};

export default Banner;