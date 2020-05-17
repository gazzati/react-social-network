import React from 'react';
import Header, { PropsType } from "./Header";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

const HeaderContainer: React.FC<PropsType> = (props) => {

     if(props.profile){
    return <Header isAuth={props.isAuth} profile={props.profile} logout={props.logout}/>}
     else
     {
         return null
     }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {getUserProfile, logout})(HeaderContainer);