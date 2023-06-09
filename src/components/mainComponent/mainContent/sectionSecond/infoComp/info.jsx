import React from 'react'
import './info.css'
import '../../../../../fonts/font-raleway/raleway.css'
import '../../sectionSecond/sectionSecond.css'
const InfoComponent = ({ data }) => {
    
    if ( data === null || undefined) {
        return  <div>Loading</div>
        
    }
    
    let newArrayData = data.slice(0, 4);
    console.log(newArrayData)
    return (
        <div className='info-container'>
            {newArrayData.map((item, index) => {
                return (
                    <div>
                    <div className="decoration"></div>
                        <div key={index + "b"} className='section'>
                            <a href={item.url}>
                                <img className='img-info' src={item.urlToImage} href='https://www.engadget.com/the-morning-after-meta-could-launch-a-twitter-competitor-next-month-111543954.html' alt="img" />
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