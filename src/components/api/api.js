import axios from 'axios';



const instance = axios.create();
const link = 'https://newsapi.org/v2/everything?';
export const GetNewsTesla = async ( currentPage ) => {
 
    return (
       
        await instance
            .get(`https://newsapi.org/v2/everything?q=tesla&page=${currentPage}&pageSize=6&from=2023-04-30&sortBy=publishedAt&apiKey=4119ab6dbccd4c25aee1ab5f4a28f3f3`)
            .then((response) => {
                return (response.data)
                
            })
            
            .catch((error) => {
                console.log(error)
                throw error
            })
    
    )
        
}
    
    
        


export  const GetNewsAppleMain = async () => {
    return (
       
        await instance
            .get(`${link}q=apple&from=2023-05-20&to=2023-05-20&sortBy=popularity&apiKey=4119ab6dbccd4c25aee1ab5f4a28f3f3`)
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
            .get(`${link}q=apple&from=2023-05-20&to=2023-05-20&sortBy=popularity&page=${currentPage}&pageSize=6&apiKey=4119ab6dbccd4c25aee1ab5f4a28f3f3`)
            .then((response) => {
                return (response.data)
                
            })
            
            .catch((error) => {
                console.log(error)
                throw error
            })
    
    )
        
}

export  const GetNewsBusiness = async () => {
    return (
       
        await instance
            .get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4119ab6dbccd4c25aee1ab5f4a28f3f3`)
            .then((response) => {
                return (response.data)
                
            })
            
            .catch((error) => {
                console.log(error)
                throw error
            })
    
    )
        
}

export  const GetNewsTech = async () => {
    return (
       
        await instance
            .get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4119ab6dbccd4c25aee1ab5f4a28f3f3`)
            .then((response) => {
                return (response.data)
                
            })
            
            .catch((error) => {
                console.log(error)
                throw error
            })
    
    )
        
}

export  const GetNewsJournal = async () => {
    return (
       
        await instance
            .get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4119ab6dbccd4c25aee1ab5f4a28f3f3`)
            .then((response) => {
                return (response.data)
                
            })
            
            .catch((error) => {
                console.log(error)
                throw error
            })
    
    )
        
}
