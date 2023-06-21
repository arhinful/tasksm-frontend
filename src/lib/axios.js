import axios from "axios";

export default axios.create({
    baseURL: "http://taskms.test",
    headers:{
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true
})
