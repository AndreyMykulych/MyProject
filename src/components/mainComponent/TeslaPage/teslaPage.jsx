import React, { useEffect, useState } from "react";

import './teslaPage.css'
import { GetNewsTesla} from "../../api/api";
import InfoComponent from "../mainContent/sectionSecond/infoComp/info";
import Pagination from "../pagination/pagination";




const Tesla= () => {
    const [data, setTeslaData] = useState(null)
    const [currentPage,setCurrentPage] = useState(1)
    let [isFetchingData,setIsFetchingData] = useState(true)
    
 
    useEffect(() => {
        debugger
           {
                GetNewsTesla()
                    .then((promise) => {
    
                        setTeslaData(promise.articles)
                        
                    })
                .catch((error)=>{console.log(error)})
              }
        console.log(currentPage)
        console.log(data)
    }, [ currentPage])
    
    return (
        <div className="tesla-page-container">
            <div className="tesla-logo"></div>
            <InfoComponent data={data}  />
            <Pagination setCurrentPage={number =>setCurrentPage(number) }/>
        </div>
    )
}

export default Tesla;
