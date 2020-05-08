import React from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import userLogIcon from "../../assets/images/userLogIcon.png";

const Header = (props) => {

    const showUserMenu = () => {

    }

    return <div className={s.userBlock}>
        <Redirect to="/login" />
            {props.isAuth
                ? <span className={s.isAuthUserBlock}>
                    <span className={s.userLogName}>{props.profile && props.profile.fullName}</span>
                    <img className={s.userPhoto}
                         src={props.profile ? props.profile.photos.large : userPhoto} alt=""/>
                    <img className={s.function} src={userLogIcon} alt="" onClick={showUserMenu}/>
                         
                   {/* <div className={s.logout}>
                        <button onClick={props.logout} className={s.button}>log out</button>
                    </div>*/}
                </span>
                : <NavLink to={'/login'} className={s.login}>Log in</NavLink>}
      
    </div>
}

export default Header;