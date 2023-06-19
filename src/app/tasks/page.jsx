import styles from "./tasks.module.css"
import TaskCard from "./components/TaskCard";
export default function Page(){
    const task = [
        {
            id: 1,
            task: "My first task My first task My first task My first task My first task My first task ",
            description: "Basically this is my first task",
            is_completed: true,
            created_at: "15-11-2022",
        },
        {
            id: 2,
            task: "My second task",
            description: "Basically this is my second task",
            is_completed: false,
            created_at: "15-01-2023",
        },
        {
            id: 3,
            task: "My third task",
            description: "Basically this is my third task",
            is_completed: false,
            created_at: "01-05-2023",
        },
    ]
    return (
        <>
            <div>
                <h3>Tasks</h3>
            </div>
            <div className={styles.tasks_card+" px-4 py-1"}>

                {
                    task.map((task, index)=>(
                        <TaskCard key={task.id} task={task}/>
                    ))
                }

            </div>
        </>
    )
}
