import React from 'react';
import { useEffect, useState } from "react";
import Card from './Card'
const Cards = () => {
    const [guns, setGuns]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setGuns(data))
    },[])
    return (
        <div className="cards">
           {guns.map((gun) => (
          <Card gun={gun} key={gun.id}  />
        ))}
        </div>
    );
};

export default Cards;



