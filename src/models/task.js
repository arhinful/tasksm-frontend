import axios from "../lib/axios";
import useSWR from "swr";

const config = {
    headers:{
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
};

async function allTasks({filters='', callback}){
    // const {data, tasks, error, mutate} = useSWR('/tasks', ()=>{
    //     axios.get('/api/v1/tasks').then(response => response.data.data)
    // })
    await axios.get("/api/v1/tasks", config)
        .then((response)=>{
            callback(response)
        }).catch((error)=>{
            callback(error)
        })
}

async function addTask({data, callback}){
    data = JSON.stringify(data)
    await axios.post("/api/v1/tasks", data, config)
        .then((response)=>{
            callback(response)
        }).catch((error)=>{
            callback(error)
        })
}

async function updateTask({id, data, callback}){
    data = JSON.stringify(data)
    await axios.put(`/api/v1/tasks/${id}`, data, config)
        .then((response)=>{
            callback(response)
        }).catch((error)=>{
            callback(error)
        })
}

async function deleteTask(id, callback){
    await axios.delete(`/api/v1/tasks/${id}`, config)
        .then((response)=>{
            callback(response)
        }).catch((error)=>{
            callback(error)
        })
}

export {
    allTasks,
    addTask,
    updateTask,
    deleteTask
}
