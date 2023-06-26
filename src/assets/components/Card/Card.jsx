// import React from 'react';

import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import './Card.css'

const Card = ({handleTime,readTime}) => {
    const [cardItem, setCarditem] = useState([])
    const [addTotalBookmark, setAddTotalBookmark] = useState([])
    
    useEffect(()=>{
        fetch("../../../data.json")
        .then((res)=>res.json())
        .then((data)=>setCarditem(data));
      },[]);


    const bookMark = (item) =>{
        const newAddBookmark = [...addTotalBookmark, item];
        setAddTotalBookmark(newAddBookmark);
    }


    return (
 
        <>
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
        <div className="card">
            <h4>1. The difference between props and state.</h4>
            <p>The function of props is to pass data from one component to anohter, whereas state is used to pass data within the component only.
            In addition, only a Parent can read and own props. The component updates state and it is owned locally.
            </p>
            <h4>2. How useState works?</h4>
            <p>To track state and store various type of data in a component useState is used. It returns an array with two values, current state and a function which can update that state.</p>
            <h4>3. What can useEffect do other than loading data?</h4>
            <p>Ohter than loading data, useEffect can be used to update DOM and timers and to fetch data.</p>
            <h4>4. How does react work?</h4>
            <p>React creates a virtual DOM which is faster than real DOM. Necessary changes and manipulation can be done here before changing in the browser DOM. It creates components which are reusable codes. States are used to share data among the React components. </p>
        </div>
        </>
    );
};

export default Card;