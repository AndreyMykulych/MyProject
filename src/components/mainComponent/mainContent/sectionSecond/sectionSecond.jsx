import React from "react";

import Player from "./videoPlayer/player";
import InfoComponent from "./infoComp/info";
import './sectionSecond.css'

const Section2 = ({ data}) => {
  
    return (
        <div className="section-player">
            <Player />
            <InfoComponent data={data} sliceIndex={ 4}/>
        </div>
    )
}

export default Section2;