import axios from "axios";


export const api = axios.create({
    baseURL:"http://course-data.mark2win.com/"
})