import React from 'react'
import './browse.css'
import Map from './map/map.js'



export default function Browse(props){
    
  

    return (
        <div className='browser-container'>
            <div className='filter-search-container'>
                <div>dropdown1</div>
                <div>dropdown2</div>
                <div>dropdown3</div>
                <div>dropdown4</div>
                <div>dropdown5</div>
            </div>
            <section className='results'>
            <div className='results-container'>
                <div className='results-card-container'>
                    <div className='card-container'>
                        {/* cards of the profile for each instructor goes here based on the search filters */}
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

