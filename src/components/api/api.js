import axios from 'axios';



const instance = axios.create();
let date = new Date();

let day = date.getDate();
let year = date.getFullYear();
let month = date.getMonth()

const link = 'https://newsapi.org/v2/everything?';
export const GetNewsTesla = async (currentPage) => {
 
    return (
        
        await instance
            .get(` https://newsapi.org/v2/everything?q=tesla&from=2023-05-07&page=${currentPage}&pageSize=6&sortBy=publishedAt&apiKey=4119ab6dbccd4c25aee1ab5f4a28f3f3`)
            .then((response) => {
                return response.data
            })
    )
}
        


export  const GetNewsAppleMain = async () => {
    return (
       
        await instance
            .get(`${link}q=apple&from=2023-05-31&to=${year}-${month}-${day}&sortBy=popularity&apiKey=4119ab6dbccd4c25aee1ab5f4a28f3f3`)
            .then((response) => {
                return (response.data)
                
            })
            
            .catch((error) => {
                console.log(error)
                throw error
            })
    
    )
        
}

export  const GetNewsApple = async (currentPage) => {
    return (
       
        await instance
            .get(`${link}q=apple&from=2023-05-31&to=${year}-${month}-${day}&page=${currentPage}&pageSize=4&sortBy=popularity&apiKey=4119ab6dbccd4c25aee1ab5f4a28f3f3`)
            .then((response) => {
                return (response.data)
                
            })
            
            .catch((error) => {
                console.log(error)
                throw error
            })
    
    )
        
}

export  const GetNewsBusiness = async (currentPage) => {
    return (
       
        await instance
            .get(`https://newsapi.org/v2/top-headlines?country=us&page=${currentPage}&pageSize=1&category=business&apiKey=4119ab6dbccd4c25aee1ab5f4a28f3f3`)
            .then((response) => {
                return (response.data)
                
            })
            
            .catch((error) => {
                console.log(error)
                throw error
            })
    
    )
        
}

export  const GetNewsTech = async (currentPage) => {
    return (
       
        await instance
            .get(`https://newsapi.org/v2/top-headlines?country=us&page=${currentPage}&pageSize=6&apiKey=4119ab6dbccd4c25aee1ab5f4a28f3f3`)
            .then((response) => {
                return (response.data)
                
            })
            
            .catch((error) => {
                console.log(error)
                throw error
            })
    
    )
        
}

export const GetNewsJournal = async (currentPage) => {
    return (
       
        await instance
            .get(`https://newsapi.org/v2/everything?page=${currentPage}&pageSize=6&domains=wsj.com&apiKey=4119ab6dbccd4c25aee1ab5f4a28f3f3`)
            .then((response) => {
                return response.data
            })
    )
}

