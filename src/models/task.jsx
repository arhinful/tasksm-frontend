
class Task {
    taskEndPoint = "taskms.test/api/v1/tasks"

    get(){
        const tasks = fetch(this.taskEndPoint)
        console.log(tasks.json())
        return tasks.json()
    }

    update(){

    }
}
