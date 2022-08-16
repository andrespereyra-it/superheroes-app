import axios from "axios";

/* const token = 10160325470374276;

const getAuthorizationHeader = () => {
    return { Authorization: `Bearer: ${token}` };
  }; */

export const axiosInstance = axios.create({
    baseURL: 'https://www.superheroapi.com/api/10160325470374276/',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})
