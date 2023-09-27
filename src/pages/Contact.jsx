import React from 'react'
import { LuMessageSquare } from 'react-icons/lu';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

const Contact = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div className="bg-transparent py-16 px-2">
        <section className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] w-full">
            <div className="rounded-[30px] bg-[#e2e2e2] px-10 py-5">
              <div className="flex items-center">
                <LuMessageSquare className='h-7 w-7 mr-1' />
                <p className='text-white text-3xl'>Email</p>
              </div>
              <p className="text-white mt-4">info@example.com</p>
            </div>
            <div className="rounded-[30px] bg-[#e2e2e2] px-10 py-5">
              <div className="flex items-center">
                <FiPhone className='h-7 w-7 mr-1' />
                <p className='text-white text-3xl'>Phone</p>
              </div>
              <p className="text-white mt-4">+12 345 678 9900</p>
            </div>
            <div className="rounded-[30px] bg-[#e2e2e2] px-10 py-5">
              <div className="flex items-center">
                <IoLocationOutline className='h-7 w-7 mr-1 font-bold' />
                <p className='text-white text-3xl'>Office</p>
              </div>
              <p className="text-white mt-4">1234 Harrison Avenue, New York NY</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1rem] w-full my-4">
            <div className="w-full p-[1.5rem] lg:p-[2rem] bg-[#e2e2e2] rounded-[30px]">
              <form>
                <p className="text-5xl text-white my-6">Contact Us</p>
                <input 
                  type="text" 
                  placeholder='Full name'
                  className="bg-white rounded-full w-full px-4 py-2.5 my-3"
                
                />
                <input 
                  type="text" 
                  placeholder='Email Address'
                  className="bg-white rounded-full w-full px-4 py-2.5 my-3"
                
                />
                <input 
                  type="text" 
                  placeholder='Phone number'
                  className="bg-white rounded-full w-full px-4 py-2.5 my-3"
                
                />
                <textarea 
                  type="text" 
                  placeholder='Enter your message'
                  className="bg-white w-full rounded-[30px] h-[200px] px-4 py-2.5 my-3"
                
                />
                <button className="w-full bg-black text-white px-4 py-2.5 text-center font-medium rounded-full">Submit</button>
              </form>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Contact