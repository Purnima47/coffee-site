import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../../assets/website/coffee-footer.jpg";
import { FaGithub } from 'react-icons/fa';


const FooterLinks = [
    {
        title: "Home",
        link: "/#",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    },
    {
        title: "About",
        link: "/#about",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>

    },
    {
        title: "Contact",
        link: "/#contact",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
        </svg>

    },
    {
        title: "Blog",
        link: "/#blog",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
        </svg>

    },
];

const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
};

const Footer = () => {
    return (
        <div style={bgImage} className='text-white'>
            <div className="bg-black/40
            min-h-[400px]">
                <div className='container grid md:grid-cols-3
                pb-20 pt-5'>

                    {/* Company Details */}
                    <div className='py-8 px-4'>
                        <a href="#" className='font-semibold tracking-widest
                        text-2xl sm:text-3xl font-cursive'>
                            Coffee Cafe
                        </a>
                        <p className='pt-4'>
                            Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
                            Espresso Escape
                        </p>
                        <a href="https://github.com/Purnima47"
                            className="inline-block bg-[#3d2517] py-2 px-4 
                        mt-5 text-sm rounded-full" target="_blank">
                            <div className='flex hover:scale-105 duration-200'>
                                <FaGithub className='my-0.5' />&nbsp;
                                Purnima47
                            </div>
                        </a>
                    </div>

                    {/* Footer Links */}
                    <div className='col-span-2 grid grid-cols-2
                    sm:grid-cols-3 md:pl-10'>
                        {/* First col links */}
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold
                            sm:text-left mb-3'>
                                Footer Links
                            </h1>
                            <ul className="space-y-3">
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a
                                            href={data.link}
                                            className="inline-block hover:scale-105 
                                            duration-200"
                                        >
                                            <div className='flex'>
                                                {data.icon} &nbsp;&nbsp;{data.title}
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* second col links */}
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold
                            sm:text-left mb-3'>
                                Quick Links
                            </h1>
                            <ul className="space-y-3">
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a
                                            href={data.link}
                                            className="inline-block hover:scale-105 
                                            duration-200"
                                        >
                                            <div className='flex'>
                                                {data.icon} &nbsp;&nbsp;{data.title}
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Company Address */}
                        <div className='py-8 px-4 col-span-2
                    sm:col-auto'>
                            <h1 className='text-xl font-semibold
                        sm:text-left mb-3'>
                                Address
                            </h1>
                            <div>

                                <p className='mb-3'>
                                    Greater Noida, India
                                </p>
                                <p>+91 XXXXXXXXX</p>

                                {/* social links */}
                                <div className='space-x-3 mt-6 grid-flow-row grid-rows-1'>
                                    <a href="#">
                                        <FaFacebook
                                            className='text-3xl
                                        hover:scale-105 duration-200 inline-block'/>
                                    </a>

                                    <a href="#">
                                        <FaLinkedin
                                            className='text-3xl
                                        hover:scale-105 duration-200 inline-block'/>
                                    </a>

                                    <a href="#">
                                        <FaInstagram
                                            className='text-3xl
                                        hover:scale-105 duration-200 inline-block'/>
                                    </a>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
