import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user.png";

const DialogItem = (props) => {
    return (
        <div className={s.item}>
            <img
                src={userPhoto}
                alt={""}/>
            <div className={s.userName}>
                <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;