import React, {useState} from 'react';
import s from './../Settings/Settings.module.css';
import cn from "classnames";
import styles from "../common/Paginator/Paginator.module.css";

const Settings = (props) => {
    const func = () => {
        if(!props.blackThemeButton){
            props.onBlackThemeButton(["sideBlack"]);
        }
        else {
            props.onBlackThemeButton(["side"])
        }
    }
        return (
        <div className={s.settings}>
            <span className={s.label}>Night theme</span>
            <span onClick={func} className={cn({[s.switchOn]: props.blackThemeButton}, s.button)}></span>
        </div>
    )
}

export default Settings;