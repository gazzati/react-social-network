import React, {FC} from 'react';
import s from "./Friends.module.css";
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";

type PropsType = {
    friend: any
    unfollowingInProgress: Array<number>
    unfollow: (userId: number) => void
}

let Friend: FC<PropsType> = ({friend, unfollowingInProgress, unfollow}) => {
    return (
        <div className={s.friend}>
            <div>
                <NavLink to={'profile/' + friend.id}>
                    <img src={friend.photos.small != null ? friend.photos.small : userPhoto}
                         className={s.photo} alt={""}/>
                </NavLink>
            </div>
            <div className={s.descriptionUser}>
                <div className={s.name}>{friend.name}</div>
                <div>{friend.status}</div>
            </div>

            <button disabled={unfollowingInProgress.some(id => id === friend.id)}
                    className={s.delete}
                    onClick={() => {
                        unfollow(friend.id)
                    }}>
                Delete
            </button>


        </div>)
}

export default Friend