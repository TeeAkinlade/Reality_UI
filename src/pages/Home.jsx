import React from 'react'
import Hero from '../components/Hero'
import property1 from '../image/property-01.webp'
import property2 from '../image/property-02.webp'
import property3 from '../image/property-03.webp'
import property4 from '../image/property-04.webp'
import testimonial1 from '../image/testimonial1.webp'
import testimonial2 from '../image/testimonial2.webp'
import post1 from '../image/post 01.webp'
import post2 from '../image/post 02.webp'
import post3 from '../image/post 03.webp'
import post4 from '../image/post 04.webp'
import { AiOutlinePlus } from 'react-icons/ai'
import { LiaBedSolid } from 'react-icons/lia'
import { LuBath } from 'react-icons/lu'
import { PiArrowSquareUpRightLight } from 'react-icons/pi'
import { LiaTimesSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import SubFooter from '../components/SubFooter'

const Home = () => {
  return (
    <div className='max-w-7xl m-auto'>
        <div className="mx-2 my-2 bg-transparent">
            <Hero />
            <Services />
            <div className="mx-2">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl mt-10 font-semibold text-[#202020]">Latest properties</h1>
                <Link 
                  to="/properties"
                  className="text-sm mt-10 font-medium mr-2 bg-transparent p-3 rounded-full text-[#202020] hover:bg-black hover:text-white">
                  View All
                </Link>

              </div>
              <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem] my-12">
                <Link to="" >
                    <div className="rounded-[30px] h-[300px] relative">
                        <img src={property1} alt="property" className='object-cover rounded-[30px]' />
                        <AiOutlinePlus 
                            className="absolute h-10 w-10 bg-[#aaa9a9] rounded-[50%] text-white p-2 backdrop-blur-lg top-4 right-4 hover:rotate-45"
                        />
                        <div className="opacity-0 hover:opacity-100 transition duration-700 ease-out">
                            <div className="absolute top-0 bg-[#aaa9a9] px-6 pt-6 pb-12 w-full overflow-hidden rounded-t-[30px]">
                                <p className="font-semibold">$580000</p>
                                <p className="text-sm my-3 text-[#333]">1234 Harrison Avenue, New York NY</p>
                                <div className="flex space-x-5 items-center">
                                    <p className="flex items-center"><LiaBedSolid 
                                        className='mr-1 text-[#333]'
                                    />3</p>
                                    <p className="flex items-center"><LuBath 
                                        className='mr-1 text-[#333]'
                                    />2</p>
                                    <p className="flex items-center"><PiArrowSquareUpRightLight 
                                        className='mr-1 text-[#333]'
                                    />2200</p>
                                </div>
                            </div>
                              <LiaTimesSolid 
                                  className="absolute h-10 w-10 bg-[#aaa9a9] rounded-[50%] text-white p-2 backdrop-blur-lg bottom-[5.5rem] right-4"
                                />
                            </div>
                        </div>
                        <p className="mt-4 text-[#333] text-lg font-semibold">Luxury Condo</p>
                    </Link>
                    <Link to="" >
                        <div className="rounded-[30px] h-[300px] relative">
                            <img src={property2} alt="property" className='object-cover rounded-[30px]' />
                            <AiOutlinePlus 
                                className="absolute h-10 w-10 bg-[#aaa9a9] rounded-[50%] text-white p-2 backdrop-blur-lg top-4 right-4 hover:rotate-45"
                            />
                            <div className="opacity-0 hover:opacity-100 transition duration-700 ease-out">
                                <div className="absolute top-0 bg-[#aaa9a9] px-6 pt-6 pb-12 w-full overflow-hidden rounded-t-[30px]">
                                    <p className="font-semibold">$7980000</p>
                                    <p className="text-sm my-3 text-[#333]">745 Ant Avenue, Aspen, CO</p>
                                    <div className="flex space-x-5 items-center">
                                        <p className="flex items-center"><LiaBedSolid 
                                            className='mr-1 text-[#333]'
                                        />3</p>
                                        <p className="flex items-center"><LuBath 
                                            className='mr-1 text-[#333]'
                                        />2</p>
                                        <p className="flex items-center"><PiArrowSquareUpRightLight 
                                            className='mr-1 text-[#333]'
                                        />2200</p>
                                    </div>
                                </div>
                                <LiaTimesSolid 
                                    className="absolute h-10 w-10 bg-[#aaa9a9] rounded-[50%] text-white p-2 backdrop-blur-lg bottom-[5.5rem] right-4"
                                />
                            </div>
                        </div>
                        <p className="mt-4 text-[#333] text-lg font-semibold">Mountain Retreat</p>
                    </Link>
                    <Link to="" >
                        <div className="rounded-[30px] h-[300px] relative">
                            <img src={property3} alt="property" className='object-cover rounded-[30px]' />
                            <AiOutlinePlus 
                                className="absolute h-10 w-10 bg-[#aaa9a9] rounded-[50%] text-white p-2 backdrop-blur-lg top-4 right-4 hover:rotate-45"
                            />
                            <div className="opacity-0 hover:opacity-100 transition duration-700 ease-out">
                                <div className="absolute top-0 bg-[#aaa9a9] px-6 pt-6 pb-12 w-full overflow-hidden rounded-t-[30px]">
                                    <p className="font-semibold">$2585500</p>
                                    <p className="text-sm my-3 text-[#333]">57 Hugs street, Miami, FL</p>
                                    <div className="flex space-x-5 items-center">
                                        <p className="flex items-center"><LiaBedSolid 
                                            className='mr-1 text-[#333]'
                                        />5</p>
                                        <p className="flex items-center"><LuBath 
                                            className='mr-1 text-[#333]'
                                        />6</p>
                                        <p className="flex items-center"><PiArrowSquareUpRightLight 
                                            className='mr-1 text-[#333]'
                                        />5200</p>
                                    </div>
                                </div>
                                <LiaTimesSolid 
                                    className="absolute h-10 w-10 bg-[#aaa9a9] rounded-[50%] text-white p-2 backdrop-blur-lg bottom-[5.5rem] right-4"
                                />
                            </div>
                        </div>
                        <p className="mt-4 text-[#333] text-lg font-semibold">Downtown Penthouse</p>
                    </Link>
                    <Link to="" >
                        <div className="rounded-[30px] h-[300px] relative">
                            <img src={property4} alt="property" className='object-cover rounded-[30px]' />
                            <AiOutlinePlus 
                                className="absolute h-10 w-10 bg-[#aaa9a9] rounded-[50%] text-white p-2 backdrop-blur-lg top-4 right-4 hover:rotate-45"
                            />
                            <div className="opacity-0 hover:opacity-100 transition duration-700 ease-out">
                                <div className="absolute top-0 bg-[#aaa9a9] px-6 pt-6 pb-12 w-full overflow-hidden rounded-t-[30px]">
                                    <p className="font-semibold">$12800000</p>
                                    <p className="text-sm my-3 text-[#333]">165 ocean drive Avenue, Malibu, CA</p>
                                    <div className="flex space-x-5 items-center">
                                        <p className="flex items-center"><LiaBedSolid 
                                            className='mr-1 text-[#333]'
                                        />6</p>
                                        <p className="flex items-center"><LuBath 
                                            className='mr-1 text-[#333]'
                                        />4</p>
                                        <p className="flex items-center"><PiArrowSquareUpRightLight 
                                            className='mr-1 text-[#333]'
                                        />7800</p>
                                    </div>
                                </div>
                                <LiaTimesSolid 
                                    className="absolute h-10 w-10 bg-[#aaa9a9] rounded-[50%] text-white p-2 backdrop-blur-lg bottom-[5.5rem] right-4"
                                />
                            </div>
                        </div>
                        <p className="mt-4 text-[#333] text-lg font-semibold">Oceanfront Estate</p>
                    </Link>
              </div>
            </div>
            <div className="my-16 mx-2">
              <div className="flex flex-wrap justify-between relative">
                <div className="w-full lg:w-1/2 text-white">
                  <h1 className="text-5xl mt-[3rem] font-medium leading-5">What Our Clients Say</h1>
                  <p className="text-base mt-12">At Realty, we are committed to providing our clients with the best possible real estate experience. But don 't just take our word for it. Here 's what some of our satisfied clients have to say about working with us.</p>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex relative">
                    <div className="flex flex-col items-end">
                      <div className="w-[100px] h-[112px] lg:w-[132px] lg:h-[150px] bg-white rounded-t-[30px] rounded-bl-[30px]">
                         <img src={testimonial1} alt="" className="rounded-[30px] pr-5 pb-5 w-full h-full object-cover" />
                      </div>
                      <div className="bg-white rounded-l-[1.5rem] w-[65%] min-h-[112px] lg:min-h-[3rem] bottom right-0"></div>
                    </div>
                    <div className="bg-white rounded-t-[30px] rounded-br-[30px] w-full px-8 py-6">
                      <p className="font-semibold">John Smith</p>
                      <p className="text-[#202020] mt-2">"Working with Realty was a pleasure from start to finish. Their team is knowledgeable, professional, and dedicated to helping you find the perfect property. Highly recommend!"</p>
                    </div>
                  </div>
                  <div className="flex relative mt-10">
                    <div className="bg-white rounded-t-[30px] rounded-bl-[30px] w-full px-8 py-6">
                      <p className="font-semibold">Jane Doe</p>
                      <p className="text-[#202020] mt-2">"I couldn't be happier with the service I received from Realty. They made the buying process smooth and stress-free, and I couldn't be happier with my new home. Thank you!"</p>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="w-[100px] h-[112px] lg:w-[132px] lg:h-[150px] bg-white rounded-t-[30px] rounded-br-[30px]">
                         <img src={testimonial2} alt="" className="rounded-[30px] pl-5 pb-5 w-full h-full object-cover" />
                      </div>
                      <div className="bg-white rounded-r-[1.5rem] w-[65%] min-h-[112px] lg:min-h-[3rem] bottom-0 left-0"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-12">
                <Link 
                    to="/blog"
                    className="justify-end text-sm mt-10 font-medium mr-2 border p-3 rounded-full text-[#666666] hover:bg-black hover:text-white">
                    View All
                  </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-[1rem] mx-2 mb-24">
              <div className="col-span-6 lg:col-span-3 h-[250px] lg:h-[400px]">
                <div className='h-[250px] lg:h-[400px] rounded-[30px] overflow-hidden'>
                  <img src={post1} className="rounded-[30px] object-cover hover:transform duration-300 hover:scale-150" />
                </div>
                <p className="text-base lg:text-2xl leading-3 font-semibold lg:font-medium text-[#313131] my-4">Creating a cozy living room and tricks</p>
                <p className="text-sm lg:text-base leading-3 font-semibold lg:font-medium mb-4 text-[#919090]">Make your living room the perfect place to relax and entertain with our tips for creating a cozy place</p>
              </div>
              <div className="col-span-6 lg:col-span-3">
                <div className="flex flex-wrap gap-[1rem]">
                  <div className="h-[250px] lg:h-[150px] lg:w-[200px] rounded-[30px] overflow-hidden">
                    <img src={post2} className="object-cover hover:transform duration-300 hover:scale-150" />
                  </div>
                  <div className="lg:max-w-[400px]">
                    <p className="font-semibold lg:font-medium text-[#474747] text-xl my-2">Add a Pop of Colour with a Statement Armchair</p>
                    <p className="text-[#919090]">Brighten up any space with a bold yellow armchair and add a pop of colour to your decor with our expert advice</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-[1rem] my-[1rem]">
                  <div className="h-[250px] lg:h-[150px] lg:w-[200px] rounded-[30px] overflow-hidden">
                    <img src={post3} className="object-cover hover:transform duration-300 hover:scale-150" />
                  </div>
                  <div className="lg:max-w-[400px]">
                    <p className="font-semibold lg:font-medium text-[#474747] text-xl my-2">Sleek and Modern: A virtual tour of a contemporary home</p>
                    <p className="text-[#919090]">Take a virtual tour of your modern stunning home, inisde and out and experience the slick style and innovative features for yourself</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-[1rem]">
                  <div className="h-[250px] lg:h-[150px] lg:w-[200px] rounded-[30px] overflow-hidden">
                    <img src={post4} className="object-cover hover:transform duration-300 hover:scale-150" />
                  </div>
                  <div className="lg:max-w-[400px]">
                    <p className="font-semibold lg:font-medium text-[#474747] text-xl my-2">Revamp your kitchen: Simple Upgrades for a new look</p>
                    <p className="text-[#919090]">Transform your kitchen without breaking the bank with our easy upgrades and give your space a fresh new look.</p>
                  </div>
                </div>
              </div>
            </div>
            <SubFooter />
        </div>
    </div>
  )
}

export default Home