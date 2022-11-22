import React from 'react';
import { BsCart } from "react-icons/bs";
const Card = ({gun}) => {
    return (
        <div className='card'>
      <div className='image-container'>
        <img src={gun.img} alt='' />
      </div>
      <div className='gun-info'>
        <h1>{gun.name}</h1>
        <p>Bullet Type : {gun.bullet}</p>
        <p>Capacity : {gun.capacity}</p>
        <p>Action : {gun.action}</p>
         <h1 className="price">  <BsCart size={40} className='add-card' />
          $ {gun.price}
         </h1>
      </div>
      
       
      </div>
    
    );
};

export default Card;