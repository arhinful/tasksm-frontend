import {Button, Modal} from "react-bootstrap";
import styles from "./taskcard.module.css";
import {useState} from "react";
import {updateTask} from "../../../models/task";

export default function UpdateTaskModal({ task, isVisible, hideModal, setTask, key }){
    const updateTaskData = (event)=>{
        event.preventDefault()
        const data = {
            task: taskInput,
            description: descriptionInput,
            is_completed: true
        }
        updateTask({
            id: task.id,
            data: data,
            callback: (task)=>{
                setTask(task)
            }
        })
    }
    const [taskInput, setTaskInput] = useState(task.task)
    const [descriptionInput, setDescriptionInput] = useState(task.description)
    return (
        <Modal show={isVisible} onHide={hideModal} centered size="lg">
            <Modal.Header>
                <Modal.Title>Update Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={updateTaskData} id="updateTaskForm">
                    <div className="form-floating mb-3">
                        <input type="text"
                               className={styles.no_outline + " form-control shadow-none"}
                               id="task"
                               value={taskInput}
                               onChange={(event)=>{setTaskInput(event.target.value)}}
                               placeholder="Task"/>
                        <label htmlFor="task">Task</label>
                    </div>
                    <div className="form-floating">
                            <textarea className={styles.no_outline + " form-control shadow-none"}
                                      placeholder="Leave a description here"
                                      id="description"
                                      value={descriptionInput}
                                      onChange={(event)=>{
                                          setDescriptionInput(event.target.value)
                                      }}
                                      style={{height: 200}}></textarea>
                        <label htmlFor="description">Description/Note</label>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hideModal}>
                    Cancel
                </Button>
                <Button variant="success" type="submit" form="updateTaskForm">
                    Update task
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
