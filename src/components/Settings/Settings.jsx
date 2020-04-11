import React from 'react';
import s from './../Settings/Settings.module.css';
import cn from "classnames";

const Settings = (props) => {
    const func = () => {
        if(!props.blackThemeButton){
            props.onBlackThemeButton()
            document.getElementById('side').style.backgroundColor = "#72879c";
            document.getElementById('wrapper').style.backgroundColor = "#586775";
        }
        else {
            props.onBlackThemeButton()
            document.getElementById('side').style.backgroundColor = "white";
            document.getElementById('wrapper').style.backgroundColor = "ghostwhite";

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