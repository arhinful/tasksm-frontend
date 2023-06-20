'use client'
import styles from "./taskcard.module.css"
import {FaTrash} from "react-icons/fa";
import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import UpdateTaskModal from "./UpdateTaskModal";

export default function TaskCard({task}){
    const [deleteModalVisibility, setDeleteModalVisibility] = useState(false)
    const closeDeleteModal = () => setDeleteModalVisibility(false);
    const showDeleteModal = (event) => {
        event.stopPropagation()
        setDeleteModalVisibility(true)
    };

    const removeTask = () => {
      closeDeleteModal()
    }

    const [updateTaskModalVisibility, setUpdateTaskModalVisibility] = useState(false)
    const showUpdateModal = () => setUpdateTaskModalVisibility(true);
    const hideUpdateModal = () => setUpdateTaskModalVisibility(false);

    return(
        <>
            <div onClick={showUpdateModal} className={styles.task_card + " px-1 px-lg-2 py-2 py-lg-3 my-lg-3 my-2 row shadow"}>
                <div className={styles.task_data_container + " col-12"}>{task.task}</div>
                <div className={styles.task_data_container + " pt-2 col-12 ms-3"}>
                    {task.description}
                </div>
                <div className={styles.task_data_container + " pt-2 col-12"}>
                    <div>
                        <span>{task.created_at}</span>
                        <span className={task.is_completed ? " badge bg-success ms-5" : "badge bg-primary ms-5"}>
                            {task.is_completed ? "completed" : "pending"}
                        </span>

                        <button onClick={showDeleteModal} className={styles.trash_btn + " text-danger float-end"}>
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </div>

            <UpdateTaskModal task={task} isVisible={updateTaskModalVisibility} setIsVisible={hideUpdateModal}/>

            {/* Delete Modal */}
            <Modal show={deleteModalVisibility} onHide={closeDeleteModal} centered>
                <Modal.Header>
                    <Modal.Title>Remove Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want remove this task?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeDeleteModal}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={removeTask}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
