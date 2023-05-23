import React, { useEffect, useState } from "react";

import { GetNewsTesla ,GetNewsApple} from "../../api/api";
import Section1 from "./sectionFirst/sectionFirst";
import Section2 from './sectionSecond/sectionSecond'

import './main.css'

const Main = () => {
    const [data, setData] = useState(null)
    const [appleData,setAppleData] = useState(null)
    let isFetchingData = true;
    useEffect(() => {
       
            if (isFetchingData) {
                GetNewsTesla()
                    .then((response) => { setData(response.articles) })
            
                    .catch((error) => { console.log(error) });
            }
        if (isFetchingData) {
            GetNewsApple()
                .then((promise) => { setAppleData(promise.articles) })
            .catch((error)=>{console.log(error)})
          }
    }, [])
   
    return (
        <div>
            <Section1 data={data}/>
            <Section2 data={appleData}/>
        </div>
    )
}

export default Main;


