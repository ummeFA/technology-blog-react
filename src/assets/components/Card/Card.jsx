// import React from 'react';

import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";


const Card = () => {
    const [cardItem, setCarditem] = useState([])
    useEffect(()=>{
        fetch("../../../public/data.json")
        .then((res)=>res.json())
        .then((data)=>setCarditem(data));
      },[]);

    return (
 
        <div className="card card-container mt-5 ">
                {
                    cardItem.map((item)=>(
                        <SingleCard item={item}></SingleCard>
                    ))
                }
                
          
            
        </div>
    );
};

export default Card;