import React, {useEffect, useState} from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import userLogIcon from "../../assets/images/userLogIcon.png";
import {ProfileType} from "../../types/types";

export type PropsType = {
    isAuth: boolean
    profile: ProfileType | null
    logout: () => void
}

const Header: React.FC<PropsType> = ({isAuth, profile, logout}) => {

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

    return <div className={s.userBlock}>
        <Redirect to="/login"/>
        {isAuth
            ? <span className={s.isAuthUserBlock}>
                    <span className={s.userLogName}>{name}</span>
                    <img className={s.userPhoto}
                         src={photo ? photo : userPhoto} alt=""/>
                        <img className={s.function} src={userLogIcon} alt="" onClick={showUserMenu}/>
                        {showMenu &&
                        <div className={s.dropdown} onClick={showUserMenu}>
                            <NavLink to="/settings" className={s.link}>Settings</NavLink>
                            <a onClick={logout}>Exit</a>
                        </div>}

                </span>
            : <NavLink to={'/login'} className={s.login}>Log in</NavLink>}

    </div>
}

export default Header;