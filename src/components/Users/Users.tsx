import React, {FC} from 'react'
import s from "./Users.module.css"
import User from './User'
import Paginator from '../common/Paginator/Paginator'
import {UserType} from '../../types/types'
import Preloader from "../common/Preloader/Preloader";

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
}

let Users: FC<PropsType> = ({currentPage, totalUsersCount, pageSize,
                                onPageChanged,  users, isFetching,
                                ...props}) => {
    return <div className={s.users}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        {isFetching ? <Preloader/> : null}
        <div>
            {users.map(u => <User user={u}
                                  followingInProgress={props.followingInProgress}
                                  unfollow={props.unfollow}
                                  follow={props.follow}
                                  key={u.id}
                />
            )}
        </div>
    </div>
}

export default Users