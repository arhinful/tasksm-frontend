'use client'
import styles from "./tasks.module.css"
import TaskCard from "./components/TaskCard";

export default async function Page() {

    return (
        <>
            <div className={styles.tasks_card + " px-4 py-1"}>
                <TaskCard />
            </div>
        </>
    )
}
