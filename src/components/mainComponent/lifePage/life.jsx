import React,{useEffect,useState} from 'react'
import './life.css'
 import Pagination from '../pagination/pagination'
import { GetNewsJournal } from '../../api/api'
import InfoComponent from '../mainContent/sectionSecond/infoComp/info'

const Life = () => {
    const [lifeData, setLifeData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
         
            GetNewsJournal(currentPage)
                .then((promise) => {
                   
                    setLifeData(promise.articles)
                })
            .catch((error)=>{console.log(error)})
            window.scrollTo(0,228)
    },[currentPage])
 
  return (
      <div className='life-page-container'>
          <div className='life-logo'></div>
          <InfoComponent data={lifeData}  />
          <Pagination setCurrentPage={number=> setCurrentPage(number)} />
  </div>
  )
 }

export default Life;
