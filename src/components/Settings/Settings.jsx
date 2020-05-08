import React, {useState} from 'react'
import s from './../Settings/Settings.module.css'
import cn from "classnames"
import {connect} from "react-redux"
import {toggleBlackTheme} from "../../redux/settings-reducer"
import {compose} from "redux";

let mapStateToProps = (state) => ({
    isBlackThemeActivated: state.settings.isBlackThemeActivated
})


const Settings = ({isBlackThemeActivated, toggleBlackTheme}) => {

    const func = () => {
        debugger
        if(!isBlackThemeActivated){
            toggleBlackTheme(!isBlackThemeActivated)
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem('blackThemeButton', String(!isBlackThemeActivated))
        }
        else {
            debugger
            toggleBlackTheme(!isBlackThemeActivated)
            localStorage.setItem('blackThemeButton', String(!isBlackThemeActivated))
            document.documentElement.setAttribute('data-theme', 'light')

        }
    }
        return (
        <div className={s.settings} >
            <span className={s.label}>Night theme</span>
            <span onClick={func} className={cn({[s.switchOn]: isBlackThemeActivated}, s.button)}> </span>
        </div>
    )
}

export default compose(connect (mapStateToProps, {toggleBlackTheme}))(Settings);