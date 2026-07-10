import React from 'react'
import './About.css'

function About() {
  return (
    <section className='about' id='about'>
      <div className='about-container'>
        <div className='about-content'>
          <h2 className='about-title'>Biz Haqimizda</h2>
          <p className='about-text'>
            ASSI-Tech - Uzbekistonda raqamli transformatsiya va texnologiya xizmatlarini taqdim etuvchi yetakchi kompaniya. 
            Biz 2015 yildan beri O'zbekiston va boshqa mintaqalardagi kompaniyalarning raqamlashtirish loyihalarida ishtirok etib kelmoqdamiz.
          </p>
          
          <div className='about-features'>
            <div className='feature-item'>
              <h3>🎯 Missiya</h3>
              <p>Har bir biznesga texnologiya orqali o'tkazish imkoniyatini berish</p>
            </div>
            <div className='feature-item'>
              <h3>🚀 Ko'zlaymiz</h3>
              <p>Dunyada eng yaxshi IT xizmatlari taqdim etuvchi kompaniya bo'lish</p>
            </div>
            <div className='feature-item'>
              <h3>💼 Qiymatlar</h3>
              <p>Sog'lom, halol va zamonaviy yondashuv bilan ishlaymiz</p>
            </div>
          </div>

          <h3 className='stats-title'>Bizning O'sish</h3>
          <div className='stats-grid'>
            <div className='stat'>
              <div className='stat-number'>150+</div>
              <div className='stat-label'>Loyiha</div>
            </div>
            <div className='stat'>
              <div className='stat-number'>50+</div>
              <div className='stat-label'>Mijozlar</div>
            </div>
            <div className='stat'>
              <div className='stat-number'>25+</div>
              <div className='stat-label'>Mutaxassislar</div>
            </div>
            <div className='stat'>
              <div className='stat-number'>10+</div>
              <div className='stat-label'>Yillar Tajriba</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About