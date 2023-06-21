import axios from "axios";

export default axios.create({
    baseURL: "https://taskms-c2ad08f725cb.herokuapp.com",
    headers:{
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true
})
