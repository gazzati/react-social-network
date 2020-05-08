import React, {FC} from 'react'
import s from "./Friends.module.css"
import Friend from './Friend'
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

let Friends: FC<PropsType> = ({
                                  currentPage, totalUsersCount, pageSize,
                                  onPageChanged, users, isFetching,
                                  ...props
                              }) => {
    return <div className={s.users}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                                  totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        {isFetching ? <Preloader/> : null}
        <div>
            {users.map(u => u.followed && <Friend user={u}
                                                  followingInProgress={props.followingInProgress}
                                                  unfollow={props.unfollow}
                                                  follow={props.follow}
                                                  key={u.id}
                />
            )}
        </div>
    </div>
}

export default Friends