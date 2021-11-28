import React from "react";
import './category.css'
import categoryOne from '../ccategory/man.svg'
import categoryTwo from '../ccategory/woman.svg'
import categoryThree from '../ccategory/kid.svg'
import ctegoryFour from '../ccategory/long.svg'

function Category() {

    const categories = [
        {id: 1, src: categoryOne, text: 'Hello World!'},
        {id: 2, src: categoryTwo, text: 'Hello World!'},
        {id: 3, src: categoryThree, text: 'Hello World!'},
        {id: 4, src: ctegoryFour, text: 'Hello World!'}
    ]

    return(
        <>
            <div className="main__category__wrap">
                <div className="main__category__wrap__items">
                    {categories.map(category => {
                        return (
                            <div
                            key={category.id}
                            style={{backgroundImage: `url(${category.src})`}}
                            className={`${category.id === 4 ? "main__category__wrap__item width100" : "main__category__wrap__item width33"}`}
                            >
                                <p className="main__category__wrap__item__text">{category.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Category;