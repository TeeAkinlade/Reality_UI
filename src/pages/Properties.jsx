import { Link } from 'react-router-dom'
import property1 from '../image/property-01.webp'
import property2 from '../image/property-02.webp'
import property3 from '../image/property-03.webp'
import property4 from '../image/property-04.webp'
import { AiOutlinePlus } from 'react-icons/ai'
import { LiaBedSolid } from 'react-icons/lia'
import { LuBath } from 'react-icons/lu'
import { PiArrowSquareUpRightLight } from 'react-icons/pi'
import { LiaTimesSolid } from 'react-icons/lia'
import SubFooter from '../components/SubFooter'


const Properties = () => {
  return (
    <div className='m-auto max-w-7xl'>
        <div className="py-16 px-4">
            <h1 className="text-6xl text-center mb-12">Our Properties</h1>
            <p className="text-xl m-auto max-w-2xl text-center">Welcome to our properties page, where you can explore a wide range of stunning homes, from cozy apartments to luxurious estates.</p>
            <div className="grid grid-cols-1 lg:grid-cols-8 mt-10 gap-[2rem]">
                <div className="lg:col-span-2 lg:static fixed top-0 bottom-0 bg-white lg:bg-transparent">
                    <div className="flex justify-between">
                        <p className="text-white text-xl font-semibold">Filters</p>
                        <p className="text-white text-xl font-normal">All Properties</p>
                    </div>
                    <hr className="h-[1px] w-full bg-white"></hr>
                    <p className="text-white mt-5 text-xl font-normal">Location</p>
                    <div className="flex justify-start items-center mt-5 mb-10 flex-wrap gap-[1rem]">
                        <button className="text-[#2c2c2c] text-sm lg:text-lg border border-whiter p-2 rounded-[100px] hover:border-black transition ease-in-out">Miami</button>
                        <button className="text-[#2c2c2c] text-sm lg:text-lg border border-whiter p-2 rounded-[100px] hover:border-black transition ease-in-out">Aspen</button>
                        <button className="text-[#2c2c2c] text-sm lg:text-lg border border-whiter p-2 rounded-[100px] hover:border-black transition ease-in-out">Malibu</button>
                        <button className="text-[#2c2c2c] text-sm lg:text-lg border border-whiter p-2 rounded-[100px] hover:border-black transition ease-in-out">New York</button>
                    </div>
                    <hr className="h-[1px] w-full bg-white"></hr>
                    <p className="text-white mt-10 text-xl font-normal">Property Type</p>
                    <div className="flex justify-start items-center my-5 mb-10 flex-wrap gap-[1rem]">
                        <button className="text-[#2c2c2c] text-sm lg:text-lg border border-whiter p-2 rounded-[100px] hover:border-black transition ease-in-out">Miami</button>
                        <button className="text-[#2c2c2c] text-sm lg:text-lg border border-whiter p-2 rounded-[100px] hover:border-black transition ease-in-out">Aspen</button>
                        <button className="text-[#2c2c2c] text-sm lg:text-lg border border-whiter p-2 rounded-[100px] hover:border-black transition ease-in-out">Malibu</button>
                        <button className="text-[#2c2c2c] text-sm lg:text-lg border border-whiter p-2 rounded-[100px] hover:border-black transition ease-in-out">New York</button>
                    </div>
                </div>
                <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] mb-12">
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
            <SubFooter />
        </div>
    </div>
  )
}

export default Properties