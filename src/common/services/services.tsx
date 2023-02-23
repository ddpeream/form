import axios, { AxiosError, isAxiosError } from "axios";

export const PostForm = async (body: any) => {

  try {
    const BASE_URL  = process.env.REACT_APP_BASE_URL;
    
    const data = await axios.post(`${BASE_URL}/post`, body);
    console.log('env', data)
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
        const err = error as AxiosError<any>;
    }
  }
};
