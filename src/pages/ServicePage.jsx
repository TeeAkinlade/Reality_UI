import React from 'react'
import SubFooter from '../components/SubFooter';
import Services from '../components/services';

const ServicePage = () => {
  return (
    <div className="max-w-7xl m-auto">
        <div className="bg-transparent py-16 px-2">
            <section className="w-full">
                <Services />
                <SubFooter />
            </section>
        </div>
     </div>
  )
}

export default ServicePage