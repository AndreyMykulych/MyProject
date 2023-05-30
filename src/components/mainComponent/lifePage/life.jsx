import React,{useEffect,useState} from 'react'
import './life.css'

import { GetNewsJournal } from '../../api/api'
import InfoComponent from '../mainContent/sectionSecond/infoComp/info'

const Life = () => {
    const [lifeData, setLifeData] = useState(null);
    let [isFetchingData,setIsFetchingData] = useState(true)

    useEffect(() => {
        if (isFetchingData) {
            GetNewsJournal()
                .then((promise) => {
                    setIsFetchingData(false)
                    setLifeData(promise.articles)
                })
            .catch((error)=>{console.log(error)})
          }
    },[])

  return (
      <div className='life-page-container'>
          <div className='life-logo'></div>
          <InfoComponent data={lifeData} sliceIndex={8}/>
  </div>
  )
 }

export default Life;
