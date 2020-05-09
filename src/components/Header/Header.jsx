import React, {useEffect, useState} from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import userLogIcon from "../../assets/images/userLogIcon.png";

const Header = ({isAuth, profile}) => {

    let [photo, setPhoto] = useState(profile.photos.large);
    let [name, setName] = useState(profile.fullName);

    useEffect( () => {
        setPhoto(profile.photos.large);
        setName(profile.fullName);
    }, [])

    const showUserMenu = () => {

    }

    return <div className={s.userBlock}>
        <Redirect to="/login" />
            {isAuth
                ? <span className={s.isAuthUserBlock}>
                    <span className={s.userLogName}>{name}</span>
                    <img className={s.userPhoto}
                         src={photo ? photo : userPhoto} alt=""/>
                    <img className={s.function} src={userLogIcon} alt="" onClick={showUserMenu}/>
                </span>
                : <NavLink to={'/login'} className={s.login}>Log in</NavLink>}
      
    </div>
}

export default Header;