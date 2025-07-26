import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const BrandsCarousel = ({ brands }) => {
    const navigate = useNavigate();
    return (
        <>
            <Swiper
                // slidesPerView={5} // Default view for mobile
                spaceBetween={0}
                breakpoints={{
                    100: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    500: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 1,
                    },
                }}
                modules={[Navigation,Pagination,Autoplay]}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                disableOnInteraction={false}
                infinite={true}
                loop={true}
                className="mySwiper "
            >
                {brands?.map((brand, key) => (
                    <SwiperSlide key={key} className="h-10 w-10 object-cover flex items-center cursor-pointer justify-center " onClick={() => navigate("/brands") }>
                        <img
                            src={brand.logo}
                            alt={`Brand ${brand.name} Image`}
                            className="object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default BrandsCarousel;
