import React, {useEffect, useState} from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import userLogIcon from "../../assets/images/userLogIcon.png";
import exit from "../../assets/images/exit.png";


const Header = ({isAuth, profile, logout}) => {

    let [photo, setPhoto] = useState(profile.photos.large);
    let [name, setName] = useState(profile.fullName);

    useEffect( () => {
        setPhoto(profile.photos.large);
        setName(profile.fullName);
    }, [1>0])

    const showUserMenu = () => {
    }

    return <div className={s.userBlock}>
        <Redirect to="/login" />
            {isAuth
                ? <span className={s.isAuthUserBlock}>
                    <span className={s.userLogName}>{name}</span>
                    <img className={s.userPhoto}
                         src={photo ? photo : userPhoto} alt=""/>
                        <img className={s.functionExit} src={exit} alt="" onClick={logout}/>
                        <img className={s.functionLogout} src={userLogIcon} alt="" onClick={showUserMenu}/>


                </span>
                : <NavLink to={'/login'} className={s.login}>Log in</NavLink>}
      
    </div>
}

export default Header;