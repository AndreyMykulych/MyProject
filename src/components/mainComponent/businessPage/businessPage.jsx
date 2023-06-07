import React,{useState,useEffect} from 'react'
import './businessPage.css'

import InfoComponent from '../mainContent/sectionSecond/infoComp/info'
import { GetNewsBusiness } from '../../api/api';
import Pagination from '../pagination/pagination';

const Business = () => {
    const [businessData, setBusinessData] = useState(null);
    const [currentPage,setCurrentPage] = useState(1)
    
    useEffect(() => {
         
            GetNewsBusiness(currentPage)
                .then((promise) => {
                    setBusinessData(promise.articles)
                })
            .catch((error)=>{console.log(error)})
            window.scrollTo(0,228)
    },[currentPage])

  return (
      <div className='business-page-container'>
          <div className="business-logo"></div>
          <InfoComponent data={businessData} />
          <Pagination setCurrentPage={number =>  setCurrentPage(number) }/>
    </div>
  )
}

export default Business;