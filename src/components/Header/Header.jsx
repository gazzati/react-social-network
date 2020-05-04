import React from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";
import icon from "./../../assets/images/reactIcon.png"


const Header = (props) => {
    return <div className={s.header}>
        <NavLink to="/profile/" className={s.logo}>
            <img src={icon} alt={""} />
        </NavLink>
        <Redirect to="/login" />
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>
                    <NavLink to="/profile" className={s.userName}>{props.login}</NavLink>
                    <div className={s.logout}>
                        <button onClick={props.logout} className={s.button}>log out</button>
                    </div>
                </div>
                : <div className={s.login} >
                    <NavLink to={'login'}>Log in</NavLink>
                </div>}
        </div>
    </div>
}

export default Header;