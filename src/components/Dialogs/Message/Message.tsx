import React from "react";
import s from './../Dialogs.module.css'

type PropsType = {
    message: string
    isItMe: boolean
}

const Message: React.FC<PropsType> = (props) => {
    let className = props.isItMe ? `${s.message} ${s.myMessage}` : s.message

    return (
        <div className={className}>{props.message}</div>
    )
}

export default Message;