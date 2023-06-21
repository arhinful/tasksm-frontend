import {Button, Modal} from "react-bootstrap";
import styles from "./taskcard.module.css";
import {useState} from "react";
import {updateTask} from "../../../models/task";
import Alert from "../../../components/Alert";

export default function UpdateTaskModal({ task, current_modal, hideModal, setTask }){
    const updateTaskData = (event)=>{
        event.preventDefault()
        const data = {
            task: taskInput,
            description: descriptionInput,
            is_completed: isCompletedInput
        }
        updateTask({
            id: task.id,
            data: data,
            callback: (response)=>{
                console.log(response)
                if (response.statusText === 'Accepted'){
                    setTask(response.data.data)
                    Alert.success("Task updated successfully")
                }
                else if (response.response.status === 422){
                    Alert.error(response.response.data.message)
                }
                else {
                    Alert.error(`An error occurred : ${response.response.statusText}`)
                }
            }
        })
    }

    const [taskInput, setTaskInput] = useState(task.task)
    const [descriptionInput, setDescriptionInput] = useState(task.description)
    const [isCompletedInput, setIsCompletedInput] = useState(task.is_completed)

    return (
        <Modal show={current_modal === task.id} onHide={hideModal} centered size="lg">
            <Modal.Header>
                <Modal.Title>Update Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={updateTaskData} id={`updateTaskForm_${task.id}`}>
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
                    <div className="form-floating mt-3">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id={`switch_${task.id}`}
                                defaultChecked={isCompletedInput}
                                onChange={(event)=>{
                                    event.target.checked ?
                                        setIsCompletedInput(true) :
                                        setIsCompletedInput(false)
                                }}
                            />
                                <label className="form-check-label" htmlFor={`switch_${task.id}`}>
                                    Is completed
                                </label>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hideModal}>
                    Cancel
                </Button>
                <Button variant="success" type="submit" form={`updateTaskForm_${task.id}`}>
                    Update task
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
