import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@smastrom/react-rating/style.css'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
const Ratings = () => {
    let [ratings, setRatings] = useState({});
    console.log(ratings.recent_reviews)
    useEffect(() => {
        fetch('rating.json')
            .then(res => res.json())
            .then(data => setRatings(data))
    }, [])
    return (
        <div>
            <div>
                <div>
                    <h1 className="text-4xl font-bold text-center ">Our Ratting</h1>
                    <h3 className="text-center font-semibold">Total reviews : {ratings.total_reviews}</h3>
                </div>
                <div>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            ratings.recent_reviews?.map(review =>
                                <SwiperSlide key={review.rating}>
                                    <div className="flex flex-col items-center my-16 mx-24">
                                        <Rating
                                            style={{ maxWidth: 100 }}
                                            value={review.rating}
                                            readOnly
                                        />
                                        <p className="">{review.comment}</p>
                                        <h3 className="text-2xl text-orange-400">{review.user}</h3>
                                    </div>
                                </SwiperSlide>
                            )}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Ratings;