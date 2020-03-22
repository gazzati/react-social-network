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
                ? <div> <NavLink to="/profile">{props.login}</NavLink>
                <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'login'}>Login</NavLink>}

        </div>

    </header>
}

export default Header;