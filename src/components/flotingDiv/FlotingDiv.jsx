import React from 'react';
import './FlotingDiv.css';
const FlotingDiv = (props) => {
  return (
    <div className='flotingdiv'>
        <img src={props.img} alt={props.img}/>
        <span>{props.text1}<br/>{props.text2}</span>
    </div>
  )
}

export default FlotingDiv
