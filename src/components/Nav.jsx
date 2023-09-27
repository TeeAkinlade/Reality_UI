import React, { useState } from 'react'
import logo from "../image/logo.svg"
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RxCross1 } from 'react-icons/rx'
import star from '../image/star.svg'

const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className='max-w-7xl m-auto'>
        <div className="bg-transparent py-4 px-2">
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
                                <ul className="flex flex-col items-center justify-between min-h-[150px] pb-">
                                    <Link to="/services">
                                        <li className="cursor-pointer text-md mx-5 font-normal text-gray-700 ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block">Services</li>
                                    </Link>
                                    <Link to="/about">
                                        <li className="cursor-pointer text-md font-normal mx-5 text-gray-700 ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block">About</li>
                                    </Link>
                                    <Link to="/properties" >
                                        <li className="cursor-pointer text-md font-normal mx-5 text-gray-700 ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block">Properties</li>
                                    </Link>
                                    <Link to="/blog" >
                                        <li className="cursor-pointer text-md font-normal mx-5 text-gray-700 ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block">Blog</li>
                                    </Link>
                                </ul>
                        </div>
                    </section>

                    <ul className="hidden space-x-8 lg:flex">
                        <Link to='/services'>
                            <li className="cursor-pointer text-md mx-5 font-normal text-black ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block">Services</li>
                        </Link>
                        <Link to='/about'>
                            <li className="cursor-pointer text-md font-normal mx-5 text-black ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block">About</li>
                        </Link>
                        <Link to='/properties'>
                            <li className="cursor-pointer text-md font-normal mx-5 text-black ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block">Properties</li>
                            </Link>
                        <Link to='/blog'>
                            <li className="cursor-pointer text-md font-normal mx-5 text-black ease-in duration-300 hover:opacity-80 hover:text-[tomato] inline-block">Blog</li>
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
                <style>{`
                .hideMenuNav {
                    display: none;
                }
                .showMenuNav {
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 30%;
                    top: 60px;
                    left: 0;
                    background: white;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                }
                `}</style>
            </div>
        </div>   
    </div>
  )
}

export default Nav