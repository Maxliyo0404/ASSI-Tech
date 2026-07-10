import React from 'react'
import './Product.css'

function Product() {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Dizayn',
      description: 'Zamonaviy va responsive web saytlar yaratish'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobil Ilova',
      description: 'iOS va Android platformalari uchun mobil ilovalar'
    },
    {
      id: 3,
      icon: '🔐',
      title: 'Xavfsizlik',
      description: 'Yuqori darajadagi ma\'lumot xavfsizligi'
    },
    {
      id: 4,
      icon: '⚙️',
      title: 'IT Xizmati',
      description: '24/7 texnik qo\'llab-quvvatlash va xizmat'
    },
    {
      id: 5,
      icon: '📊',
      title: 'Ma\'lumotlar Tahlili',
      description: 'Biznes ma\'lumotlarini tahlil va optimizatsiya'
    },
    {
      id: 6,
      icon: '🎨',
      title: 'Grafik Dizayn',
      description: 'Branding va vizual identifikatsiya xizmatlari'
    }
  ]

  return (
    <section className='services' id='services'>
      <div className='services-container'>
        <h2 className='services-title'>Bizning Xizmatlar</h2>
        <p className='services-subtitle'>
          Biz turli xil texnologik xizmatlarni taqdim etamiz
        </p>
        
        <div className='services-grid'>
          {services.map(service => (
            <div key={service.id} className='service-card'>
              <div className='service-icon'>{service.icon}</div>
              <h3 className='service-title'>{service.title}</h3>
              <p className='service-description'>{service.description}</p>
              <button className='service-btn'>Ko'proq Ma'lumot</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Product