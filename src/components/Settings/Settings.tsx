import React from 'react'
import s from './../Settings/Settings.module.css'
import cn from "classnames"
import {connect} from "react-redux"
import {toggleBlackTheme} from "../../redux/settings-reducer"
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => ({
    isBlackThemeActivated: state.settings.isBlackThemeActivated
})

type PropsType = {
    isBlackThemeActivated: boolean
    toggleBlackTheme: (theme: boolean) => void
}

const Settings: React.FC<PropsType> = ({isBlackThemeActivated, toggleBlackTheme}) => {

    const func = () => {
        if(!isBlackThemeActivated){
            toggleBlackTheme(!isBlackThemeActivated)
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem('blackThemeButton', String(!isBlackThemeActivated))
        }
        else {
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