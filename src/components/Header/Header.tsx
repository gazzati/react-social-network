import React, {useEffect, useState} from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import userLogIcon from "../../assets/images/userLogIcon.png";
import {ProfileType} from "../../types/types";
import reactIcon from "../../assets/images/reactIcon.png";
import cn from "classnames";

export type PropsType = {
    isAuth: boolean
    profile: ProfileType | null
    logout: () => void
    isBlackThemeActivated: boolean
    toggleBlackTheme: (theme: boolean) => void
}

const Header: React.FC<PropsType> = ({isAuth, profile, logout, isBlackThemeActivated, toggleBlackTheme}) => {

    let [photo, setPhoto] = useState(profile && profile.photos.large);
    let [name, setName] = useState(profile && profile.fullName);
    let [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setPhoto(profile && profile.photos.large);
        setName(profile && profile.fullName);
    }, [1 > 0])

    const showUserMenu = () => {
        setShowMenu(!showMenu)
    }

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

    return <div className={s.headerWrap}>
        <div className={s.mainIcon}>
            <NavLink to="/profile/" >
                <img src={reactIcon} alt={""} className={s.logo}/>
            </NavLink>
            <p className={s.title}>GAZZATI <br/> SOCIAL NETWORK</p>
        </div>
        <div className={s.userBlock}>
            {isAuth
                ? <span className={s.isAuthUserBlock}>
                    <span className={s.userLogName}>{name}</span>
                    <img className={s.userPhoto}
                         src={photo ? photo : userPhoto} alt=""/>
                        <img className={s.function} src={userLogIcon} alt="" onClick={showUserMenu}/>

                </span>
                : <NavLink to={'/login'} className={s.login}>Log in</NavLink>}

        </div>
        {showMenu && <>
            <div className={s.popup} onClick={showUserMenu}> </div>
            <div className={s.content}>
                <div className={s.night}>
                    <span className={s.label}>Night theme</span>
                    <span onClick={func} className={cn({[s.switchOn]: isBlackThemeActivated}, s.button)}> </span>
                </div>
                <a className={s.exit} onClick={logout}>Exit from account</a>
            </div>
        </>}
    </div>
}

export default Header;
