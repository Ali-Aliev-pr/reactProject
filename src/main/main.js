import React from 'react';
import './main.css'
import backMan from '../img/Intro/man.png'
import Intro from "./intro/Intro";

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
                <div className="main__container" style={style}>
                    {/*<div className="main__text"></div>*/}
                    <Intro/>
                </div>
            </div>
        </>
    )
}

export default Main;