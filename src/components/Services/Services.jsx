import React from 'react'
import './services.css'

import {IoMdCheckmarkCircleOutline} from 'react-icons/io'

const Services = () => {
  return (
    <section id='services'>
      <h5>Mes offres</h5>
      <h2>Services</h2>
      
      <div className="container services__container">
        
        <article className='service'>
          
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* FIN */}
        
        <article className='service'>
          
          <div className="service__head">
            <h3>Développement Web</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* FIN */}
        
        <article className='service'>
          
          <div className="service__head">
            <h3>Création Wordpress</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoMdCheckmarkCircleOutline className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* FIN */}
      </div>
    </section>
  )
}

export default Services
