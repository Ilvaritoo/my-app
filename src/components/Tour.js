import React, { useState } from 'react'

const Tour = ({ id, name, info, image, price, removeTour }) => {
    // console.log(removeTour);
    const [readMore, setReadMore] = useState(false)

    const openText = () => {
        setReadMore(!readMore)
    }
    return (
        <article className='tour'>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="decription">
                <div className="nameAndPrice">
                    <h2>{name}</h2>
                    <p>$ {price}</p>
                </div>
                <p>{readMore ? info : `${info.substring(0, 200)}...`} <button onClick={openText} className='showMoreBtn'>{readMore ? 'show less' : 'show more'}</button></p>
            </div>
            <button className='btn' onClick={() => removeTour(id)}>Not interested</button>

        </article>
    )
}

export default Tour
