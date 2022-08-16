import React from 'react';
import './Services.css';
import HeartEmoji from '../../images/heartemoji.png';
import Glasses from '../../images/glasses.png';
import Humble from '../../images/humble.png';
import Card from '../card/Card';
import Resume from './resume.pdf';
const Services = () => {
  return (
    <div className='services-wrapper'>
       <div className='service'>
           <span>My Specail</span>
           <span>Services</span>
           <span>There are many variations of passages of Lorem Ipsum available,<br></br> but the majority have suffered  alteration in some form,<br/>by injected humour, or randomised words which don't look even slightly believable.</span>
           <a href={Resume} Download>
           <button className='button service-button'>Download CV</button>
           </a>
           <div className='blur s-blur1' style={{background:'ABF1FF94', top:'13rem', left:'-18rem'}}></div>
       </div>
       <div className='cards'>
            <div style={{left:'15rem'}}>
            <Card
                emoji={HeartEmoji}
                heading={'Design'}
                detail={'Figma, XD, Sketch, Photoshop'}
            />
            </div>
            <div style={{top:'11rem',left:'-2rem'}}>
            <Card 
                emoji={Glasses}
                heading={'Developer'}
                detail={'HTML, CSS, Javascript, ReactJs'}
            />
            </div>
            <div style={{top:'18rem',left:'14rem'}}>
            <Card 
                emoji={Humble}
                heading={'Design'}
                detail={'Figma, XD, Sketch, Photoshop'}
            />
            </div>
            <div className='blur blur-2' style={{background:"var(--purple)" , top:"14rem", left:"8rem"}}></div>
       </div>
    </div>
  )
}

export default Services