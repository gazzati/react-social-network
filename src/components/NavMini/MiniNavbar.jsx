import React from 'react';
import s from '../Navbar/Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


const MiniNavbar = (props) => {
    return (
        <div className={s.miniNav}>

            <NavLink to="/settings" className={s.li} activeClassName={s.activeLi}>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                    <g transform="translate(-0.236)">
                        <g transform="translate(0.236)">
                            <path className="a"
                                  d="M17.924,10.973l-1.7-1.294a6.345,6.345,0,0,0,.04-.68,6.154,6.154,0,0,0-.04-.68l1.7-1.294a.8.8,0,0,0,.2-1.033L16.36,3.015a.829.829,0,0,0-1.022-.358l-2,.784a6.921,6.921,0,0,0-1.2-.68L11.824.69A.811.811,0,0,0,11.008,0H7.465A.809.809,0,0,0,6.65.684L6.345,2.762a7.134,7.134,0,0,0-1.2.68l-2.01-.786a.846.846,0,0,0-1.014.352L.349,5.989a.792.792,0,0,0,.2,1.039l1.7,1.294a5.78,5.78,0,0,0,0,1.358l-1.7,1.294a.8.8,0,0,0-.2,1.033l1.767,2.977a.828.828,0,0,0,1.022.358l2-.784a6.982,6.982,0,0,0,1.2.68l.3,2.07A.811.811,0,0,0,7.466,18h3.543a.81.81,0,0,0,.816-.684l.306-2.077a7.167,7.167,0,0,0,1.2-.681l2.01.786a.847.847,0,0,0,.3.056.817.817,0,0,0,.712-.407L18.131,12A.8.8,0,0,0,17.924,10.973ZM9.237,12a3,3,0,1,1,3.081-3A3.044,3.044,0,0,1,9.237,12Z"
                                  transform="translate(-0.236)"/>
                        </g>
                    </g>
                </svg>
            </NavLink>

            <NavLink to="/news" className={s.li} activeClassName={s.activeLi}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                    <path className="a"
                          d="M17.357,4.5H14.143V.643A.643.643,0,0,0,13.5,0H.643A.643.643,0,0,0,0,.643V15.429A2.571,2.571,0,0,0,2.571,18H15.429A2.571,2.571,0,0,0,18,15.429V5.143A.643.643,0,0,0,17.357,4.5ZM5.143,3.214H9A.643.643,0,0,1,9,4.5H5.143a.643.643,0,1,1,0-1.286Zm5.786,12.214H3.214a.643.643,0,1,1,0-1.286h7.714a.643.643,0,0,1,0,1.286Zm0-2.571H3.214a.643.643,0,1,1,0-1.286h7.714a.643.643,0,0,1,0,1.286Zm0-2.571H3.214A.643.643,0,0,1,3.214,9h7.714a.643.643,0,0,1,0,1.286Zm0-2.571H3.214a.643.643,0,1,1,0-1.286h7.714a.643.643,0,0,1,0,1.286Zm5.786,7.714a1.286,1.286,0,0,1-2.571,0V5.786h2.571v9.643Z"/>
                </svg>
            </NavLink>

            <NavLink to="/dialogs" className={s.li} activeClassName={s.activeLi}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                    <g transform="translate(-260 -207)">
                        <path className="a"
                              d="M15.525-.037H2.475A2.511,2.511,0,0,0,0,2.5v8.2a2.511,2.511,0,0,0,2.466,2.54v3.721l5.208-3.72h7.851A2.511,2.511,0,0,0,18,10.7V2.5a2.511,2.511,0,0,0-2.475-2.54ZM13.182,9.49H4.818V8.408h8.365Zm0-2.31H4.818V6.1h8.365Zm0-2.31H4.818V3.788h8.365Zm0,0"
                              transform="translate(260 207.037)"/>
                    </g>
                </svg>
            </NavLink>

            <NavLink to="/users" className={s.li} activeClassName={s.activeLi}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 15">
                    <g transform="translate(-260 -323)">
                        <g transform="translate(274.01 330.974)">
                            <path className="a"
                                  d="M15.4,9.609H14.01a3.621,3.621,0,0,1,.219,1.245v5.261a1.551,1.551,0,0,1-.089.52h2.3A1.561,1.561,0,0,0,18,15.075V12.207A2.6,2.6,0,0,0,15.4,9.609Z"
                                  transform="translate(-14.01 -9.609)"/>
                        </g>
                        <g transform="translate(260 330.974)">
                            <path className="a"
                                  d="M3.771,10.854A3.621,3.621,0,0,1,3.99,9.609H2.6a2.6,2.6,0,0,0-2.6,2.6v2.868a1.561,1.561,0,0,0,1.559,1.559h2.3a1.552,1.552,0,0,1-.089-.52Z"
                                  transform="translate(0 -9.609)"/>
                        </g>
                        <g transform="translate(264.81 329.621)">
                            <path className="a"
                                  d="M10.591,8.255H7.409a2.6,2.6,0,0,0-2.6,2.6v5.261a.52.52,0,0,0,.52.52h7.34a.52.52,0,0,0,.52-.52V10.854A2.6,2.6,0,0,0,10.591,8.255Z"
                                  transform="translate(-4.81 -8.255)"/>
                        </g>
                        <g transform="translate(265.875 323)">
                            <path className="a" d="M9,1.365A3.124,3.124,0,1,0,12.125,4.49,3.128,3.128,0,0,0,9,1.365Z"
                                  transform="translate(-5.875 -1.365)"/>
                        </g>
                        <g transform="translate(261.176 325.839)">
                            <path className="a"
                                  d="M3.513,4.278A2.336,2.336,0,1,0,5.85,6.615,2.34,2.34,0,0,0,3.513,4.278Z"
                                  transform="translate(-1.176 -4.278)"/>
                        </g>
                        <g transform="translate(272.15 325.839)">
                            <path className="a"
                                  d="M14.487,4.278a2.337,2.337,0,1,0,2.337,2.337A2.34,2.34,0,0,0,14.487,4.278Z"
                                  transform="translate(-12.15 -4.278)"/>
                        </g>
                    </g>
                </svg>
            </NavLink>


            <NavLink to="/profile" className={s.li} activeClassName={s.activeLi}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.998 18">
                    <g transform="translate(-260.001 -148)">
                        <path className="a"
                              d="M17.515,7.829h0L10.171.486a1.657,1.657,0,0,0-2.344,0L.489,7.824l-.007.008a1.656,1.656,0,0,0,1.1,2.823l.051,0h.293v5.4A1.942,1.942,0,0,0,3.867,18H6.74a.527.527,0,0,0,.527-.527V13.236a.886.886,0,0,1,.885-.885H9.846a.886.886,0,0,1,.885.885v4.236a.527.527,0,0,0,.527.527h2.873a1.942,1.942,0,0,0,1.94-1.939v-5.4h.271a1.657,1.657,0,0,0,1.173-2.828Zm0,0"
                              transform="translate(260.001 148)"/>
                    </g>
                </svg>
            </NavLink>

        </div>
    )
}

export default connect(mapStateToProps, {logout})(MiniNavbar);