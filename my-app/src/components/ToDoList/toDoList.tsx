
'use client'

import { ChangeEvent, useState, KeyboardEvent } from "react"

import { FilterValueType } from "@/app/login/page"

type PropType = {
    title: string
    tasks: Array<TaskType>
    remove: (id: string) => void
    changeFilter: (value: FilterValueType) => void
    addTask: (title: string) => void
    changeStatus: 

}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: PropType) => {
    const [newTitle, setNewTitle] = useState("")


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        setNewTitle(e.currentTarget.value)
    }

    const onKeyPresHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onAddTask()
        }
    }

    const onAddTask = () => {
        if (newTitle === "") {
            alert("The field cannot be empty!");
        } else {
            props.addTask(newTitle)
            setNewTitle("")
        }
    }

    const onAllFilterHandler = () => {
        props.changeFilter("all")
    }
    const onComplitedFilterHandler = () => {
        props.changeFilter("complited")
    }

    const onActiveFilterHandler = () => {
        props.changeFilter("active")
    }

    const removeClick = (id: any) => {
        props.remove(id)
    }

    const onChangeHandler = () => {

    }

    return (
        <div className="m-auto text-center">
            <h1 className="text-3xl font-bold mb-4">{props.title}</h1>
            <div className="mb-8">

                <input value={newTitle}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPresHandler}
                    type="text"
                    className="border border-gray-300 px-2 py-1 mr-2"
                />

                <button
                    onClick={onAddTask}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                    Add
                </button>

            </div>

            <div className=" flex justify-center">
                <ul className="text-left flex flex-col items-left">
                    {props.tasks.map(t =>
                        <li key={t.id} className="flex items-center justify-between mb-2">
                            <input type="checkbox" checked={t.isDone} className="mr-2" />
                            <span className={t.isDone ? "line-through" : ""}>{t.title}</span>
                            <button onClick={() => removeClick(t.id)} className="bg-red-500 ml-5 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                Delete
                            </button>

                        </li>

                    )}
                </ul>
            </div>
            <div className="mt-8">
                <button onClick={() => { onAllFilterHandler() }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">All</button>
                <button onClick={() => { onActiveFilterHandler() }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Active</button>
                <button onClick={() => { onComplitedFilterHandler() }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Complited</button>
            </div>
        </div>



    )
}

export default TodoList
