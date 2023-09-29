import React from 'react'
import { Link } from 'react-router-dom'
import footer from '../image/footer.webp'

const SubFooter = () => {
  return (
    <div className='max-w-7xl m-auto'>
        <div className=" bg-transparent mt-8 lg:mt-10 px-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1rem] w-full">
                <div className="w-full  rounded-[30px] p-[1.5rem] lg:p-[2rem] text-white bg-[#e2e2e2]">
                    <h1 className="text-[2rem] lg:text-[3.25rem] font-medium leading-[1.25] lg:mt-[3rem]">
                    Take the First Step Towards Your Dream Home Today!
                    </h1>
                    <p className="text-base mt-10">
                    At Realty, we are committed to providing exceptional service to all of our clients. Whether you 're looking to buy, sell, or invest in real estate, our team of expert agents is here to help. Contact us today to discuss your real estate goals and find out how we can assist you every step of the way.
                    </p>
                    <div className="flex start justify-start  mt-10 lg:my-10">
                        <Link to="/contact"
                        className=' bg-black text-white px-3 lg:px-5 py-1.5 lg:py-3 rounded-full cursor-pointer text-sm lg:text-base hover:bg-[tomato] duration-300 ease-in'
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="w-full h-[250px] lg:h-[570px]">
                    <img src={footer} alt="" className='w-full h-full rounded-[30px] object-cover' />
                </div>
            </div> 
        </div>
    </div>
  )
}

export default SubFooter