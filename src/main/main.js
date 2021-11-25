import React from 'react';
import './main.css'
import * as url from "url";
import backMan from '../img/Intro/man.png'

function Main() {
    const style = {
        backgroundImage: `url(${backMan})`,
        backgroundRepeat: 'no-repeat',
        width: 100+'%',
        height: 100+'%'
    }

    return(
        <>
            <div className="main">
                <div className="main__container" style={style}>
                    <div className="main__text"></div>
                </div>
            </div>
        </>
    )
}

export default Main;