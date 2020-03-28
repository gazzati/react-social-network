import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png"
                alt={""}/>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;