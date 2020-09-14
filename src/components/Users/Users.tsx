import React, {FC} from 'react'
import s from "./Users.module.css"
import User from './User'
import Paginator from '../common/Paginator/Paginator'
import {UserType} from '../../types/types'
import Preloader from "../common/Preloader/Preloader";
import SearchUsers, {SearchUsersValuesType} from "./SearchUsers";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    isFetching: boolean
    searchUsers: (newSearchRequest: string) => void
}

let Users: FC<PropsType> = (props) => {
    const onSearch = (values: SearchUsersValuesType) => {
        props.searchUsers(values.newSearchRequest);
    }

    return <div className={s.users}>
        {props.isFetching ? <span><Preloader/></span> : null}
        <div className={s.search}>
            <h3>Find other users</h3>
            <SearchUsers onSubmit={onSearch} />
        </div>
        <div className={s.usersBlock}>
            {props.users.map(u => <User user={u}
                                  followingInProgress={props.followingInProgress}
                                  unfollow={props.unfollow}
                                  follow={props.follow}
                                  key={u.id}
                />
            )}
        </div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/>
    </div>
}

export default Users
