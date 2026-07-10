import React from 'react'
import Link from 'next/link'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer' id='contact'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-section'>
            <h3>ASSI-Tech</h3>
            <p>O'zbekistonning etakchi IT xizmatlari kompaniyasi</p>
            <div className='social-links'>
              <a href='#' className='social-link'>Facebook</a>
              <a href='#' className='social-link'>Instagram</a>
              <a href='#' className='social-link'>Twitter</a>
              <a href='#' className='social-link'>LinkedIn</a>
            </div>
          </div>

          <div className='footer-section'>
            <h4>Sayt</h4>
            <ul>
              <li><Link href='/'>Bosh Sahifa</Link></li>
              <li><Link href='#about'>Biz Haqimizda</Link></li>
              <li><Link href='#services'>Xizmatlar</Link></li>
              <li><Link href='#contact'>Bog'lanish</Link></li>
            </ul>
          </div>

          <div className='footer-section'>
            <h4>Xizmatlar</h4>
            <ul>
              <li><Link href='#'>Web Dizayn</Link></li>
              <li><Link href='#'>Mobil Ilova</Link></li>
              <li><Link href='#'>IT Xizmati</Link></li>
              <li><Link href='#'>Ma'lumotlar Tahlili</Link></li>
            </ul>
          </div>

          <div className='footer-section'>
            <h4>Bog'lanish</h4>
            <p>
              <strong>Telefon:</strong> +998 99 999 99 99
            </p>
            <p>
              <strong>Email:</strong> info@assitech.uz
            </p>
            <p>
              <strong>Manzil:</strong> Tashkent, O'zbekiston
            </p>
          </div>
        </div>

        <div className='footer-divider'></div>

        <div className='footer-bottom'>
          <p>&copy; {currentYear} ASSI-Tech. Barcha huquqlar himoyalangan.</p>
          <div className='footer-links'>
            <Link href='#'>Shartlar</Link>
            <Link href='#'>Maxfiylik Siyosati</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer