import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

type MapPropsType = {
    isAuth: boolean
}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    function RedirectComponent(props: MapPropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to="/login"/>;
        return <WrappedComponent { ...restProps as WCP}/>
    }

    let ConnectedAuthRedirectComponent = connect<MapPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)
    (RedirectComponent)

    return ConnectedAuthRedirectComponent;
}