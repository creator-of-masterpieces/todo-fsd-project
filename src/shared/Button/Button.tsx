import type {ReactNode} from "react";

interface IButtonProps {
    type: "submit" | "reset" | "button" | undefined;
    children: ReactNode;
    onClick?: () => void;
    className?: string;
}

export const Button = (props: IButtonProps)=> {
    const {children, onClick, className, type} = props;
    return(<button className={className} type={type} onClick={onClick}>{children}</button>)
}