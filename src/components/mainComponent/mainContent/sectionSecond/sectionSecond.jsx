import React from "react";

import Player from "./videoPlayer/player";
import InfoComponent from "./infoComp/info";
import './sectionSecond.css'

const Section2 = ({ data}) => {
<<<<<<< HEAD
  
    return (
        <div className="section-player">
            <Player />
            <InfoComponent data={data} sliceIndex={ 4}/>
        </div>
    ) 
=======
   
    return (
        <div className="section-player">
            <Player />
           
            <InfoComponent data={data}/>
        </div>
    )
>>>>>>> master
}

export default Section2;