import React, { useEffect,useState } from 'react'
import './info.css'
import '../../../../../fonts/font-raleway/raleway.css'
import '../../sectionSecond/sectionSecond.css'

import Loader from '../../../../loader/loader'

const InfoComponent = ({ data }) => {
   
    if (data === null || data === undefined) {
        return(
        <div>
            <Loader />
            </div>
        )
    }
   console.log(data.length)
     
    
    
    return (
        <div className='info-container'>
            {data.map((item, index) => {
                return (
                    <div>
                    <div className="decoration"></div>
                        <div key={index + "b"} className='section'>
                            <a className='more-info' href={item.url} target='_blank' rel='noopener noreferrer'>
                                <img className='img-info' src={item.urlToImage ? item.urlToImage : <Loader/>} alt="img" />
                               <h1>More information</h1>
                                </a>
                        <div className='info'>
                                <h1 className='title-info'>{item.title ? item.title : <Loader/>}</h1> 
                                <h1 className='content-info'>{item.content ? item.content : <Loader/>}</h1>
                                <h1 className='description-info'>{item.description ? item.description : <Loader/>}</h1>
                                <h1 className='author-info'>Author:{item.author ? item.author : <Loader/>}</h1>
                            </div>
                        </div>
                        </div>
                        )
            })}
        </div>
    )

}

export default InfoComponent;