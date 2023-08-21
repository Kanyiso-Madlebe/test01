import React from 'react';
import '../style/home.css';
import Coco from '../images/coco.jpeg';

function Home() {
    return (
        <section className="home" id="home">
            <div className="home-data">
                <div className="home-text">
                    <h3 className="software-title">
                        <span className="white-text">Software </span>
                        <span className="red-text">Dev:</span>
                        <span className="white-text"> Business </span>
                        <span className="red-text">Analyst</span>
                    </h3>
                    <h3 className="intro-text">
                        A Business Analysis graduate now 
                        delving into the world of Software Development through
                         an internship.
                    </h3>
                    <div className="buttons-desktop">
                        <button className="button button1">Resume</button>
                        <button className="button button2">Projects</button>
                    </div>
                </div>
                <div className="home-img-btn-container">
                    <div className="home-bg">
                        <div className="image-wrapper">
                            <img src={Coco} alt="" className="home-image" />
                        </div>
                    </div>
                    </div>
                   
                
            </div>
        </section>
    );
}

export default Home;
