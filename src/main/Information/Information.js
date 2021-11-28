import './Information.css'
import info1 from './information/procent.png'
import info2 from './information/gaz.png'
import info3 from './information/crown.png'


function Information() {
    return(
        <>
            <div className="infromation__wrapper">
                <div className="information__card">
                    <img src={info1}/>
                </div>
                <div className="information__card">
                    <img src={info2}/>
                </div>
                <div className="information__card">
                    <img src={info3}/>
                </div>
            </div>
        </>
    )
}

export default Information;