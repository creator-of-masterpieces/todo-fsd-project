import type {ReactNode} from "react";

interface ITaskProps {
    children: ReactNode;
    id: string;
}

export const Task = (props: ITaskProps)=> {
    const {children,id} = props
    return(<li id={id}>{children}</li>)
}