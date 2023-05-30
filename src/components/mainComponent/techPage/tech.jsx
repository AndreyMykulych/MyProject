import React, { useState, useEffect } from 'react'
import './tech.css'

import { GetNewsTech } from '../../api/api'
import InfoComponent from '../mainContent/sectionSecond/infoComp/info'
import Pagination from '../pagination/pagination'

const Tech = () => {
    const [techData, setTechData] = useState(null)
    const [currentPage,setCurrentPage] = useState(1)
    let [isFetchingData,setIsFetchingData] = useState(true)
    
    useEffect(() => {
        if (isFetchingData) {
            GetNewsTech(currentPage)
                .then((promise) => {
                    setIsFetchingData(false)
                    setTechData(promise.articles)
                })
            .catch((error)=>{console.log(error)})
          }
    },[isFetchingData,currentPage])

  return (
      <div className='tech-page-container'>
          <div className='tech-logo'></div>
          <InfoComponent data={techData} sliceIndex={8} />
          <Pagination  onChangePage={number=>{setCurrentPage(number)}}/>
    </div>
  )
 }

export default Tech;
