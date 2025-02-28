import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import book1 from '../../assets/book/book 1.jpg'
import book2 from '../../assets/book/book 2.jpg'
import book3 from '../../assets/book/book 3.jpg'
import book4 from '../../assets/book/book 4.jpg'
import book5 from '../../assets/book/book 5.jpg'
const OrderOnline = () => {
    return (
        <div className='my-12'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={book1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={book2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={book3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={book4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={book5} alt="" /></SwiperSlide>
                 
            </Swiper>
        </div >
    );
};

export default OrderOnline;