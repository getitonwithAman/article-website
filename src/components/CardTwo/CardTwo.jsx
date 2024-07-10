import React from 'react'
import "./CardTwo.css";
import myImage from './clothes.png';

const CardTwo = () => {
  return (
    <div className='card-two'>
        <div className="image">
            <img src={myImage} alt='' />
        </div>
        <div className="data">
            <div className="category">kids</div>
            <div className="heading">Space Saving Solutions to Maximize your Children's Room</div>
            <div className="description">Children aren't huge, but their belongings require plenty of
                space! If you're a parent who is organizing everything your
                child's belongings are in their living room and living room, is...
            </div>
            <div className="options">
                <div className="date">15-Jan</div>
                <div className="share">share</div>
            </div>
        </div>
    </div>
  )
}

export default CardTwo;