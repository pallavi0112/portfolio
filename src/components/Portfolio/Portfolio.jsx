import React from 'react'
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper'
import '../../../node_modules/swiper/swiper-bundle.css';
import Slidebar from '../../images/sidebar.png';
import ecommerce from '../../images/ecommerce.png'; 
import hoc from '../../images/hoc.png';
import musicapp from '../../images/musicapp.png';
SwiperCore.use([Pagination]);
function Portfolio() {
  return (
    <div className='portfolio'>
        <span>Recent Projects</span>
        <span>Portfolio</span>
        <Swiper Pagination={true}>
            <SwiperSlide>
                <img src={Slidebar}  alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={ecommerce}  alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={hoc}  alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={musicapp}  alt=""/>
            </SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Portfolio