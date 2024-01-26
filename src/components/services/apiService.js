import axios from "axios";

 const token = 10160325470374276n;

/* const getAuthorizationHeader = () => {
    return { Authorization: `Bearer: ${token}` };
  }; */

export const axiosInstance = axios.create({
    baseURL: `https://www.superheroapi.com/api/${token}/`,
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})
