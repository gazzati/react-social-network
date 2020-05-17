import React from 'react';
import s from './MiniNavbar.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


const MiniNavbar = () => {
    return (
        <span className="miniNavbar">
        <div className={s.miniNav}>

             <NavLink to="/news" className={s.li} activeClassName={s.activeLi}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                    <path className="a"
                          d="M17.357,4.5H14.143V.643A.643.643,0,0,0,13.5,0H.643A.643.643,0,0,0,0,.643V15.429A2.571,2.571,0,0,0,2.571,18H15.429A2.571,2.571,0,0,0,18,15.429V5.143A.643.643,0,0,0,17.357,4.5ZM5.143,3.214H9A.643.643,0,0,1,9,4.5H5.143a.643.643,0,1,1,0-1.286Zm5.786,12.214H3.214a.643.643,0,1,1,0-1.286h7.714a.643.643,0,0,1,0,1.286Zm0-2.571H3.214a.643.643,0,1,1,0-1.286h7.714a.643.643,0,0,1,0,1.286Zm0-2.571H3.214A.643.643,0,0,1,3.214,9h7.714a.643.643,0,0,1,0,1.286Zm0-2.571H3.214a.643.643,0,1,1,0-1.286h7.714a.643.643,0,0,1,0,1.286Zm5.786,7.714a1.286,1.286,0,0,1-2.571,0V5.786h2.571v9.643Z"/>
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

            <NavLink to="/dialogs" className={s.li} activeClassName={s.activeLi}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                    <g transform="translate(-260 -207)">
                        <path className="a"
                              d="M15.525-.037H2.475A2.511,2.511,0,0,0,0,2.5v8.2a2.511,2.511,0,0,0,2.466,2.54v3.721l5.208-3.72h7.851A2.511,2.511,0,0,0,18,10.7V2.5a2.511,2.511,0,0,0-2.475-2.54ZM13.182,9.49H4.818V8.408h8.365Zm0-2.31H4.818V6.1h8.365Zm0-2.31H4.818V3.788h8.365Zm0,0"
                              transform="translate(260 207.037)"/>
                    </g>
                </svg>
            </NavLink>

            <NavLink to="/friends" className={s.li} activeClassName={s.activeLi}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 18">
                    <g transform="translate(-261 -264)">
                        <g transform="translate(261 264)">
                            <path className="a"
                                  d="M7.386,8.671A4.182,4.182,0,0,0,10.446,7.4a4.2,4.2,0,0,0,1.267-3.065A4.2,4.2,0,0,0,10.446,1.27,4.183,4.183,0,0,0,7.386,0,4.182,4.182,0,0,0,4.327,1.27,4.2,4.2,0,0,0,3.06,4.335,4.2,4.2,0,0,0,4.327,7.4a4.183,4.183,0,0,0,3.059,1.27Zm0,0"/>
                            <path className="a"
                                  d="M14.964,13.841a10.72,10.72,0,0,0-.146-1.137,8.97,8.97,0,0,0-.279-1.144,5.652,5.652,0,0,0-.47-1.066,4.024,4.024,0,0,0-.708-.924,3.121,3.121,0,0,0-1.017-.64,3.512,3.512,0,0,0-1.3-.235,1.317,1.317,0,0,0-.7.3c-.211.138-.458.3-.733.473a4.2,4.2,0,0,1-.949.418,3.68,3.68,0,0,1-2.321,0,4.189,4.189,0,0,1-.948-.418c-.273-.175-.52-.334-.734-.474a1.315,1.315,0,0,0-.7-.3,3.507,3.507,0,0,0-1.3.236,3.119,3.119,0,0,0-1.017.64,4.024,4.024,0,0,0-.708.924,5.663,5.663,0,0,0-.47,1.067A8.991,8.991,0,0,0,.182,12.7a10.682,10.682,0,0,0-.146,1.138C.012,14.186,0,14.543,0,14.9a2.991,2.991,0,0,0,.887,2.261A3.19,3.19,0,0,0,3.171,18h8.657a3.189,3.189,0,0,0,2.285-.834A2.989,2.989,0,0,0,15,14.9c0-.363-.012-.72-.036-1.063Zm0,0"
                                  transform="translate(0)"/>
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
        </span>
    )
}

export default connect(mapStateToProps, {logout})(MiniNavbar);