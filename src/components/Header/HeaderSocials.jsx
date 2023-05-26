import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/moustaphatoure/" target='_blank' rel='noopener noreferrer'>
            <BsLinkedin/>
        </a>
        <a href="https://github.com/Moostapha?tab=repositories" target='_blank' rel="noopener noreferrer">
            <BsGithub/>
        </a>
    </div>
  )
}

export default HeaderSocials