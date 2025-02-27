import axios from "axios"
export const axsiosInstance=axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})