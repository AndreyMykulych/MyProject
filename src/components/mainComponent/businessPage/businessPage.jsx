import React,{useState,useEffect} from 'react'
import './businessPage.css'

import InfoComponent from '../mainContent/sectionSecond/infoComp/info'
import { GetNewsBusiness } from '../../api/api';

const Business = () => {
    const [businessData, setBusinessData] = useState(null);
    let [isFetchingData,setIsFetchingData] = useState(true)
    
    useEffect(() => {
        if (isFetchingData) {
            GetNewsBusiness()
                .then((promise) => {
                    setIsFetchingData(false)
                    setBusinessData(promise.articles)
                })
            .catch((error)=>{console.log(error)})
          }
    },[])

  return (
      <div className='business-page-container'>
          <div className="business-logo"></div>
          <InfoComponent data={businessData} sliceIndex={8}/>
    </div>
  )
}

export default Business;