import {Button, Modal} from "react-bootstrap";
import styles from "./taskcard.module.css";

export default function UpdateTaskModal({ task, isVisible, hideModal }){
    const updateTask = ()=>{
        console.log(task)
    }
    return (
        <Modal show={isVisible} onHide={hideModal} centered size="lg">
            <Modal.Header>
                <Modal.Title>Update Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-floating mb-3">
                        <input type="text"
                               className={styles.no_outline + " form-control shadow-none"}
                               value={task.task}
                               id="task"
                               placeholder="Passworddscds"/>
                        <label htmlFor="task">Task</label>
                    </div>
                    <div className="form-floating">
                            <textarea className={styles.no_outline + " form-control shadow-none"}
                                      placeholder="Leave a comment here"
                                      id="description"
                                      style={{height: 200}}>{task.description}</textarea>
                        <label htmlFor="description">Description/Note</label>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeUpdateModal}>
                    Cancel
                </Button>
                <Button variant="success" onClick={updateTask}>
                    Update task
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
