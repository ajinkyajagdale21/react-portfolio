import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';


export const Footer=()=>{
    return(
      <div className="footerBar">
          <a className="link" href="https://www.linkedin.com/in/ajinkya-h-jagadale-78a899200"><LinkedInIcon className="icons"/></a> 
          <a className="link" href="https://github.com/ajinkyajagdale21"><GitHubIcon className="icons"/></a>
          <a className="link" href="https://instagram.com/ajinkyajagdale21"><InstagramIcon className="icons"/></a>
          <a className="link" href="https://twitter.com/Ajinkya_J_21"><TwitterIcon className="icons"/></a>          
           
      </div>
    )
}