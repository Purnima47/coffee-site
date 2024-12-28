import { data } from 'autoprefixer';
import React from 'react';
import Img2 from "../../assets/coffee2.png";

const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Espresso",
        description: "Espresso is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks.",
        aosDelay: "100",
    },
    {
        id: 2,
        img: Img2,
        name: "Americano",
        description:
            "An americano is just water and espresso. It'll either be served 1/2 and 1/2 or 1/3 espresso to 2/3 water",
        aosDelay: "300",
    },
    {
        id: 3,
        img: Img2,
        name: "Cappuccino",
        description:
            "A cappuccino is the perfect balance of espresso, steamed milk and foam.",
        aosDelay: "500",
    },
]

const Services = () => {
    return (
        <>
            <span id='services'></span>
            <div className='py-10'>
                <div className='container'>

                    {/* header tittle */}
                    <div
                        data-aos="fade-up"
                        className='text-center mb-20'>
                        <h1 className='text-4xl font-bold
                        font-cursive text-gray-800'>
                            Best Coffee For You
                        </h1>
                    </div>

                    {/* Services Card Section  */}
                    <div className='grid grid-cols-1 sm:grid-cols-2
                md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                        {
                            ServicesData.map((data, index) => {
                                return (
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay={data.aosDelay}
                                        key={index}
                                        className='rounded-2xl bg-white
                                        hover:bg-primary hover:text-white relative shadow-xl
                                        duration-high group max-w-[300px]'>

                                        {/* Image Section */}
                                        <div className='h-[122px]'>
                                            <img src={data.img} alt=""
                                                className='max-w-[200px]
                                        block mx-auto transform -translate-y-14
                                        group-hover:scale-105 group-hover:rotate-6 duration-300'
                                            />
                                        </div>

                                        {/* Text Content */}
                                        <div className="p-4 text-center">
                                            <div className='w-full'></div>
                                            <h1
                                                className='text-xl font-bold'>
                                                {data.name}
                                            </h1>
                                            <p className='text-gray-500
                                        group-hover:text-white duration-high
                                        text-sm line-clamp-2'>
                                                {data.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Services;
