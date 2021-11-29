import './woman.css'
import React from "react";
import photo from '../main/Cards/cards/second.png'
import Information from "../main/Information/Information";

function Man(props) {
    return(
        <>
            <div className="man__container">
                <p className="man__title">Fetured Items</p>
                <p className="man__text">Shop for items based on what we featured in this week</p>
                <div className="man__wrapper">
                    <div className="man__card">
                        <img src={photo}/>
                        <p className="card__title">ELLERY X MO CAPSULE</p>
                        <p className="card__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className="card__price">$65</p>
                    </div>
                    <div className="man__card">
                        <img src={photo}/>
                        <p className="card__title">ELLERY X MO CAPSULE</p>
                        <p className="card__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className="card__price">$65</p>
                    </div>
                    <div className="man__card">
                        <img src={photo}/>
                        <p className="card__title">ELLERY X MO CAPSULE</p>
                        <p className="card__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className="card__price">$65</p>
                    </div>
                    <div className="man__card">
                        <img src={photo}/>
                        <p className="card__title">ELLERY X MO CAPSULE</p>
                        <p className="card__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className="card__price">$65</p>
                    </div>
                    <div className="man__card">
                        <img src={photo}/>
                        <p className="card__title">ELLERY X MO CAPSULE</p>
                        <p className="card__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className="card__price">$65</p>
                    </div>
                    <div className="man__card">
                        <img src={photo}/>
                        <p className="card__title">ELLERY X MO CAPSULE</p>
                        <p className="card__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className="card__price">$65</p>
                    </div>
                    <div className="man__card">
                        <img src={photo}/>
                        <p className="card__title">ELLERY X MO CAPSULE</p>
                        <p className="card__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className="card__price">$65</p>
                    </div>
                    <div className="man__card">
                        <img src={photo}/>
                        <p className="card__title">ELLERY X MO CAPSULE</p>
                        <p className="card__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className="card__price">$65</p>
                    </div>
                    <div className="man__card">
                        <img src={photo}/>
                        <p className="card__title">ELLERY X MO CAPSULE</p>
                        <p className="card__text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                        <p className="card__price">$65</p>
                    </div>
                </div>
            </div>
            <Information/>
        </>
    )
}

export default Man;