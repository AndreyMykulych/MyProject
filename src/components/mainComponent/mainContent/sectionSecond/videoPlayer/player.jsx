import React from "react";
import Youtube from 'react-youtube'
import './player.css'

const Player = () => {
    const videoId = 'WY8sDvZdWEA'
    const options = {
        heigth: '900',
        width: '1100',
        playerVars: {
            autoplay: 0,
            controls: 1,
        }
    }
    return (
        <div className="player-div">
         <Youtube videoId={videoId} opts ={options}/>
        </div>
    )
}

export default Player