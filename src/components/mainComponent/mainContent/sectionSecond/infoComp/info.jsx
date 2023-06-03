import React, { useEffect,useState } from 'react'
import './info.css'
import '../../../../../fonts/font-raleway/raleway.css'
import '../../sectionSecond/sectionSecond.css'


const InfoComponent = ({ data }) => {
   
    if (data === null || data === undefined) {
        return  <div>Loading</div>
        
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
                                <img className='img-info' src={item.urlToImage} alt="img" />
                               <h1>More information</h1>
                                </a>
                        <div className='info'>
                                <h1 className='title-info'>{item.title}</h1> 
                                <h1 className='content-info'>{item.content}</h1>
                                <h1 className='description-info'>{item.description}</h1>
                                <h1 className='author-info'>Author:{item.author}</h1>
                            </div>
                        </div>
                        </div>
                        )
            })}
        </div>
    )

}

export default InfoComponent;