import { AiOutlineRight } from 'react-icons/ai'
import post1 from "../image/post-1.webp"
import post2 from "../image/post-2.webp"
import post3 from "../image/post-3.webp"
import post4 from "../image/post-4.webp"
import SubFooter from '../components/SubFooter'

const Blog = () => {
  return (
    <div className="max-w-7xl m-auto">
        <div className="bg-transparent px-4 py-16">
            <p className="flex items-center space-x-3 text-[#333] text-sm mb-10 lg:mb-16">
                Home 
                <AiOutlineRight
                    className='ml-3'
                />
                <span className="text-white font-semibold"> Blog</span>
            </p>
            <div className="max-w-3xl m-auto">
                <h1 className="text-3xl font-medium lg:text-6xl text-center text-[#202020]">Our Blog</h1>
                <p className="text-center lg:text-lg text-[#202020] my-8 lg:my-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                </p>
                <div className="flex justify-center gap-[1rem] flex-wrap">
                    <button className="text-sm text-[#202020] py-2 px-3 bg-[#dbdada] rounded-[30px]">Home Tour
                    </button>
                    <button className="text-sm text-[#202020] py-2 px-3 bg-[#dbdada] rounded-[30px]">
                        Living Room
                    </button>
                    <button className="text-sm text-[#202020] py-2 px-3 bg-[#dbdada] rounded-[30px]">Kitchen
                    </button>
                    <button className="text-sm text-[#202020] py-2 px-3 bg-[#dbdada] rounded-[30px]">Furniture
                    </button>
                    <button className="text-sm text-[#202020] py-2 px-3 bg-[#dbdada] rounded-[30px]">Home Upgrades
                    </button>
                    <button className="text-sm text-[#202020] py-2 px-3 bg-[#dbdada] rounded-[30px]">Real Estate
                    </button>
                    <button className="text-sm text-[#202020] py-2 px-3 bg-[#dbdada] rounded-[30px]">Home Decor
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] mt-10 mb-16">
                <div>
                    <div className="rounded-[30px] h-[250px] object-cover w-full overflow-hidden">
                        <img src={post1}
                            className='object-cover w-full hover:scale-150 duration-300 ease-in'
                        />
                    </div>
                    <p className='text-lg font-medium lg:text-2xl text[#202020] mt-4'>Creating a cozy living room with tricks</p>
                    <p className="mt-2 text-base text-gray-600">Make your living room the perfect place to relax and entertain with our tips for creating a cozy place</p>
                </div>
                <div>
                    <div className="rounded-[30px] h-[250px] object-cover w-full overflow-hidden">
                        <img src={post2}
                            className='object-cover w-full hover:scale-150 duration-300 ease-in'
                        />
                    </div>
                    <p className='text-lg font-medium lg:text-2xl text[#202020] mt-4'>Add a pop of colour with a statement Armchair</p>
                    <p className="mt-2 text-base text-gray-600">Brighten up any space with a bold yellow armchair and add a pop of colour to your decor with our expert advice</p>
                </div>
                <div className="">
                    <div className="rounded-[30px] h-[250px] object-cover w-full overflow-hidden">
                        <img src={post3}
                            className='object-cover w-full hover:scale-150 duration-300 ease-in'
                        />
                    </div>
                    <p className='text-lg font-medium lg:text-2xl text[#202020] mt-4'>Sleek and Modern: A virtual tour of a contemporary home</p>
                    <p className="mt-2 text-base text-gray-600">Take a virtual tour of your modern stunning home, inisde and out and experience the slick style and innovative features for yourself</p>
                </div>
                <div className="">
                    <div className="rounded-[30px] h-[250px] object-cover w-full overflow-hidden">
                        <img src={post4}
                            className='object-cover w-full hover:scale-150 duration-300 ease-in'
                        />
                    </div>
                    <p className='text-lg font-medium lg:text-2xl text[#202020] mt-4'>Creating a cozy living room with tricks</p>
                    <p className="mt-2 text-base text-gray-600">Make your living room the perfect place to relax and entertain with our tips for creating a cozy place</p>
                </div>
            </div>
            <SubFooter />
        </div>
    </div>
  )
}

export default Blog