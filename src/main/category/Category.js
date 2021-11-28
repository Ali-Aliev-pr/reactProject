import React from "react";
import './category.css'
import categoryOne from '../ccategory/man.svg'
import categoryTwo from '../ccategory/woman.svg'
import categoryThree from '../ccategory/kid.svg'
import ctegoryFour from '../ccategory/long.svg'

function Category() {
    return(
        <>
            <div className="main__category__wrap">
                <div className="main__category__wrap__item">
                    <div className="main__category__wrap__item__text">
                        <p>Hello World</p>
                    </div>
                    <img src={categoryOne}/>
                </div>
                <div className="main__category__wrap__item">
                    <div className="main__category__wrap__item__text">
                        <p>Hello World</p>
                    </div>
                    <img src={categoryTwo}/>
                </div>
                <div className="main__category__wrap__item">
                    <div className="main__category__wrap__item__text">
                        <p>Hello World</p>
                    </div>
                    <img src={categoryThree}/>
                </div>
                <div className="main__category__wrap__item">
                    <div className="main__category__wrap__item__text">
                        <p>Hello World</p>
                    </div>
                    <img src={ctegoryFour}/>
                </div>
            </div>
        </>
    )
}

export default Category;

// <>
        //     <div className="category__wrap">
        //         <div className="category__card">
        //             <img src={categoryOne}/>
        //             <div className="category__text">
        //                 <p>Hello World!</p>
        //             </div>
        //         </div>
        //         <div className="category__card">
        //             <img src={categoryTwo}/>
        //             <div className="category__text">
        //                 <p>Hello World!</p>
        //             </div>
        //         </div>
        //         <div className="category__card">
        //             <img src={categoryThree}/>
        //             <div className="category__text">
        //                 <p>Hello World!</p>
        //             </div>
        //         </div>
        //         <div className="category__card long">
        //             <img src={ctegoryFour}/>
        //         </div>
        //     </div>
        // </>