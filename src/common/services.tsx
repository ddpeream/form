import axios from "axios"

export const fetchData = async (body: any) => {
    console.log("body valid", body);

    const BASE_URL = 'https://httpbin.org/post'
    
    const data = await axios.post(BASE_URL, body) 
    return data.data.json
}