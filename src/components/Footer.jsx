import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from "../image/footerLogo.svg";

const Footer = () => {
  return (
    <div className='max-w-7xl m-auto'>
        <div className=" bg-transparent mt-8 lg:mt-10 px-4">
            <footer className="mt-[5rem] container lg:mb-[1rem]">
                <div className="text-white rounded-[30px] p-[1rem] lg:p-[2rem] bg-[#2c2c2c]" style={{translate: 'none', rotate: "none", scale: "none", transform:"translate(0px, -50px)"}}>
                    <div className="grid grid-cols-1 lg:grid-cols-7 gap-[1rem]">
                        <div className="cols-span-7 lg:col-span-2 ">
                            <img src={footerLogo} alt="" className="text-white mb-5" />
                            <p className="font-semibold">"Home is where the heart is and where the memories are made "</p>
                        </div>
                        <div className="cols-span-7 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-[1rem] lg:mt-0">
                            <div className="">
                                <h3 className='text-lg mb-5'>Template</h3>
                                <Link to="/company"
                                    className='block font-semibold text-[#858685dd] mt-5 text-md hover:text-white duration-300'
                                >
                                    Company
                                </Link>
                                <Link to="/services"
                                    className='block font-semibold text-[#858685dd] mt-5 text-md hover:text-white duration-300'
                                >
                                    Services
                                </Link>
                                <Link to="/properties"
                                    className='block font-semibold text-[#858685dd] mt-5 text-md hover:text-white duration-300'
                                >
                                    Properties
                                </Link>
                                <Link to="/blog"
                                    className='block font-semibold text-[#858685dd] mt-5 text-md hover:text-white duration-300'
                                >
                                    Blog
                                </Link>
                                <Link to="/contact"
                                    className='block font-semibold text-[#858685dd] mt-5 text-md hover:text-white duration-300'
                                >
                                    Contact Us
                                </Link>
                            </div>
                            <div className="">
                                <h3 className='text-lg mb-5'>Info</h3>
                                <Link to="#"
                                    className='block font-semibold text-[#858685dd] mt-5 text-md hover:text-white duration-300'
                                >
                                    Style Guide
                                </Link>
                                <Link to="#"
                                    className='block font-semibold text-[#858685dd] mt-5 text-md hover:text-white duration-300'
                                >
                                    Lincense
                                </Link>
                                <Link to="#"
                                    className='block font-semibold text-[#858685dd] mt-5 text-md hover:text-white duration-300'
                                >
                                    Changelog
                                </Link>
                                <Link to="#"
                                    className='block font-semibold text-[#858685dd] mt-5 text-md hover:text-white duration-300'
                                >
                                    404
                                </Link>
                                <Link to="#"
                                    className='block font-semibold text-[#858685dd] mt-5 text-md hover:text-white duration-300'
                                >
                                    Protected
                                </Link>
                            </div>
                            <div className="">
                                <h3 className='text-lg mb-5'>Social</h3>
                                <Link to="#"
                                    className='block font-semibold text-[#858685dd] mt-5 text-md hover:text-white duration-300'
                                >
                                    Facebook
                                </Link>
                                <Link to="/services"
                                    className='block font-semibold text-[#858685dd] mt-5 text-md hover:text-white duration-300'
                                >
                                    Twitter
                                </Link>
                                <Link to="/properties"
                                    className='block font-semibold text-[#858685dd] mt-5 text-md hover:text-white duration-300'
                                >
                                    Instagram
                                </Link>
                                <Link to="/blog"
                                    className='block font-semibold text-[#858685dd] mt-5 text-md hover:text-white duration-300'
                                >
                                    Linkedln
                                </Link>
                            </div>
                        </div>
                        <div className="cols-span-7 lg:col-span-2 ">
                            <h3 className='text-lg mb-5'>Newsletter</h3>
                            <div className="mt-[1rem] flex-wrap items-center justify-between bg-white rounded-[50px] p-1 pl-5 lg:flex">                             
                                <input type='email'
                                placeholder='Email Address'
                                    className='border text-sm h-full lg:text-base lg:border-none bg-white outline-none placeholder:text-[#afafaf] placeholder:text-sm placeholder:opacity-[0.6]'
                                />
                                <button type='submit'
                                    className='text-white bg-[#2c2c2c] px-3 py-2 rounded-[20px] cursor-pointer hover:bgtext-white hover:border-white'
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="text-[#858685dd] font-semibold mt-6">
                    © 2023 Realty_clone by <span className="text-white">TeeAkins</span> .
                    </p>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Footer