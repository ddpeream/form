import axios from "axios"

export const fetchData = async (body: any) => {
  
    const bodyparse = {
        Valor: body.value,
        Select: body.idItemSelected,
        TRM: body.trm
    }
    
    const BASE_URL = 'https://httpbin.org/post'
    
    const data = await axios.post(BASE_URL, bodyparse)
     console.log('fetch', data.data.json)  
    // return data
}