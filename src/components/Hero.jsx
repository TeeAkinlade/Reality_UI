import React from 'react'
import pic1 from "../image/hero.jpg"
import pic2 from "../image/1.webp"
import pic3 from "../image/2.webp"
import pic4 from "../image/3.webp"
import star from "../image/star.svg"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom'

const Hero = () => {
    const [isOpen, setOpen] = useState(false);

  return (
    <div className='max-w-7xl m-auto'>
        <div className="px-2 pt-10 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.5rem]">
                <h1 className='text-5xl text-white font-medium'>Discover Your Ideal Living Space</h1>
                <p className="text-lg"> Space Explore our latest collection of premium properties and find your dream home today. From luxurious estates to trendy urban condos, we have something for every lifestyle and budget.</p>
            </div>
            <div className="mt-[1rem] lg:mt-10 grid grid-cols-1 lg:grid-cols-6 gap-[1rem]">
                <div className="block relative col-span-6 lg:col-span-3 w-full h-[400px] lg:h-[600px] rounded-[30px]">
                    <img src={pic1}
                        className='object-cover rounded-[30px] h-full w-full'
                    />
                    <div className=" flex flex-col justify-between absolute p-8 top-0 left-0 bottom-0 right-0 gap-1">
                        <div className='flex items-center'>
                            <span className='flex items-center p-2 bg-white rounded-full'><img src={star} className="h-5" />
                            <p className="text-[#444444]">New Property</p></span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-[#4b2109] backdrop-blur-lg p-1.5 rounded-lg">
                                <p className='text-4xl font-bold'>FlowLive Estate</p>
                                <p className='text-lg uppercase mt-2'>4th Avenue, GW</p>
                            </div>
                            <div className="p-3 bg-white rounded-[50%] flex justify-end">
                                <AiOutlineArrowRight
                                    className='text-2xl transition-transform hover:-rotate-45 duration-150'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 lg:col-span-3 h-full mb-64 md:mb-0 lg:h-[600px] rounded-[30px] gap-[1rem]">
                    <div className="row-span-3 rounded-[30px] w-full overflow-hidden mb-[1rem] h-[300px]">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={pic2}
                                    className='rounded-[30px] object-fit w-full'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={pic3}
                                    className='rounded-[30px] object-cover w-full'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={pic4}
                                    className='rounded-[30px] object-fit w-full'
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="row-span-3 rounded-[30px] grid grid-cols-1 md:grid-cols-6 gap-[1rem] h-[300px]">
                        <div className="relative col-span-6 md:col-span-3 rounded-[30px] h-[300px] md:h-full w-full cursor-pointer z-50">
                            <div className="absolute p-2 backdrop-blur-xl rounded-[50%] bottom-32 lg:right-32 right-56 md:right-20 outline-none ring-0">
                                <BsFillPlayFill
                                    onClick={() => setOpen(true)}
                                    className='text-white text-3xl border-0'
                                />
                            </div>
                            <React.Fragment>
                                <ModalVideo
                                            channel="youtube"
                                            youtube={{ mute: 0, autoplay: 0 }}
                                            isOpen={isOpen}
                                            videoId="L61p2uyiMSo"
                                            onClose={() => setOpen(false)}
                                        />
                                        <button onClick={() => setOpen(true)}>
                                            <img src={pic2} alt="" className="object-cover rounded-[30px] h-[284px] w-full" />
                                        </button>
                            </React.Fragment>
                        </div>
                        <div className="col-span-6 md:col-span-3 rounded-[30px] h-[300px] md:h-full overflow-hidden cursor-pointer">
                            <div className="relative rounded-[30px] h-[284px] bg-[#bdbcbc] px-8 py-10 text-[#202020]">
                                <h1 className="text-3xl">
                                    140+
                                </h1>
                                <p className="text-sm my-2">PROPERTIES</p>
                                <p className="text-xs">
                                    Explore our wide variety of of properties to find your dream home today.
                                </p>
                                <div className="absolute p-3 bg-white rounded-[50%] bottom-12 right-8">
                                    <AiOutlineArrowRight
                                        className='text-2xl transition-transform hover:-rotate-45 duration-150'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero