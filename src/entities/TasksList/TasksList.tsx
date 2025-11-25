import {Task} from "../task/Task.tsx";
import type {ITask} from "../types/types.ts";

interface ITaskListProps {
    tasks: ITask[];
}
export const TasksList = (props: ITaskListProps) => {
   const {tasks} = props;
    return (
        <ul>
            {tasks.map((task)=> {
                return <Task key={task.id} id={task.id}>{task.title}</Task>
            })}
        </ul>
    )
}