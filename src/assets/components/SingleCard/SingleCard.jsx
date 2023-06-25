import React from 'react';

const SingleCard = (props) => {
    const itemsCards = props;
    console.log(itemsCards);
    return (
        <div>
            <div className="card-bg-image w-60 h-50 m-auto">
                <img className="w-100 m-2" src={itemsCards.item.images.blogCoverImage}></img>
            </div>
                
            <div>
                <div className="">
                    <div className="grid col">
                        <div>
                            <h5>{itemsCards.item.author.name}</h5> 
                            <h3>{itemsCards.item.title}</h3>
                            <p>Mar 14(4 days ago)</p>
                        </div>
                        <div>
                        <h6 className="col-md-2 ml-5 text-center">5 min to read</h6>
                        </div>
                    </div>
                                    
                    <div>
                        
                        <h6>#programming #beginner</h6>
                        <a href="" className="mark-read">Mark as read</a>
                    </div>
                </div>
            </div>
                
        </div>
    );
};

export default SingleCard;