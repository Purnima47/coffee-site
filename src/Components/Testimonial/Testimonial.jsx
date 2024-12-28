import { data } from 'autoprefixer';
import React from 'react'
import Slider from 'react-slick';

const TestimonialData = [
    {
        id: 1,
        name: "Dilshad",
        text: "Will go again.I only popped in to get take-away cappuccinos, but I was struck by how friendly the service was. The cappuccinos were wonderful too! And very well priced.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Sabir ali",
        text: "I really like the atmosphere, good coffee, and nice interior. The drinks and foods were all tasty and worthwhile. If you’re up for a fresh place with beautiful architecture then this is a must to visit.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Dipankar kumar",
        text: "Amazing coffee and the owner is just wonderful. He clearly knows his stuff and they roast their own beans. Good prices, cute atmosphere. The vanilla latte will never disappoint!",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 5,
        name: "Satya Narayan",
        text: "Great place. Amazing cafe. Extremely nice people. I wanted to buy a mug but they were out. They gave me one of the serving cups. I would give 6 stars if I could. Highly recommend!!!",
        img: "https://picsum.photos/103/103",
    },
];

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='py-14 mb-10'>
            <div className="container">
                {/* header section */}
                <div
                    data-aos="fade-up"
                    className='text-center mb-10'>
                    <h1 className='text-4xl font-bold
                        font-cursive text-gray-800'>
                        Testimonials
                    </h1>
                </div>

                {/* Testimonials cards Section */}

                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {
                            TestimonialData.map((data, index) => {
                                return <div className="my-6" key={data.id}>
                                    <div className='flex flex-col gap-4 shadow-lg
                                    py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>

                                        {/* Image Section */}
                                        <div className='mb-4 flex justify-center'>
                                            <img src={data.img} alt=""
                                                className='rounded-full w-20 h-20' />
                                        </div>

                                        {/* Content Section */}
                                        <div className='flex flex-col items-center gap-4'>
                                            <div className='space-y-3'>
                                                <p className='text-xs text-gray-500'>
                                                    {data.text}
                                                </p>
                                                <h1 className='text-xl font-bold text-black/60
                                                font-cursive'>
                                                    {data.name}
                                                </h1>
                                            </div>
                                        </div>
                                        <p className='text-black/20 text-9xl
                                        font-serif absolute top-0 right-0'>
                                            ,,
                                        </p>
                                    </div>
                                </div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
