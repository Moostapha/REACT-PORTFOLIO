import React from 'react'
import './portfolio.css'
import socialNetwork from '../../assets/socialNetwork.png'
// import musicApp from '../../assets/musicApp.png'
// import movieSearchApp from '../../assets/movieSearchApp.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mes projets récents</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={socialNetwork} alt="Réseau social d'entreprise" />
          </div>
            <h3>Company Social Network</h3>
            <a href="https://github.com/Moostapha/SOCIAL-NETWORK" className='btn' target='__blank'>
              Code Github Réseau social d'entreprise
            </a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio