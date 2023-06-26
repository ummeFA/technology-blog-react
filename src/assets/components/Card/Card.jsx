// import React from 'react';

import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";


const Card = () => {
    const [cardItem, setCarditem] = useState([])
    const [addTotalBookmark, setAddTotalBookmark] = useState([])
    
    useEffect(()=>{
        fetch("../../../public/data.json")
        .then((res)=>res.json())
        .then((data)=>setCarditem(data));
      },[]);


    const markRead=(item)=>{
        // console.log(item);
        const newAddBookmark = [...addTotalBookmark, item];
        setAddTotalBookmark(newAddBookmark);
       }
    return (
 
        <div className="card-total">
            <div className="card card-container">
                {cardItem.map((item) => 
                <SingleCard key=
                    {item.id}
                    item={item}
                    markRead={markRead}
                    >               
                    </SingleCard>
                )}
            </div>
            
            <div className="card side-container">
                
            <div className="side-card-title card">
                <div className="side-card">
                    <h2 >Spent time on read: {} mins </h2>
                </div>
            
            </div>
            <div className="booked-items">
                <h2 >Bookmarked articles: {addTotalBookmark.length}</h2>
            </div>

               
            </div>
            
        </div>
    );
};

export default Card;