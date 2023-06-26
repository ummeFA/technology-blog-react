    // import React from 'react';
import './NavigationBar.css'
    const NavigationBar = () => {
        return (
        <div className="navbar-fixed-top">
            <nav className="navbar bg-light">
                <div>
                    <h2 className="navbar-brand">New Knowledge Cafe</h2>
                </div>

                <div className="">
                    <a href="/join-today">Join today</a>
                    <a href="/price">Price</a>
                    <a href="/order-now">Order Now</a>
                    <a href="contact-us">Contact Us</a>
                </div>
             </nav>
            </div>
        );
    };

    export default NavigationBar;
