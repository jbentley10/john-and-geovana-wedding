/**
 * @file navigation.js
 */
// Import dependencies
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { slide as Menu } from 'react-burger-menu';

// Import styling 
import { navigationLinkStyles } from '../utils/constants';

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
          <h3 className={`font-john-mayer text-h3 text-uppercase text-text-color cursor-pointer`}>G&J</h3>
        </Link>
        {/* <p className={`font-jost text-p text-text-color`}> - Portland, Oregon - 7/29/2022</p> */}
      </div>

      {/* Mobile Navigation */}
      {/* <div className={`flex-initial md:hidden`}>
        <Menu
          right
          noOverlay        
          onStateChange={handleOnMenuStateChange}
          isOpen={ isMenuOpen }
          className={ menuClass }
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
            <li><Link href="/"><a>Home</a></Link></li>
          </ul>
        </Menu>
      </div> */}
      {/* Desktop Navigation */}
      <div className={`hidden md:inline`}>
        <ul>
          <li className={navigationLinkStyles}><Link to={`/`} href={`/`}>Home</Link></li>
        </ul>
      </div>
    </div>
  )
}