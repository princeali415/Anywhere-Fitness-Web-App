import React from 'react'
import './browse.css'
import Map from './map/map.js'


export default function Browse(props){
    return (
        <div className='browser-container'>
            <div className='filter-search-container'>
                <div>dropdownFilter1</div>
                <div>dropdownFilter2</div>
                <div>dropdownFilter3</div>
                <div>dropdownFilter4</div>
                <div>dropdownFilter5</div>
            </div>
            <section className='results'>
            <div className='results-container'>
                <div className='results-card-container'>
                    <div className='card-container'>
                        <p> cards of the fitness classes available goes here based on the search filters </p>
                    </div>
                </div>
                <div className='maps-container' id='map'>
                   <Map  />
                </div>
            </div>
            </section>
        </div>
    )
}

