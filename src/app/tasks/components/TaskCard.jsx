import styles from "./TaskCard.module.css"

export default function TaskCard({task}){
    return(
        <>
            <div className={styles.task_card + " p-2 my-3 row"}>
                <div className={styles.no_break + " col-4"}>{task.created_at}</div>
                <div className={styles.no_break + " col-4"}>{task.task}</div>
                <div className={styles.no_break + " col-4"}>{task.created_at}</div>
            </div>
        </>
    )
}
