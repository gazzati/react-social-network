import React from 'react'
import Dialogs from "./Dialogs";
import {startDialog, sendMessage, getAllDialogs, getMessages} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        authorizedUserId: state.auth.id,
        isFetching: state.dialogsPage.isFetching,
    }
}

export default compose(
    connect(mapStateToProps, {
        getDialogs: startDialog,
        sendMessage: sendMessage,
        getAllDialogs: getAllDialogs,
        getMessages: getMessages
    }),
        withAuthRedirect) (Dialogs) as React.ComponentType;