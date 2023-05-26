import React from 'react'
import './experience.css'

import {GiCheckMark} from 'react-icons/gi'

const Experience = () => {
  return (
    <section id='experience'>
      
      <h5>Mes skills et compétences</h5>
      <h2>Mon expérience</h2>
      
      <div className="container experience__container">
        
        {/* FRONTEND */}
        <div className="experience__frontend">
          <h3>Expérience Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon'/>
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon'/>
              <div>
                <h4>Vue</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
          </div>
        </div>
        
        {/* BACKEND */}
        <div className="experience__backend">
            <h3>Expérience Backend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='experience__details'>
              <GiCheckMark className='experience__details-icon'/>
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience