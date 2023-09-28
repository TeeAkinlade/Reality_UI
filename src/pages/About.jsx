import React from 'react'
import SubFooter from '../components/SubFooter';
import image1 from '../image/edgeleft.webp'
import image2 from '../image/mini2.webp'
import image3 from '../image/mini3.webp'
import image4 from '../image/main.webp'
import image5 from '../image/mini4.webp'
import image6 from '../image/mini5.webp'
import image7 from '../image/edgeright.webp'
import about from '../image/about.webp'
import emilia from '../image/emilia.webp'
import micheal from '../image/micheal.webp'
import william from '../image/william.webp'
import lee from '../image/lee.webp'
import { FaFacebookF } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FiInstagram } from 'react-icons/fi'

const About = () => {
  return (
    <div className='m-auto max-w-7xl'>
        <div className="px-4 py-16">
            <div className="text-center w-[50%] m-auto">
                <h1 className="text-2xl lg:text-6xl text-[#131313]">
                The Perfect Partner for Your Real Estate Needs
                </h1>
                <h4 className="text-lg font-normal mt-12 text-[#131313]">
                At Realty, we believe that finding your dream home should be an enjoyable experience. With over 15 years of experience, our team of dedicated real estate professionals is committed to providing you with personalized and comprehensive services that cater to your unique needs. Whether you're looking to buy, sell, or rent a property, we have the expertise and resources to help you achieve your goals. We prioritize customer satisfaction and strive to build lasting relationships with each of our clients.
                </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-9 lg:grid-flow-col place-items-center gap-[1rem] mt-6 mb-16">
                <div className="md:col-span-1 h-[250px] w-full">
                    <img src={image1} alt="" className="rounded-tr-[30px] rounded-br-[30px] h-[250px] object-cover" />
                </div>
                <div className="md:col-span-2 grid gap-[1rem] grid-row-8 w-full">
                    <div className="">
                        <img src={image2} alt="" className="rounded-[30px] h-[250px] object-cover w-full" />
                    </div>
                    <div className="">
                        <img src={image3} alt="" className="rounded-[30px] h-[200px] object-cover w-full" />
                    </div>
                </div>
                <div className="md:col-span-3 h-[250px] lg:h-[450px] w-full">
                    <img src={image4} alt="" className="rounded-[30px] h-[400px] w-full object cover" />

                </div>
                <div className="md:col-span-2 grid gap-[1rem] grid-row-8 w-full">
                    <div className="">
                        <img src={image5} alt="" className="rounded-[30px] h-[200px] object-cover w-full" />
                    </div>
                    <div className="">
                        <img src={image6} alt="" className="rounded-[30px] h-[250px] object-cover w-full" />
                    </div>
                </div>
                <div className="md:col-span-1 h-[250px] w-full">
                    <img src={image7} alt="" className="rounded-tl-[30px] rounded-bl-[30px] h-[250px] object-cover w-full" />
                </div>
            </div>
            <div className="">
                <h1 className="max-w-xl text-white text-4xl m-auto text-center leading-snug">Where passion, expertise, and exceptional service meet to guide you on the journey to finding your perfect property. We bring a deep understanding of the market and a commitment to delivering unparalleled value to our clients. Let us help you turn your real estate dreams into reality.</h1>
            </div>
            <div className="my-20">
                <img src={about} alt="" className="rounded-[30px] w-full" />
            </div>
            <div className="">
                <h1 className="text-6xl text-white mb-16"> Our Team</h1>
                <div className="grid grid-col lg:grid-cols-2">
                    <div className="">
                    <p className="text-white text-lg mb-8">A team of experienced and dedicated professionals who are passionate about helping our clients find their dream properties. From our agents to our support staff, everyone on our team is committed to providing personalized service, expert guidance, and exceptional results.</p>                      
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem]">
                <div className="relative">
                    <img src={emilia} alt="" className="rounded-[30px] w-full" />
                    <div className="flex space-x-2 absolute top-4 right-3">
                        <FiInstagram
                            className='bg-[#a8a8a8] backdrop-blur-lg loading-lazy cursor-pointer hover:border hover:border-white text-white rounded-full h-10 w-10 p-2 transition duration-600 ease-in-out hover:h-10 hover:w-10' 
                        />
                        <FaXTwitter
                            className='bg-[#a8a8a8] backdrop-blur-lg loading-lazy cursor-pointer hover:border hover:border-white text-white rounded-full h-10 w-10 p-2 transition duration-600 ease-in-out hover:h-10 hover:w-10'
                        />
                        <FaFacebookF 
                            className='bg-[#a8a8a8] backdrop-blur-lg loading-lazy cursor-pointer hover:border hover:border-white text-white rounded-full h-10 w-10 p-2 transition duration-600 ease-in-out hover:h-10 hover:w-10'
                        />
                    </div>
                    <p className="text-gray-800 text-xl mt-4 mb-6 text-center">Emily Rodriguez</p>
                    <p className="text-[#a8a8a8] text-lg text-center">Sales Manager</p>
                </div>
                <div className="relative mt-[2rem]">
                    <img src={micheal} alt="" className="rounded-[30px] w-full" />
                    <div className="flex space-x-2 absolute top-4 right-3">
                        <FiInstagram
                            className='bg-[#a8a8a8] backdrop-blur-lg loading-lazy cursor-pointer hover:border hover:border-white text-white rounded-full h-10 w-10 p-2 transition duration-600 ease-in-out hover:h-10 hover:w-10' 
                        />
                        <FaXTwitter
                            className='bg-[#a8a8a8] backdrop-blur-lg loading-lazy cursor-pointer hover:border hover:border-white text-white rounded-full h-10 w-10 p-2 transition duration-600 ease-in-out hover:h-10 hover:w-10'
                        />
                        <FaFacebookF 
                            className='bg-[#a8a8a8] backdrop-blur-lg loading-lazy cursor-pointer hover:border hover:border-white text-white rounded-full h-10 w-10 p-2 transition duration-600 ease-in-out hover:h-10 hover:w-10'
                        />
                    </div>
                    <p className="text-gray-800 text-xl mt-4 mb-6 text-center">Michael Johnson</p>
                    <p className="text-[#a8a8a8] text-lg text-center">CEO</p>
                </div>
                <div className="relative">
                    <img src={william} alt="" className="rounded-[30px] w-full" />
                    <div className="flex space-x-2 absolute top-4 right-3">
                        <FiInstagram
                            className='bg-[#a8a8a8] backdrop-blur-lg loading-lazy cursor-pointer hover:border hover:border-white text-white rounded-full h-10 w-10 p-2 transition duration-600 ease-in-out hover:h-10 hover:w-10' 
                        />
                        <FaXTwitter
                            className='bg-[#a8a8a8] backdrop-blur-lg loading-lazy cursor-pointer hover:border hover:border-white text-white rounded-full h-10 w-10 p-2 transition duration-600 ease-in-out hover:h-10 hover:w-10'
                        />
                        <FaFacebookF 
                            className='bg-[#a8a8a8] backdrop-blur-lg loading-lazy cursor-pointer hover:border hover:border-white text-white rounded-full h-10 w-10 p-2 transition duration-600 ease-in-out hover:h-10 hover:w-10'
                        />
                        
                    </div>
                    <p className="text-gray-800 text-xl mt-4 mb-6 text-center">William Brown</p>
                    <p className="text-[#a8a8a8] text-lg text-center">Senior Real Estate Agent</p>
                </div>
                <div className="relative mt-[2rem]">
                    <img src={lee} alt="" className="rounded-[30px] w-full" />
                    <div className="flex space-x-2 absolute top-4 right-3">
                        <FiInstagram
                            className='bg-[#a8a8a8] backdrop-blur-lg loading-lazy cursor-pointer hover:border hover:border-white text-white rounded-full h-10 w-10 p-2 transition duration-600 ease-in-out hover:h-10 hover:w-10' 
                        />
                        <FaXTwitter
                            className='bg-[#a8a8a8] backdrop-blur-lg loading-lazy cursor-pointer hover:border hover:border-white text-white rounded-full h-10 w-10 p-2 transition duration-600 ease-in-out hover:h-10 hover:w-10'
                        />
                        <FaFacebookF 
                            className='bg-[#a8a8a8] backdrop-blur-lg loading-lazy cursor-pointer hover:border hover:border-white text-white rounded-full h-10 w-10 p-2 transition duration-600 ease-in-out hover:h-10 hover:w-10'
                        />
                    </div>
                    <p className="text-gray-800 text-xl mt-4 mb-6 text-center">Samantha Lee</p>
                    <p className="text-[#a8a8a8] text-lg text-center">Administrative Assistant</p>
                </div>
            </div>
            <SubFooter />
        </div>
    </div>
  )
}

export default About