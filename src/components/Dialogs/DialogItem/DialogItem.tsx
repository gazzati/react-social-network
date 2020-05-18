import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";

type PropsType = {
    id: number
    name: string
    photo: string | null
    hasNewMessage: boolean
    newMessagesCount: number
    currentDialog: number
}

const DialogItem: React.FC<PropsType> = (props) => {
    let className = props.currentDialog === props.id ? `${s.item} ${s.activeDialogItem}` : s.item
    return (
        <NavLink to={"/dialogs/" + props.id} className={className}>
            <img src={props.photo || userPhoto} alt={""}/>
            <div className={s.userName}>{props.name}</div>
        </NavLink>
    )
}

export default DialogItem;