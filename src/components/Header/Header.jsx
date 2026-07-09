import Link from 'next/link'
import React from 'react'
function Header() {
  return (
<nav>
    <ul className='header-list'>
        <li className='header-item'><Link href="/">About Us</Link></li>
        <li className='header-item'><Link href="/">About Us</Link></li>
        <li className='header-item'><Link href="/">About Us</Link></li>
    </ul>
</nav>
  )
}

export default Header