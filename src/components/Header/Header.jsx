import Link from 'next/link'
import React from 'react'
import './Header.css'

function Header() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link href="/" className='navbar-logo'>
          ASSI-TECH
        </Link>
        <ul className='header-list'>
          <li className='header-item'><Link href="/">Bosh Sahifa</Link></li>
          <li className='header-item'><Link href="#about">Biz Haqimizda</Link></li>
          <li className='header-item'><Link href="#services">Xizmatlar</Link></li>
          <li className='header-item'><Link href="#contact">Bog'lanish</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header