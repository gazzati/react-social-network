import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {logout} from "../../redux/auth-reducer";


const HeaderContainer = (props) => {

     if(props.profile){
    return <Header isAuth={props.isAuth} profile={props.profile} logout={props.logout}/>}
     else
     {
         return null
     }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {getUserProfile, logout})(HeaderContainer);