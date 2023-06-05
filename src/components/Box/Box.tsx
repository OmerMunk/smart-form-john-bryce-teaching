import React from "react";
import './Box.css';


interface IBoxProps {
    children?: React.ReactNode;
    title?: string;
    color: string;
    width?: string;
    height?: string;

}

const Box = (props: IBoxProps) => {
    return (
        <div
            className={'box-container'}
            style={{
                backgroundColor: props.color,
                width: props.width,
                height: props.height,
            }}>
            <div>
                <h2>{props.title}</h2>
                {props.children}
            </div>
        </div>
    )
}

export default Box;