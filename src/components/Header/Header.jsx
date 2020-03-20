import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
       <NavLink to="/profile/" activeClassName={s.activeLink}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'/>
        </NavLink>

        <div className={s.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={'login'}>Login</NavLink>}

        </div>

    </header>
}

export default Header;