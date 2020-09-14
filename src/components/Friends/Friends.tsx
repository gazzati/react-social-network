import React, {FC} from 'react'
import s from "./Friends.module.css"
import Paginator from '../common/Paginator/Paginator'
import {UserType} from '../../types/types'
import Preloader from "../common/Preloader/Preloader";
import Friend from "./Friend";
import {Redirect} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";

type PropsType = {
    totalFriendsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    unfollowingInProgress: Array<number>
    unfollow: (userId: number) => void
    isFetching: boolean
    startDialog: (userId: number) => void
    getAllDialogs: () => void
    getMessages: (userId: number) => void
}

let Friends: FC<PropsType> = (props) => {
    const onSendMessage = (id: number) => {
        props.startDialog(id)
        props.getAllDialogs()
        props.getMessages(id)
    }
    return <div className={s.friendsBlock}>
        {props.isFetching ? <Preloader/> : null}
        <div className={s.friends}>
            {props.users.map(f => f.followed && <Friend friend={f}
                                                        unfollowingInProgress={props.unfollowingInProgress}
                                                        unfollow={props.unfollow}
                                                        key={f.id}
                                                        onSendMessage={onSendMessage}
                />
            )}
        </div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalItemsCount={props.totalFriendsCount} pageSize={props.pageSize}/>

    </div>
}

export default Friends
