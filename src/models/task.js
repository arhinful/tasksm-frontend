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
            callback(response.data.data)
        }).catch((error)=>{
            console.log(error)
        })
}

async function getTask(slug){
    const tasks = fetch(`${taskEndPoint}/${slug}`)
    console.log(tasks.json())
    return tasks.json()
}

async function updateTask({id, data, callback}){
    data = JSON.stringify(data)
    await axios.put(`${taskEndPoint}/${id}`, data, config)
        .then((response)=>{
            callback(response.data.data)
        }).catch((error)=>{
            console.log(error)
        })
}

async function deleteTask(slug){
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
    const tasks = fetch(`${taskEndPoint}/${slug}`, options)
    console.log(tasks.json())
    return tasks.json()
}

export {
    allTasks,
    getTask,
    updateTask,
}
