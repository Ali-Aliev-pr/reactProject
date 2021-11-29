import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import './Cards.css'
import c1 from './cards/first.png'
import c2 from './cards/second.png'
import c3 from './cards/fourth.png'
import c4 from './cards/fith.png'
import c5 from './cards/third.png'
import c6 from './cards/sixth.png'

function Cards() {

    let cards = [
        {id:1, src: c1, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: '$65'},
        {id:2, src: c2, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: '$65'},
        {id:3, src: c3, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: '$65'},
        {id:4, src: c4, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: '$65'},
        {id:5, src: c5, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: '$65'},
        {id:6, src: c6, title: 'ELLERY X MO CAPSULE', description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', price: '$65'}
    ]

    return (
        <>
            <div className="cards__wrapper">
                <p className="wrapper__title">Fetured Items</p>
                <p className="wrapper__text">Shop for items based on what we featured in this week</p>
                <div className="links__wrapper">
                    <BrowserRouter>
                        <div className="link">
                            <Link to="/man">Man</Link>
                        </div>
                        <div className="link"></div>
                    </BrowserRouter>
                </div>
                <div className="product__cards">
                    {cards.map(card => {
                        return(
                            <div className="product__card">
                                <div className="overlay">
                                    <button className="btn">Add to cart</button>
                                </div>
                                <img src={card.src}/>
                                <p className="card__title">{card.title}</p>
                                <p className="card__text">{card.description}</p>
                                <p className="card__price">{card.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Cards;