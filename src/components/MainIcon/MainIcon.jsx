import React, {useState} from 'react';
import s from './MainIcon.module.css';
import reactIcon from "./../../assets/images/reactIcon.png"
import {NavLink} from "react-router-dom";
import navIcon from "../../assets/images/nav.svg";

const MainIcon = () => {

    const openNav = () => {
        if(document.documentElement.getAttribute('nav') === 'none') {
            document.documentElement.setAttribute('nav', 'inline-block');
        }
        else {
            document.documentElement.setAttribute('nav', 'none');
        }
    }

    return (
        <div className={s.mainIcon}>
            <NavLink to="/profile/" >
                <img src={reactIcon} alt={""} className={s.logo}/>
            </NavLink>
            <p className={s.title}>GAZZATI <br/> SOCIAL NETWORK</p>
            <img src={navIcon} alt="" className={s.navIcon} onClick={openNav}/>
        </div>
    )
}

export default MainIcon;