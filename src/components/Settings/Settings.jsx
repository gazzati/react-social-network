import React, {useState} from 'react';
import s from './../Settings/Settings.module.css';
import cn from "classnames";

const Settings = (props) => {
    let [blackThemeIsActivated, setBlackThemeIsActivated] =
        useState(localStorage.getItem('blackThemeButton') === 'true');

    const func = () => {
        if(!blackThemeIsActivated){
            setBlackThemeIsActivated(!blackThemeIsActivated)
            localStorage.setItem('blackThemeButton', String(!blackThemeIsActivated))
            document.getElementById('body').style.backgroundColor = "#72879c";
            document.getElementById('wrapper').style.backgroundColor = "#586775";
        }
        else {
            setBlackThemeIsActivated(!blackThemeIsActivated)
            localStorage.setItem('blackThemeButton', String(!blackThemeIsActivated))
            document.getElementById('body').style.backgroundColor = "white";
            document.getElementById('wrapper').style.backgroundColor = "ghostwhite";
        }
    }
        return (
        <div className={s.settings}>
            <span className={s.label}>Night theme</span>
            <span onClick={func} className={cn({[s.switchOn]: blackThemeIsActivated}, s.button)}></span>
        </div>
    )
}

export default Settings;