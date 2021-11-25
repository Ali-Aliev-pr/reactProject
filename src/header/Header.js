import React from "react";
import './header.css'
import logo from '../img/Header/logo.svg'
import search from '../img/Header/search.svg'
import menu from '../img/Header/menu.svg'
import user from '../img/Header/user.svg'
import basket from '../img/Header/basket.svg'
import {BrowserRouter,  Link} from "react-router-dom";

function Header() {
    return(
        <>
            <div className="header">
                <div className="header__container">
                    <div className="header__container__left">
                        <img src={logo}/>
                        <img src={search}/>
                    </div>
                    <div className="header__container__right">
                        <img src={menu}/>
                        <img src={user}/>
                        <img src={basket}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;