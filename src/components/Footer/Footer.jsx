import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div className='footer-section'>
            <h3>ASSI Tech</h3>
            <p>Tibbiy texnologiyalar va uskunalarning yetakchi dielri</p>
          </div>
          <div className='footer-section'>
            <h4>Sayt</h4>
            <ul>
              <li><a href='#'>Bosh sahifa</a></li>
              <li><a href='#products'>Mahsulotlar</a></li>
              <li><a href='#services'>Xizmatlar</a></li>
              <li><a href='#contact'>Aloqa</a></li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4>Aloqa</h4>
            <p>📞 +998 99 815 98 85</p>
            <p>✉️ info@assitech.uz</p>
            <p>📍 Tashkent, O'zbekiston</p>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>&copy; {currentYear} ASSI Tech. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer