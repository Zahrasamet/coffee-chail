import React from 'react'
import { FaAward, FaCoffee, FaTable, FaTruck } from 'react-icons/fa'
import ServiceItem from '../module/navbar/serviceItem/ServiceItem'

function Services({ services }) {
  return (
    <div className='container-fluid pt-5' dir="rtl" lang="fa">
      <div className='container'>
        <div className='section-title text-center mb-5'>
          <h4 className='text-primary text-uppercase' style={{ letterSpacing: "5px" }}>
            خدمات ما
          </h4>
          <h1 className='display-4'>نوشیدنی‌هایی برای هر حال و هوایی</h1>
        </div>

        <div className='row'>
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              title={service.title}
              desc={service.desc}
              img={service.img}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
