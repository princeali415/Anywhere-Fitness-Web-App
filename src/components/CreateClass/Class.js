import React from 'react'
import './class.css'

export default function Class(props) {

    const {details} = props

    if (!details) {
        return <h3>Working fetching your class&apos;es details...</h3>
      }

    return (
        <div className=' class-container'>
            
            <div className='class-info'>
                <div className='card-title'>
                    <h2>{details.name}</h2>
                    <h3>{details.type}</h3>
                </div>
                <div className='class-description'>
                    <p>{details.start_time}</p>
                    <p>{details.duration}</p>
                    <p>{details.intensity_level}</p>
                    <p>{details.location}</p>
                    <p>{details.max_class_size}</p>
                </div>
            </div>
            
        </div>
    )
}
