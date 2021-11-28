import React from 'react';
import './main.css'
import backMan from '../img/Intro/man.png'
import Intro from "./intro/Intro";
import Category from "./category/Category";
import Cards from "./Cards/Cards";
import Information from "./Information/Information";

function Main() {
    const style = {
        backgroundImage: `url(${backMan})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-'+212+'px',
        width: 100+'%',
        height: 100+'%'
    }

    return(
        <>
            <div className="main">
                <div className="main__intro" style={style}>
                    {/*<div className="main__text"></div>*/}
                    <Intro/>
                </div>
                <div className="main__category">
                    <Category/>
                </div>
                <div className="main__cards">
                    <Cards/>
                </div>
                <div className="main__information">
                    <Information/>
                </div>
            </div>
        </>
    )
}

export default Main;