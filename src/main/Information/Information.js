import './Information.css'
import info1 from './information/procent.png'
import info2 from './information/gaz.png'
import info3 from './information/crown.png'


function Information() {
    return(
        <>
            <div className="information__father">
                <div className="information__wrapper">
                    <div className="information__card">
                        <img src={info1}/>
                        <p className="information__title">Free Delivery</p>
                        <p className="information__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                    <div className="information__card">
                        <img src={info2}/>
                        <p className="information__title">Sales & discounts</p>
                        <p className="information__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                    <div className="information__card">
                        <img src={info3}/>
                        <p className="information__title">Quality assurance</p>
                        <p className="information__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information;