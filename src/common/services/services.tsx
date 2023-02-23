import axios, { AxiosError, isAxiosError } from "axios";
import { useContext } from "react";
import { FormContext } from "../context/formContext";

export const PostForm = async (body: any) => {

  console.log('env', body)
  // const { setError, setMessageError } = useContext(FormContext)
    try {
        const BASE_URL  = process.env.REACT_APP_BASE_URL;

    const data = await axios.post(`${BASE_URL}/post`, body);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
        const err = error as AxiosError<any>;
            // setMessageError(err.response)
            // setError(true)
    }
  }
};
