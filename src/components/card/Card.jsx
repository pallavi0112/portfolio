import React from 'react';
import './Card.css';
const Card = (props) => {
  return (
    <div className='card'>
         <img src={props.emoji} alt={props.emoji}/>
          <span>{props.heading}</span>
          <span>{props.detail}</span>
          <button className='card-button'>Learn More</button>
    </div>
  )
}
export default Card