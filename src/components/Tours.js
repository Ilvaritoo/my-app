import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
    console.log(tours.length);
    return (
        <section className='main'>
            <div className='toursHeading'>
                <h2>our tours</h2>
                {
                    tours.map(tour => {
                        return (
                            <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                        )
                    })
                }
            </div>
        </section>

    )
}

export default Tours
