import React, {FC} from 'react'
import Preloader from "../common/Preloader/Preloader"
import User from "./User"
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../types/types";

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
                                onPageChanged, isFetching, users,
                                ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            {isFetching ? <Preloader/> : null}
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