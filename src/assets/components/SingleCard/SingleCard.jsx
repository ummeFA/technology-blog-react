// import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import  './SingleCard.css'
const SingleCard = (props) => {
    
    const itemsCards = props;
    // console.log(itemsCards);
    // console.log(props.bookMark);
    const handleTime=props.handleTime;
   const bookMark = props.bookMark;
//    const readMark = props.readMark;

    return (
        <div>
            <div className="mb-5">
                <img className="w-100 " src={itemsCards.item.images.blogCoverImage}></img>
            </div>
                
            <div>
                        <div className="d-flex">
                            <div className="d-flex">
                                <img src={itemsCards.item.images.authorImage} className="circle"></img>
                                <div>
                                    <h4>{itemsCards.item.author.name}</h4>                           
                                    <p>Mar 14 (4 days ago)</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                 <h6>{itemsCards.item.readTime} min to read</h6>
                                 <button onClick={()=>bookMark(itemsCards.item.title)} className="icon-button"><FontAwesomeIcon icon={faBookmark} /></button>
                                 
                            </div>
                            
                        </div>
                        <div>
                        
                        <h3>{itemsCards.item.title}</h3>
                        </div>
                    </div>
                                    
                    <div>                        
                        <h5>#programming #beginner</h5>
                        <button onClick={()=>handleTime(itemsCards.item.readTime)} className="btn-btn-primary">Mark as read</button>
                    </div>
                    <hr></hr>
                </div>
    );
};

export default SingleCard;