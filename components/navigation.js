/**
 * @file navigation.js
 */
// Import dependencies
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { slide as Menu } from 'react-burger-menu'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen ] = useState(false)
  const menuClass = isMenuOpen ? "menu-open" : "menu-closed"


  const handleOnMenuStateChange = (menuState) => {
    setIsMenuOpen(menuState.isOpen)
  }

  return (
    <div className={`flex justify-between`}>
      <div className={``}>
        <Link to={`/`} href={`/`}>
          <h3 className={`font-john-mayer text-h3 text-uppercase`}>G & B</h3>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className={``}>
        <Menu
          right
          noOverlay        
          onStateChange={handleOnMenuStateChange}
          isOpen={ isMenuOpen }
          className={ menuClass + `flex-initial md:hidden` }
          htmlClassName=""
          bodyClassName=""
          burgerButtonClassName={ "h-full md:hidden" }
          burgerBarClassName={ `md:hidden` }
          crossButtonClassName={ `md:hidden` }
          crossClassName={ `` }
          menuClassName={ `md:hidden` }
          morphShapeClassName={ `` }
          itemListClassName={ `` }
          overlayClassName={ "" }
          customBurgerIcon={ <Image src="/menu-burger.svg" width={50} height={50} /> }
          customCrossIcon={ <Image src="/menu-cross.svg" width={50} height={50} /> }
        >       
          <ul className={`block outline-none`}>
            <li className={``}><Link href="/"><a id="home" className="menu-item">Home</a></Link></li>
          </ul>
        </Menu>
      </div>
    </div>
  )
}