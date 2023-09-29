import image1 from '../image/wall.jpg';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="max-w-7xl m-auto">
        <div className="bg-transparent py-4 px-2">
            <section className="grid grid-cols-1 lg:grid-cols-2">
              <p className='text-2xl font-medium lg:text-4xl text-gray-900'>Comprehensive real estate services to help you buy, sell, and manage your properties with ease and confidence.</p>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1rem] lg:gap-[2rem] mt-16 text-[#202020]">
              <div className="">
                <h1 className="text-xl lg:text-2xl">01</h1>
                <p className="text-base lg:text-lg my-4">PROPERTY VALUATION</p>
                <p className="lg:text-lg">Get an accurate valuation of your property with our expert team.</p>
              </div>
              <div className="">
                <h1 className="text-xl lg:text-2xl">02</h1>
                <p className="text-base lg:text-lg my-4">PROPERTY MANAGEMENT</p>
                <p className="lg:text-lg">We offer full-service property management to help you maximize your investment.</p>
              </div>
              <div className="">
                <h1 className="text-xl lg:text-2xl">03</h1>
                <p className="text-base lg:text-lg my-4">PROPERTY VALUATION</p>
                <p className="lg:text-lg">Our team can help you identify and invest in profitable real estate opportunities</p>
              </div>
            </div>
                <div className="w-full h-[550px] lg:h-[620px] mt-4 lg:mt-8 relative text-center flex flex-col justify-center items-center">
                    <img src={image1} alt="" className='w-full h-full object-cover rounded-[30px]' />
                    <div className="absolute lg
                    :top-24 max-w-[52rem] mx-6">
                      <h1 className="text-white text-4xl lg:text-6xl">Your Trusted Real Estate with 15 years of experience</h1>
                      <p className="text-white font-base my-12">At Realty, we are passionate about real estate and committed to providing our clients with exceptional service and support. With years of experience in the industry and a proven track record, our expert agents can help you achieve your real estate goals.</p>
                      <Link
                        to="/about"
                        className="bg-black text-white px-4 py-3 rounded-full lg:mt-24 mt-28"
                        >
                        Learn More
                      </Link>
                    </div>
                </div>
        </div>
     </div>
  )
}

export default Services