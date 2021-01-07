import React from 'react'


export default function Class(props) {
    return (
        <div className=' class-container'>
            <div className='image-container'>
                <img src='../src/images/fitness-img.jpg' alt='class' />
            </div>
            <div className='class-info'>
            <h2>Insert title of class</h2>
            <h5>insert subtitle</h5>
            <p>insert location</p>
            </div>
            <div className='class-description'>
            <p>insert description here</p>
            </div>
        </div>
    )
}
