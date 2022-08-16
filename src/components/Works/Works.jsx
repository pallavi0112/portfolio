import React from 'react'
import './Works.css';
import Upwork from '../../images/Upwork.png';
import Shopify from '../../images/Shopify.png';
import Facebook from '../../images/Facebook.png';
import amazon from '../../images/amazon.png';
import fiverr from '../../images/fiverr.png';
function Works() {
    return (
        <div className='works'>
            <div className='service'>
                <span>My Specail</span>
                <span>Services</span>
                <span>There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered  alteration in some form, <br/>by injected humour, or randomised words which don't look even slightly believable.</span>
                <button className='button service-button'>Hire Me</button>
                <div className='blur s-blur1' style={{ background: 'ABF1FF94', top: '13rem', left: '-18rem' }}></div>
            </div>
            <div className='w-right'>
                <div className='w-mainCircle'>
                    <div className='w-secCircle'>
                        <img src={Upwork} alt={Upwork} />
                    </div>
                    <div className='w-secCircle'>
                        <img src={fiverr} alt={fiverr} />
                    </div>
                    <div className='w-secCircle'>
                        <img src={amazon} alt={amazon} />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Shopify} alt={Shopify} />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Facebook} alt={Facebook} />
                    </div>
                </div>
                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
            </div>
        </div>
    )
}

export default Works;