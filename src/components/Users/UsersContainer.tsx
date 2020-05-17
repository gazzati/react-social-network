import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import {follow, unfollow, requestUsers, actions} from '../../redux/users-reducer';
import Users from './Users';
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";
import { UserType } from '../../types/types';
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number, term: string) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    resetCurrentPage: () => void
}

type OwnPropsType = { }

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const UsersContainer: React.FC<PropsType> = (props) => {
    let [searchRequest, setSearchRequest] = useState("");

    useEffect(() => {
        const {currentPage, pageSize} = props;
        props.getUsers(currentPage, pageSize, searchRequest);
    }, [searchRequest])

    const onPageChanged = (pageNumber: number) => {
        const {pageSize} = props;
        props.getUsers(pageNumber, pageSize, searchRequest);
    }

    const searchUsers = (newSearchRequest: string) => {
        setSearchRequest(newSearchRequest)
        props.resetCurrentPage()
    }

        return <>
            <Users totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   onPageChanged={onPageChanged}
                   users={props.users}
                   unfollow={props.unfollow}
                   follow={props.follow}
                   followingInProgress={props.followingInProgress}
                   isFetching={props.isFetching}
                   searchUsers={searchUsers}
            />
        </>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {follow, unfollow, getUsers: requestUsers, resetCurrentPage: actions.resetCurrentPage}),
    /*withAuthRedirect*/)(UsersContainer)