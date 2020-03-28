import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import icon from "./../../assets/images/reactIcon.png"


const Header = (props) => {
    return <header className={s.header}>
       <NavLink to="/profile/" activeClassName={s.activeLink}>
            <img
                src={icon}/>
        </NavLink>

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>
                    <NavLink to="/profile" className={s.userName}>{props.login}</NavLink>
                    <div onClick={props.logout} className={s.logout}>log out</div>

                </div>
                : <NavLink to={'login'} >Login</NavLink>}

        </div>

    </header>
}

export default Header;