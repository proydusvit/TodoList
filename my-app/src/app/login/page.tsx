'use client'
import { title } from 'process'
import TodoList from '../../components/ToDoList/toDoList'
import { TaskType } from '../../components/ToDoList/toDoList'
import { useState } from 'react'
import { v1 } from 'uuid'

export type FilterValueType = 'all' | "complited" | "active"

const page = () => {

    const [task, setTask] = useState<Array<TaskType>>([
        { id: v1(), title: 'kasabian', isDone: true },
        { id: v1(), title: 'kxxx', isDone: true },
        { id: v1(), title: 'oasis', isDone: false },
    ])
    const [filter, setFilter] = useState<FilterValueType>("all")

    const removeTask = (id: string) => {
        let filterTask = task.filter(t => t.id !== id)
        setTask(filterTask)
    }

    const changeFilter = (value: FilterValueType) => {
        setFilter(value)
    }

    const addTask = (title: string) => {
        let newTask = { id: v1(), title: title, isDone: false }
        let newTasks = [newTask, ...task];
        setTask(newTasks)
    }



    let taskForFilter = task
    if (filter === "complited") {
        taskForFilter = task.filter(t => t.isDone === true)
    }

    if (filter === "active") {
        taskForFilter = task.filter(t => t.isDone === false)
    }

    const changeStatus = (taskId: string, isDone: boolean) => {
        let tasks = task.find(t => t.id === taskId)
        if (tasks) {
            tasks.isDone = isDone
        }
        setTask(task)
    }


    return (
        <div>
            <h1>To do List </h1>
            <TodoList title="Song" tasks={taskForFilter} remove={removeTask} changeFilter={changeFilter} addTask={addTask} />
        </div>
    )
}

export default page
