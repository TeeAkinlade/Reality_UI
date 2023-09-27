import React from 'react'
import SubFooter from './SubFooter'
import pic1 from "../image/hero.jpg"
import star from "../image/star.svg"
import { AiOutlineArrowRight } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='max-w-7xl m-auto'>
        <div className="px-2 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[0.5rem]">
                <h1 className='text-5xl text-white font-medium'>Discover Your Ideal Living Space</h1>
                <p className="text-lg"> Space Explore our latest collection of premium properties and find your dream home today. From luxurious estates to trendy urban condos, we have something for every lifestyle and budget.</p>
            </div>
            <div className="mt-[1rem] lg:mt-10 grid grid-cols-1 lg:grid-cols-6 gap-[1rem]">
                <div className="block relative col-span-6 lg:col-span-3 h-[250px] lg:h-[650px] rounded-[30px]">
                    <img src={pic1}
                        className='object-cover rounded-[30px]'
                    />
                    <div className="flex items-center absolute top-8 left-8 gap-1 bg-white p-3 rounded-full">
                        <img src={star} className="h-5" />
                        <p className="text-[#444444]">New Property</p>
                    </div>
                    <div className="flex justify-between items-center absolute bottom-[170px] left-8">
                        <div className="">
                            <p>FlowLive Estate</p>
                            <p>4th Avenue, GW</p>
                        </div>
                        <div className="p-3 bg-white rounded-[50%] flrx justify-end">
                            <AiOutlineArrowRight
                                className='text-2xl'
                            />
                        </div>
                    </div>
                </div>
                <div className="block relative col-span-6 lg:col-span-3 h-[250px] lg:h-[650px] rounded-[30px] group">
                    <div className="row-span-3 rounded-[30px] w-full overflow-hidden">
                        swipper
                    </div>
                    <div className="row-span-3 rounded-[30px] grid grid-cols-1 lg:grid-cols-6 gap-[1rem]">
                        <div className="col-span-6 lg:col-span-3 rounded-[30px] h-[250px] lg:h-auto relative group overflow-hidden cursor-pointer">
                            {/* <img src={} alt="" className="object-cover rounded-[30px]" /> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <SubFooter />
    </div>
  )
}

export default Hero