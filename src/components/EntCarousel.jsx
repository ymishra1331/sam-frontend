import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useDispatch, useSelector } from "react-redux";
import { GetBrands } from "../actions/brand.action";
import { useEffect, useState } from 'react';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
import Horror1 from '../assets/softplayfront.avif';
import Horror2 from '../assets/Entertainment/hungama2.jpg';
import Horror3 from '../assets/Entertainment/Horror3.jpg';
import Horror4 from '../assets/Entertainment/Horror4.jpg';
import Horror5 from '../assets/Entertainment/Horror5.jpg';
import Horror6 from '../assets/Entertainment/Horror6.jpg';
import Horror7 from '../assets/Entertainment/Horror7.jpg';
import Horror8 from '../assets/Entertainment/Horror8.jpg';
import Hungama1 from '../assets/hungamafront.avif';
import Hungama2 from '../assets/hungamaback.avif';
import Hungama3 from '../assets/Entertainment/hungama3.jpg';
import Hungama4 from '../assets/Entertainment/hungama4.jpg';
import Hungama5 from '../assets/Entertainment/hungama5.jpg';
import Hungama6 from '../assets/Entertainment/hungama6.jpg';
import Hungama7 from '../assets/Entertainment/hungama7.jpg';
import MovieMagic1 from '../assets/mmfront.avif';
import MovieMagic2 from '../assets/mmback.avif';
import CarRide1 from '../assets/Entertainment/carride1.avif';
import CarRide2 from '../assets/Entertainment/carride2.avif';
const EntCarousel = () => {

    const dispatch = useDispatch();
    const [brands, setBrands] = useState(null);
    const allbrands = useSelector(state => state.brands.allbrands);
    const [filteredBrands, setFilteredBrands] = useState(null);

    const entertainments=[
        {
            "name":"Movie Magic",
            "images":[MovieMagic1,MovieMagic2],
        },
        {
            "name":"Hungama Game Planet",
            "images":[Hungama1,Hungama2],
        },
        {
            "name":"Soft Play by Hungama",
            "images":[Horror1,Horror2],
        },
        // {
        //     "name":"9Di",
        //     "images":[NineDi1,NineDi2],
        // },
        {
            "name":"Kids Car Rides",
            "images":[CarRide1,CarRide2],
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnFocus: false
    };

    useEffect(() => {
        if (allbrands) {
            setBrands(allbrands);
            const filteringBrands = allbrands.filter(brand => brand.category.toLowerCase() === "food");
            setFilteredBrands(filteringBrands);
        }
    }, [allbrands]);

    useEffect(() => {
        dispatch(GetBrands(0));
    }, [dispatch]);

    return (
        <div className="w-full h-[640px]   overflow-hidden">
            <Slider {...settings}>
                {entertainments?.map((item, index) => (
                    <div key={index} className="relative h-[550px] sm:h-[600px] flex flex-col sm:flex-row justify-end items-center">
                        <img
                            src={item?.images[1]}
                            alt={`Dining Image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col sm:flex-row  justify-center items-center sm:top-32 ">
                            <div className="capitalize text-white text-3xl sm:mr-10 bg-[#00000044] h-[240px] gap-8 w-[700px] flex flex-col items-end justify-center sm:pr-10 ">
                                <p className=" sm:text-4xl w-full flex justify-center sm:justify-end capitalize text-wrap ">{item?.name}</p>
                                <Link to="/entertainments">
                                    <div className="h-[36px] group w-[160px] bg-black cursor-pointer rounded-md hidden sm:flex text-white items-center justify-center transition-all duration-300 text-[15px] relative overflow-hidden">
                                        <span className="z-10 flex items-center group-hover:text-white">Know More <MdOutlineArrowRightAlt size={25} className="ml-1" /></span>
                                        <div className="absolute inset-0 bg-custombrown transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-[280px] h-[340px] sm:w-[380px] sm:h-[450px] rounded-xl shadow overflow-hidden flex relative top-[-60px]">
                                <img src={item?.images[0]} className="object-fill h-full" alt={item?.name} />
                            </div>
                            <Link to="/entertainment">
                                <div className="h-[36px] mb-5 group w-[160px] bg-black cursor-pointer rounded-md sm:hidden flex text-white items-center justify-center transition-all duration-300 text-[15px] relative overflow-hidden">
                                    <span className="z-10 flex items-center group-hover:text-white">Know More <MdOutlineArrowRightAlt size={25} className="ml-1" /></span>
                                    <div className="absolute inset-0 bg-custombrown transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default EntCarousel;
