import React from 'react'
import SubFooter from '../components/SubFooter';
import Service from '../components/Service';

const ServicePage = () => {
  return (
    <div className="max-w-7xl m-auto">
        <div className="bg-transparent py-16 px-2">
            <section className="w-full">
                <Service />
                <SubFooter />
            </section>
        </div>
     </div>
  )
}

export default ServicePage