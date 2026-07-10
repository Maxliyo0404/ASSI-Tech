import Link from 'next/link'
import React from 'react'
import './Header.css'

function Header() {
  const [language, setLanguage] = React.useState('uz')
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const translations = {
    uz: { home: 'Bosh sahifa', products: 'Mahsulotlar', services: 'Xizmatlar', contact: 'Aloqa', install: 'O\'rnatish' },
    ru: { home: 'Главная', products: 'Продукты', services: 'Услуги', contact: 'Контакты', install: 'Установка' },
    en: { home: 'Home', products: 'Products', services: 'Services', contact: 'Contact', install: 'Installation' }
  }

  const t = translations[language]

  return (
    <header className='header'>
      <div className='header-top'>
        <div className='container'>
          <div className='top-bar'>
            <div className='social-icons'>
              <a href='#' className='social-icon'>📷</a>
              <a href='#' className='social-icon'>✉️</a>
              <a href='#' className='social-icon'>f</a>
            </div>
            <div className='contact-info'>
              <span>+998 99 815 98 85</span>
              <button className='btn-contact'>Aloqa</button>
            </div>
          </div>
        </div>
      </div>

      <nav className='navbar'>
        <div className='container'>
          <div className='nav-content'>
            <Link href='/' className='logo'>
              <div className='logo-icon'>🏥</div>
              <div className='logo-text'>
                <div className='logo-title'>ASSI Tech</div>
                <div className='logo-subtitle'>Tib aparatlari va tibbiyaviy uskunalar</div>
              </div>
            </Link>

            <ul className='nav-menu'>
              <li><Link href='/'>{t.home}</Link></li>
              <li><Link href='#products'>{t.products}</Link></li>
              <li><Link href='#services'>{t.services}</Link></li>
              <li><Link href='#install'>{t.install}</Link></li>
              <li><Link href='#contact'>{t.contact}</Link></li>
            </ul>

            <div className='language-selector'>
              <button className={language === 'uz' ? 'active' : ''} onClick={() => setLanguage('uz')}>O'z</button>
              <button className={language === 'ru' ? 'active' : ''} onClick={() => setLanguage('ru')}>Ру</button>
              <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>En</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header