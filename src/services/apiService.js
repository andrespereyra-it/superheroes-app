import axios from "axios";

 const token = 10160325470374276;

 /* const getAuthorizationHeader = () => {
    return { Authorization: `Bearer: ${token}` };
  }; */

export const axiosInstance = axios.create({
    baseURL: `http://www.superheroapi.com/api/${token}/`,
    headers: {
        //'Access-Control-Allow-Origin' : '*'
        //...getAuthorizationHeader()
        'Content-Type' : 'application/json, text/plain, */*'
    }
})
