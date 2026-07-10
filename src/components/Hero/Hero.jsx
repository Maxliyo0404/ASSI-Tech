import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <div className='hero-left'>
          <h1>ASSI Tech - Tibbiy Texnologiyalar</h1>
          <p>Dunyaning eng zamonaviy tibbiy asboblari va uskunalarini taqdim etamiz</p>
          <form className='contact-form'>
            <input type='text' placeholder='Ismingizni kiriting' required />
            <input type='tel' placeholder='Telefon raqami' required />
            <textarea placeholder='Sizning xabaringiz' rows='4'></textarea>
            <button type='submit' className='btn-submit'>Yuborish</button>
          </form>
        </div>
        <div className='hero-right'>
          <div className='medical-image'>🏥</div>
        </div>
      </div>
    </section>
  )
}

export default Hero