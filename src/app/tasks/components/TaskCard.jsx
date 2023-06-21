import styles from "./taskcard.module.css"
import {FaTrash} from "react-icons/fa";
import {Button, Modal, Spinner} from "react-bootstrap";
import {useEffect, useImperativeHandle, useState} from "react";
import UpdateTaskModal from "./UpdateTaskModal";
import {addTask, allTasks, deleteTask} from "../../../models/task";
import Alert from "../../../components/Alert";
import React from 'react';

function TaskCard(props, ref){

    // what to do after task addition
    useImperativeHandle(ref, () => ({
        populateTasksAfterAddition: (event) => {
            console.log("child function");
        }
    }));


    // Delete modal
    const [currentDeleteModal, setCurrentDeleteModal] = useState('')
    const showCurrenDeleteModal = (event, task_id) => {
        event.stopPropagation()
      setCurrentDeleteModal(task_id)
    }
    const closeDeleteModal = () => setCurrentDeleteModal('');
    // End delete modal

    // Update modal
    const [currentUpdateModal, setCurrentUpdateModal] = useState('')
    const showCurrentUpdateModal = (event, task_id)=>{
        setCurrentUpdateModal(task_id)
    }
    const closeUpdateModal = () => setCurrentUpdateModal('')
    // End update modal

    // delete task
    const removeTask = (task_id) => {
        deleteTask(task_id, (response)=>{
            if (response.statusText === 'OK'){
                Alert.success("Task deleted successfully")
                const newTasks = tasks.filter(task => task.id !== task_id);
                setTasks(newTasks)
            }
            else {
                Alert.error(`An error occurred : ${response.response.statusText}`)
            }
        })
    }

    const [tasks, setTasks] = useState("")
    useEffect(()=>{
        if (!tasks){
            allTasks({
                callback: (response)=>{
                    setTasks(response.data.data)
                }
            })
        }
    }, [tasks])

    // set tasks after update
    const setTaskAfterUpdate = (task)=>{
        const newTasks = tasks.map(_task => _task.id === task.id ? task : _task);
        setTasks(newTasks)
    }

    // Add task
    const [showAddModal, setShowAddModal] = useState(false)
    const closeAddModal = ()=> setShowAddModal(false)

    const [newTaskTask, setNewTaskTask] = useState("")
    const [newTaskDescription, setNewTaskDescription] = useState("")
    const sendTaskToBackend = (event) => {
        event.preventDefault()
        const data = {
            task: newTaskTask,
            description: newTaskDescription
        }
        addTask({
                data: data,
                callback: (response) => {
                    if (response.statusText === 'Created') {
                        const newTask = tasks
                        newTask.unshift(response.data.data)
                        setTasks(newTask)
                        setNewTaskDescription("")
                        setNewTaskTask("")
                        closeAddModal()
                        Alert.success("Task added successfully")
                    } else if (response.response.status === 422) {
                        Alert.error(response.response.data.message)
                    } else {
                        Alert.error(`An error occurred : ${response.response.statusText}`)
                    }
                }
            }
        )
    }

    if (!tasks) return <div> <Spinner animation="border" variant="danger" /> </div>

    return(
        <div>
            <div className="my-3">
                <span style={{fontSize: 30}}>Tasks</span>
                <button className="btn btn-success float-end"
                        onClick={()=>{
                            setShowAddModal(true)
                        }}
                >Add Task</button>
            </div>

            {
                tasks.map((task)=>(
                    <div key={task.id}>
                        <div
                            onClick={(event)=>{
                               showCurrentUpdateModal(event, task.id)
                            }}
                            className={styles.task_card + " px-1 px-lg-2 py-2 py-lg-3 my-lg-3 my-2 row shadow"}
                        >
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

                                    <button onClick={(event)=>{
                                        showCurrenDeleteModal(event, task.id)
                                    }} className={styles.trash_btn + " text-danger float-end"}>
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <UpdateTaskModal
                            task={task}
                            current_modal={currentUpdateModal}
                            hideModal={closeUpdateModal}
                            setTask={setTaskAfterUpdate}
                            key={task.id}
                        />

                        {/* Delete Modal */}
                        <Modal show={currentDeleteModal === task.id} size="lg" onHide={closeDeleteModal} centered>
                            <Modal.Header>
                                <Modal.Title>Remove Task ({ task.task })</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Are you sure you want remove this task?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={closeDeleteModal}>
                                    Cancel
                                </Button>
                                <Button variant="danger" onClick={()=>{
                                    removeTask(task.id)
                                }}>
                                    Yes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        {/* Add Modal */}
                        <Modal show={showAddModal} size="lg" onHide={closeAddModal} centered>
                            <Modal.Header>
                                <Modal.Title>Add New Task</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form onSubmit={sendTaskToBackend} id="new_task_form">
                                    <div className="form-floating mb-3">
                                        <input type="text"
                                               className={styles.no_outline + " form-control shadow-none"}
                                               id="task"
                                               value={newTaskTask}
                                               onChange={(event)=>{setNewTaskTask(event.target.value)}}
                                               placeholder="Task"/>
                                        <label htmlFor="task">Task</label>
                                    </div>
                                    <div className="form-floating">
                                    <textarea className={styles.no_outline + " form-control shadow-none"}
                                        placeholder="Leave a description here"
                                        value={newTaskDescription}
                                        onChange={(event)=>{
                                            setNewTaskDescription(event.target.value)
                                        }}
                                        style={{height: 200}}></textarea>
                                        <label htmlFor="description">Description/Note</label>
                                    </div>
                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={closeDeleteModal}>
                                    Cancel
                                </Button>
                                <Button variant="success" type="submit" form="new_task_form">
                                    Save
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                ))
            }
        </div>
    )
}

export default React.forwardRef(TaskCard)
