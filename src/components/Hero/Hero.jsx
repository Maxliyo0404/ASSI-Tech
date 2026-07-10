import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className='hero' id='hero'>
      <div className='hero-container'>
        <div className='hero-content'>
          <h1 className='hero-title'>ASSI-Tech Bilan Kelajakni Quraylik</h1>
          <p className='hero-subtitle'>
            Biz sizning biznesni raqamlashtirish va texnologiya orqali o'tkazishda yordam beramiz
          </p>
          <div className='hero-buttons'>
            <button className='btn btn-primary'>Biz Bilan Bog'lanish</button>
            <button className='btn btn-secondary'>Xizmatlarni Ko'rish</button>
          </div>
        </div>
        <div className='hero-image'>
          <div className='hero-visual'>
            <div className='circle circle-1'></div>
            <div className='circle circle-2'></div>
            <div className='circle circle-3'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero