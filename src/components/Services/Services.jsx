import React from 'react'
import './Services.css'

function Services() {
  const services = [
    { id: 1, title: 'Tibbiy Konsultatsiya', desc: 'Professional tibbiy maslahat' },
    { id: 2, title: 'Diler Xizmati', desc: 'Rasmiy diler haqida umumiy ma\'lumot' },
    { id: 3, title: 'Texnik Qo\'llab-Quvvatlash', desc: '24/7 texnik yordam xizmati' },
    { id: 4, title: 'O\'rnatish va Konfiguratsiya', desc: 'Professional o\'rnatish xizmati' },
    { id: 5, title: 'Kadrlarni O\'qitish', desc: 'Staff training va certification' },
    { id: 6, title: 'Tekshiruv va Xizmat', desc: 'Muntazam texnik xizmatlar' }
  ]

  return (
    <section className='services' id='services'>
      <div className='container'>
        <h2>Bizning Xizmatlar</h2>
        <p className='section-subtitle'>Komплексный набор услуг</p>
        <div className='services-grid'>
          {services.map(service => (
            <div key={service.id} className='service-item'>
              <div className='service-number'>{String(service.id).padStart(2, '0')}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services