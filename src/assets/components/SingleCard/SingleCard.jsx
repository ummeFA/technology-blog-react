import React, { useEffect } from 'react';

const SingleCard = (props) => {
    
    const itemsCards = props;
    console.log(itemsCards);

   const markRead = props.markRead;

    return (
        <div>
            <div className="card-bg-image w-60 h-30 m-auto">
                <img className="w-100 m-2" src={itemsCards.item.images.blogCoverImage}></img>
            </div>
                
            <div>
                <div className="">
                    <div className="">
                        <div className="d-flex">
                            <div className="d-flex">
                                <img src={itemsCards.item.images.authorImage} className="circle"></img>
                                <div>
                                    <h5>{itemsCards.item.author.name}</h5>                           
                                    <p>Mar 14(4 days ago)</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                 <h6>{itemsCards.item.readTime} min to read</h6>
                                 <img src="../../../../images/bookmark.svg"></img>
                            </div>
                            
                        </div>
                        <div>
                        
                        <h3>{itemsCards.item.title}</h3>
                        </div>
                    </div>
                                    
                    <div>                        
                        <h6>#programming #beginner</h6>
                        <button onClick={()=>markRead(itemsCards.item.readTime)} className="btn-btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
                
        </div>
    );
};

export default SingleCard;