import React from 'react'
import Dialogs from "./Dialogs";
import {actions} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, {
        sendMessage: actions.sendMessage
    }),
        withAuthRedirect) (Dialogs) as React.ComponentType;