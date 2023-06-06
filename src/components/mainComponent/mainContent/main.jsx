import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import Pagination from "../pagination/pagination";

import { GetNewsApple, GetNewsAppleMain} from "../../api/api";
=======

import { GetNewsTesla ,GetNewsApple} from "../../api/api";
>>>>>>> master
import Section1 from "./sectionFirst/sectionFirst";
import Section2 from './sectionSecond/sectionSecond'

import './main.css'

const Main = () => {
<<<<<<< HEAD
    const [data1, setData1] = useState(null)
    const [data2,setData2] = useState(null)
    const [currentPage,setCurrentPage] = useState(1)
    
    
    useEffect(() => {
        GetNewsAppleMain()
        .then((response) => {
            setData1(response.articles)
           
               
        })
    
        .catch((error) => { console.log(error) });
        
            GetNewsApple(currentPage)
                .then((response) => {
                    setData2(response.articles)
                   
                       
                })
            
                .catch((error) => { console.log(error) });
        }
    , [currentPage])
   
  
    return (
        <div>
            <Section1 data={data1}/>
            <Section2 data={data2} />
            <Pagination setCurrentPage={number =>setCurrentPage(number)} />
=======
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
>>>>>>> master
        </div>
    )
}

export default Main;


