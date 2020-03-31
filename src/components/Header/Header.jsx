import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import icon from "./../../assets/images/reactIcon.png"


const Header = (props) => {
    return <div className={s.header}>
        <NavLink to="/profile/" activeClassName={s.activeLink}>
            <img
                src={icon} alt={""}/>
        </NavLink>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>
                    <NavLink to="/profile" className={s.userName}>{props.login}</NavLink>
                    <div onClick={props.logout} className={s.logout}>logout</div>
                </div>
                : <div className={s.login} >
                    <NavLink to={'login'}>login</NavLink>
                </div>}
        </div>
    </div>
}

export default Header;