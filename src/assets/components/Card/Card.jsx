// import React from 'react';

import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import './Card.css'

const Card = () => {
    const [cardItem, setCarditem] = useState([])
    const [addTotalBookmark, setAddTotalBookmark] = useState([])
    const [countTotalReadTime, setCountTotalReadTime] = useState([])
    
    useEffect(()=>{
        fetch("../../../public/data.json")
        .then((res)=>res.json())
        .then((data)=>setCarditem(data));
      },[]);


    const bookMark = (item) =>{
        // console.log(item);
        const newAddBookmark = [...addTotalBookmark, item];
        setAddTotalBookmark(newAddBookmark);
    }

    const readMark = (item) =>{
        const newAddTotalReadTime = [...countTotalReadTime, item];
        setCountTotalReadTime(newAddTotalReadTime);
    }

    return (
 
        <div className="card-total">
            <div className="card card-container">
                {cardItem.map((item) => 
                <SingleCard key=
                    {item.id}
                    item={item}
                    bookMark={bookMark}
                    readMark={readMark}
                    >               
                    </SingleCard>
                )}
            </div>
            
            <div className="card side-container">
                
            <div className="side-card-title card">
                <div className="side-card">
                    <h2 >Spent time on read: {countTotalReadTime} mins</h2>
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