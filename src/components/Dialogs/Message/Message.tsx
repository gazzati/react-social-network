import React from "react";
import s from './../Dialogs.module.css'

type PropsType = {
    message: string
    isItMe: boolean
}

const Message: React.FC<PropsType> = (props) => {
    let className = props.isItMe ? `${s.message} ${s.myMessage}` : s.message

    return (
        <li className={className}>{props.message}</li>
    )
}

export default Message;
