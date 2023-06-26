// import React from 'react';

import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import './Card.css'

const Card = ({handleTime,readTime}) => {
    const [cardItem, setCarditem] = useState([])
    const [addTotalBookmark, setAddTotalBookmark] = useState([])
    
    useEffect(()=>{
        fetch("../../../public/data.json")
        .then((res)=>res.json())
        .then((data)=>setCarditem(data));
      },[]);


    const bookMark = (item) =>{
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
                    bookMark={bookMark}
                    handleTime={handleTime}
                    >               
                    </SingleCard>
                )}
            </div>
            
            <div className="card side-container">
                
            <div className="side-card-title card">
                <div className="side-card">
                    <h2 >Spent time on read: {readTime} mins</h2>
                </div>
                
                </div>
                <div className="booked-items">
                    <h2 >Bookmarked articles: {addTotalBookmark.length}</h2>
                    <p>{addTotalBookmark}</p>
                </div>

               
            </div>
            
        </div>
    );
};

export default Card;