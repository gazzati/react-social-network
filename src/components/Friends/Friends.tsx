import React, {FC} from 'react'
import s from "./Friends.module.css"
import Paginator from '../common/Paginator/Paginator'
import {UserType} from '../../types/types'
import Preloader from "../common/Preloader/Preloader";
import Friend from "./Friend";

type PropsType = {
    totalFriendsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    unfollowingInProgress: Array<number>
    unfollow: (userId: number) => void
    isFetching: boolean
}

let Friends: FC<PropsType> = (props) => {
    return <div className={s.friendsBlock}>
        {props.isFetching ? <Preloader/> : null}
        <div className={s.friends}>
            {props.users.map(f => f.followed && <Friend friend={f}
                                                        unfollowingInProgress={props.unfollowingInProgress}
                                                        unfollow={props.unfollow}
                                                        key={f.id}
                />
            )}
        </div>
        <div className={s.pag}>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       totalItemsCount={props.totalFriendsCount} pageSize={props.pageSize}/>
        </div>
    </div>
}

export default Friends