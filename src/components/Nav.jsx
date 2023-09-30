import React, { useState } from 'react'
import logo from "../image/logo.svg"
import { Link, useLocation } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCross1 } from 'react-icons/rx'

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation();
    console.log(location.pathname)

    const pathMatchRoute = (route) => {
        if (route === location.pathname) {
            return true
        }
    }

  return (
    <div className='max-w-7xl m-auto'>
        <div className={`bg-transparent py-4 px-4 ${isNavOpen && 'bg-white'}`}>
            <div className="flex items-center justify-between">
                <Link to="/">
                    <img src={logo} alt="logo" className='cursor-pointer' />
                </Link>
                    <section className="flex lg:hidden">

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
                            <div className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                            >
                            </div>
                                <ul className="flex flex-col items-center justify-between min-h-[150px] pb-4">
                                    <Link onClick={() => setIsNavOpen(!isNavOpen)} to="/services">
                                        <li className={`cursor-pointer text-md mx-5 font-normal text-gray-700 ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block ${pathMatchRoute('/services') && "text-red-500 border-b-[1px] border-[#313131]"}`}>Services</li>
                                    </Link>
                                    <Link onClick={() => setIsNavOpen(!isNavOpen)} to="/about">
                                        <li className={`cursor-pointer text-md font-normal mx-5 text-gray-700 ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block ${pathMatchRoute('/about') && "text-red-500 border-b-[1px] border-[#313131]"}`}>About</li>
                                    </Link>
                                    <Link onClick={() => setIsNavOpen(!isNavOpen)} to="/properties" >
                                        <li className={`cursor-pointer text-md font-normal mx-5 text-gray-700 ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block ${pathMatchRoute('/properties') && "text-red-500 border-b-[1px] border-[#313131]"}`}>Properties</li>
                                    </Link>
                                    <Link onClick={() => setIsNavOpen(!isNavOpen)} to="/blog" >
                                        <li className={`cursor-pointer text-md font-normal mx-5 text-gray-700 ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block ${pathMatchRoute('/blog') && "text-red-500 border-b-[1px] border-[#313131]"}`}>Blog</li>
                                    </Link>
                                </ul>
                        </div>
                    </section>

                    <ul className="hidden space-x-8 lg:flex">
                        <Link to="/services">
                            <li className={`cursor-pointer text-md mx-5 font-normal text-gray-700 ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block ${pathMatchRoute('/services') && "text-red-500 border-b-[1px] border- border-white"}`}>Services</li>
                        </Link>
                        <Link to="/about">
                            <li className={`cursor-pointer text-md font-normal mx-5 text-gray-700 ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block ${pathMatchRoute('/about') && "text-red-500 border-b-[1px] border-white"}`}>About</li>
                        </Link>
                        <Link to="/properties" >
                            <li className={`cursor-pointer text-md font-normal mx-5 text-gray-700 ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block ${pathMatchRoute('/properties') && "text-red-500 border-b-[1px] border-white"}`}>Properties</li>
                        </Link>
                        <Link to="/blog" >
                            <li className={`cursor-pointer text-md font-normal mx-5 text-gray-700 ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block ${pathMatchRoute('/blog') && "text-red-500 border-b-[1px] border-white"}`}>Blog</li>
                        </Link>
                    </ul>
                    <div className="flex items-center space-x-2">
                        <Link to="/contact"
                            className='bg-black text-white  px-5 py-2 rounded-full cursor-pointer text-base'
                        >
                            Contact Us
                        </Link>
                        <div className="space-y-2 block lg:hidden"
                            onClick={() => setIsNavOpen((prev) => !prev)} 
                        >
                            {
                                isNavOpen ? 
                                <RxCross1 
                                    className='text-black h-7 w-7'
                                />
                                : 
                                <RxHamburgerMenu
                                    className='text-black h-7 w-7'
                                /> 
                            }                
                        </div>
                    </div>
            </div>
        </div>   
    </div>
  )
}

export default Nav