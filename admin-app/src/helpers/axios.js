import axios from "axios";
import { api } from '../urlConfig';

// console.log("APi ------------------------------------= " + api);


const axiosInstance = axios.create({
  baseURL : api
}) 

export default axiosInstance;