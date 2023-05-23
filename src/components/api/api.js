import axios from 'axios';



const instance = axios.create();

export  const GetNewsTesla = async () => {
    return (
       
        await instance
            .get(`https://newsapi.org/v2/everything?q=tesla&from=2023-04-22&sortBy=publishedAt&apiKey=4119ab6dbccd4c25aee1ab5f4a28f3f3`)
            .then((response) => {
                return (response.data)
                
            })
            
            .catch((error) => {
                console.log(error)
                throw error
            })
    
    )
        
}
export  const GetNewsApple = async () => {
    return (
       
        await instance
            .get(`https://newsapi.org/v2/everything?q=apple&from=2023-05-20&to=2023-05-20&sortBy=popularity&apiKey=4119ab6dbccd4c25aee1ab5f4a28f3f3`)
            .then((response) => {
                return (response.data)
                
            })
            
            .catch((error) => {
                console.log(error)
                throw error
            })
    
    )
        
}
