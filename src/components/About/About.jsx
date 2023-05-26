import React from 'react'
import './about.css'
import moi from '../../assets/moi-about.JPG'

// icons
import {FaUserGraduate} from 'react-icons/fa'
import {FaAward} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {RiFolderOpenFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Faisons connaissance</h5>
      
      <h2>À propos de moi</h2>
      
      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-img">
            <img src= {moi} alt="About Moustapha Touré" />
          </div>
        </div>
        
        <div className="about__content">
          
          <div className="about__cards">
            
            <article className="about__card">
              <FaUserGraduate className='about__icon'/>
              <h5>Formation</h5>
              <small>4 ans</small>
            </article>
            
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Soft Skills</h5>
              <small>4 ans</small>
            </article>
            
            <article className="about__card">
              <RiFolderOpenFill className='about__icon'/>
              <h5>Projets</h5>
              <small>4 ans</small>
            </article>
            
            <article className="about__card">
              <HiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>4 ans</small>
            </article>
            
          </div>
          
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Tempore tempora maxime unde? Recusandae vitae sunt architecto provident corrupti ipsa? 
            Odit vitae aliquam repellat rem repellendus, 
            fuga tenetur nemo explicabo? Assumenda.
          </p>
          
          <a href="#contact" className='btn btn-primary'>Contactez moi</a>
          
        </div>
      </div>
    
    </section >
  )
}

export default About