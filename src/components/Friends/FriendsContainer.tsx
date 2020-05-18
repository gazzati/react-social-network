import React from 'react'
import {connect} from 'react-redux';
import { requestFriends, unfollow } from '../../redux/friends-reducer';
import Friends from './Friends';
import {compose} from "redux";
import { UserType } from '../../types/types';
import {AppStateType} from "../../redux/redux-store";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {actions, getAllDialogs, getMessages, startDialog} from "../../redux/dialogs-reducer";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalFriendsCount: number
    friends: Array<UserType>
    unfollowingInProgress: Array<number>

}

type MapDispatchPropsType = {
    getFriends: (currentPage: number, pageSize: number) => void
    unfollow: (userId: number) => void
    startDialog: (userId: number) => void
    getAllDialogs: () => void
    getMessages: (userId: number) => void
}

type OwnPropsType = { }


type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class FriendsContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getFriends(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.getFriends(pageNumber, pageSize);
    }

    render() {
        return <>
            <Friends totalFriendsCount={this.props.totalFriendsCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     users={this.props.friends}
                     unfollow={this.props.unfollow}
                     unfollowingInProgress={this.props.unfollowingInProgress}
                     isFetching={this.props.isFetching}
                     startDialog={this.props.startDialog}
                     getAllDialogs={this.props.getAllDialogs}
                     getMessages={this.props.getMessages}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        friends: state.friends.friends,
        pageSize: state.friends.pageSize,
        totalFriendsCount: state.friends.totalFriendsCount,
        currentPage: state.friends.currentPage,
        isFetching: state.friends.isFetching,
        unfollowingInProgress: state.friends.unfollowingInProgress
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {unfollow, getFriends: requestFriends, startDialog: startDialog,
        getAllDialogs: getAllDialogs, getMessages: getMessages}),
    withAuthRedirect)(FriendsContainer) as React.ComponentType