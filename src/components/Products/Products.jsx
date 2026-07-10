import React from 'react'
import './Products.css'

function Products() {
  const products = [
    { id: 1, name: 'Ultrasound Aparatlari', icon: '📡', desc: 'Zamonaviy ultrasound texnologiyasi' },
    { id: 2, name: 'EKG Apparatlari', icon: '💓', desc: 'Yurak funksiyasini monitoring qilish' },
    { id: 3, name: 'X-Ray Sistemalari', icon: '🖼️', desc: 'Ruxsat etilgan X-ray aparatlari' },
    { id: 4, name: 'Laboratoriya Asboblari', icon: '🧬', desc: 'Qon tahlili uchun asboblar' },
    { id: 5, name: 'Sterilizatsiya Uskunalari', icon: '✨', desc: 'Tibbiy instrument sterilizatsiyasi' },
    { id: 6, name: 'Monitoring Sistemalari', icon: '📊', desc: 'Patient monitoring haqida umumiy ma\'lumotlar' }
  ]

  return (
    <section className='products' id='products'>
      <div className='container'>
        <h2>Bizning Mahsulotlar</h2>
        <p className='section-subtitle'>Eng zamonaviy tibbiy texnologiyalar</p>
        <div className='products-grid'>
          {products.map(product => (
            <div key={product.id} className='product-card'>
              <div className='product-icon'>{product.icon}</div>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <button className='btn-learn'>Ko'proq Ma'lumot</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products