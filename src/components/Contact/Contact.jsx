import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <h2>Biz Bilan Bog'lanish</h2>
        <div className='contact-grid'>
          <div className='contact-info'>
            <h3>Aloqa Ma'lumotlari</h3>
            <div className='info-item'>
              <span className='label'>📞 Telefon:</span>
              <p>+998 99 815 98 85</p>
            </div>
            <div className='info-item'>
              <span className='label'>✉️ Email:</span>
              <p>info@assitech.uz</p>
            </div>
            <div className='info-item'>
              <span className='label'>📍 Manzil:</span>
              <p>Tashkent, O'zbekiston</p>
            </div>
            <div className='info-item'>
              <span className='label'>🕐 Ish vaqti:</span>
              <p>Dushanba-Juma: 09:00 - 18:00</p>
            </div>
          </div>
          <div className='contact-form'>
            <h3>Bizga Xabar Yuboring</h3>
            <form>
              <input type='text' placeholder='Ismingiz' required />
              <input type='email' placeholder='Email' required />
              <input type='tel' placeholder='Telefon' required />
              <textarea placeholder='Sizning xabaringiz' rows='5'></textarea>
              <button type='submit' className='btn-submit'>Yuborish</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact