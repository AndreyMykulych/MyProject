import React from "react";

import './sectionFirst.css'

const Section1 = ({ data }) => {
<<<<<<< HEAD
   
    console.log(data)
    if (data === null || data === undefined) {
          return 'loading'
    }
    else 
=======

>>>>>>> master
    return (
            <div className="section-first-content">
                <div className="first-content">
                    <div className="hover-block">
<<<<<<< HEAD
                        <img src={data?.[0]?.urlToImage || 'loading'} alt="firstNews" />
                        <h1 className="title">{data?.[0]?.title || null}</h1>
                    </div>
                    <div className="hover-block">
                        <img src={data?.[8]?.urlToImage || 'loading'} alt="secondNews" />
                        <h1 className="title">{data?.[8]?.title || null}</h1>
=======
                        <img src={data ? data[0].urlToImage : 'loading'} alt="firstNews" />
                        <h1 className="title">{data ? data[0].title : null}</h1>
                    </div>
                    <div className="hover-block">
                        <img src={data ? data[8].urlToImage : 'loading'} alt="secondNews" />
                        <h1 className="title">{data ? data[8].title : null}</h1>
>>>>>>> master
                    </div>
                </div>
                <div className="second-content">
                    <div className="hover-second-block">
<<<<<<< HEAD
                        <img src={data?.[4]?.urlToImage || 'loading'} alt="1" />
                        <h1 className="title">{data?.[4]?.title || null}</h1>
                    </div>
                    <div className="hover-second-block">
                        <img src={data?.[3]?.urlToImage || 'loading'} alt="2" />
                        <h1 className="title">{data?.[3]?.title || null}</h1>
                    </div>
                    <div className="hover-second-block">
                        <img src={data?.[9]?.urlToImage || 'loading'} alt="3" />
                        <h1 className="title">{data?.[9]?.title || null}</h1>
                    </div>
                    <div className="hover-second-block">
                        <img src={data ? data[5].urlToImage : null} alt="4" />
                        <h1 className="title">{data?.[5]?.title || null}</h1>
                    </div>
                    <div className="hover-second-block">
                        <img src={data?.[6]?.urlToImage || 'loading'} alt="5" />
                        <h1 className="title">{data?.[6]?.title || null}</h1>
=======
                        <img src={data ? data[2].urlToImage : null} alt="1" />
                        <h1 className="title">{data ? data[2].title : null}</h1>
                    </div>
                    <div className="hover-second-block">
                        <img src={data ? data[3].urlToImage : null} alt="2" />
                        <h1 className="title">{data ? data[3].title : null}</h1>
                    </div>
                    <div className="hover-second-block">
                        <img src={data ? data[9].urlToImage : null} alt="3" />
                        <h1 className="title">{data ? data[9].title : null}</h1>
                    </div>
                    <div className="hover-second-block">
                        <img src={data ? data[5].urlToImage : null} alt="4" />
                        <h1 className="title">{data ? data[5].title : null}</h1>
                    </div>
                    <div className="hover-second-block">
                        <img src={data ? data[6].urlToImage : null} alt="5" />
                        <h1 className="title">{data ? data[6].title : null}</h1>
>>>>>>> master
                    </div>
                </div>
            </div>
    )
}

export default Section1;