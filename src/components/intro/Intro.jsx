import React from "react";
import './Intro.css';
import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';
import Instagram from '../../images/instagram.png';
import vector1 from '../../images/Vector1.png';
import vector2 from '../../images/Vector2.png';
import boy from '../../images/girl.png';
import thumbup from '../../images/thumbup.png';
import crown from '../../images/crown.png';
import glassesmoji from '../../images/glassesimoji.png' ;
import FlotingDiv from "../flotingDiv/FlotingDiv";
const Intro = () =>{
    return(
        <>
          <div className="intro">
          <div className="intro-left">
             <div className="intro-name">
                <span>Hello,I Am</span>
                <span>Pallavi Soldey</span>
                <span>Frontend developer with high level of experience in Web designing and development , Producting and Quality work.</span>
             </div>
             <button className="button intro-button">Hire Me</button>
             <div className="intro-icons">
                <img src={Github} alt="Github"></img>
                <img src={Linkedin} alt="Linkedin"></img>
                <img src={Instagram} alt="Instagram"></img>
             </div>
          </div>
          <div className="intro-right">
          <img src={vector1} alt="vector1"></img>
          <img src={vector2} alt="vector2"></img>
          <img src={boy} alt="boy"></img>
          <img src={glassesmoji} alt="glassesmoji"></img>
          <div style={{top:'-4%', left:'68%'}}>
            <FlotingDiv img={crown} text1='Web' text2='Development'/>
          </div>
          <div style={{top:'18.2rem', left:'2rem'}}>
            <FlotingDiv img={thumbup} text1='Best Design' text2='Award'/>
          </div>
          <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
          <div className="blur" style={{background:"#C1F5FF" , top:'17rem' , width:'21rem' , height:'11rem' , left:'-9rem'}}></div>
          </div>
          </div>
        </>
    )
};

export default Intro;