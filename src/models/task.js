import axios from "axios";


const taskEndPoint = "http://taskms.test/api/v1/tasks"
const config = {
    headers:{
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
};

async function allTasks({filters='', callback}){
    await axios.get(taskEndPoint, config)
        .then((response)=>{
            callback(response)
        }).catch((error)=>{
            callback(error)
        })
}

async function addTask({data, callback}){
    data = JSON.stringify(data)
    await axios.post(taskEndPoint, data, config)
        .then((response)=>{
            callback(response)
        }).catch((error)=>{
            callback(error)
        })
}

async function updateTask({id, data, callback}){
    data = JSON.stringify(data)
    await axios.put(`${taskEndPoint}/${id}`, data, config)
        .then((response)=>{
            callback(response)
        }).catch((error)=>{
            callback(error)
        })
}

async function deleteTask(id, callback){
    await axios.delete(`${taskEndPoint}/${id}`, config)
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
