import React from 'react'
import CallToAction from './CallToAction'
import HeaderSocials from './HeaderSocials'
// import me from '../../assets/me.png'
import moi from '../../assets/moi.png'
import ('./header.css')

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour je suis</h5>
        <h1>Moustapha Touré</h1>
        <h5 className="text-light"> Fullstack Développeur</h5>
        
        <CallToAction/>
        
        <HeaderSocials/>
        
        <div className="me">
          <img src= {moi} alt="Moustapha Touré" />
        </div>
        
        <a href="#contact" className='scroll__down'> Scroll vers le bas</a>
      </div> 
    </header>
  )
}

export default Header