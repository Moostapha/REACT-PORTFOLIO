import React from 'react'
import CV from '../../assets/CV.pdf'

const CallToAction = () => {
  return (
    <div className="callToAction">
      <a href= {CV} download className='btn'>Téléchargez mon CV</a>
      <a href="#contact" className='btn btn-primary'>Contactez moi</a>
    </div>
  )
}

export default CallToAction