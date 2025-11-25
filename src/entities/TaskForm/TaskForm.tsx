import {Button} from "../../shared/Button/Button.tsx";
import {type ChangeEvent, type FormEvent, useState} from "react";
import {TasksList} from "../TasksList/TasksList.tsx";
import type {ITask} from "../types/types.ts";


export const TaskForm = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [taskList, setTaskList] = useState<ITask[]>([{title: 'Накопить на машину', id: '1'},{title: 'Купить машину', id: '2'}])
    const handleAddTask = () => {
        const newTask = {title: inputValue, id: crypto.randomUUID()};
        setTaskList((prevState)=> {
            return [newTask, ...prevState]
        });
    }
    const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
    }
    const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        setInputValue(evt.target.value);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={onChangeHandler} value={inputValue}/>
                <Button type={'submit'} onClick={handleAddTask}>Нажми Меня</Button>
            </form>
            <TasksList tasks={taskList}/>
        </>
    )
}