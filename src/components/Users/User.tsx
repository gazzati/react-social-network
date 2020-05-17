import React, {FC} from 'react';
import s from "./Users.module.css";
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";

type PropsType = {
    user: any
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const User: FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.userContainer}>
            <div className={s.user}>
                <NavLink to={'profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                         className={s.photo} alt={""}/>
                </NavLink>
                <div className={s.descriptionUser}>
                    <div className={s.name}>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={s.fol}>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={s.unfollow}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>
                            Unfollow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={s.follow}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>
                            Follow</button>}
                </div>
            </div>
        </div>)
}

export default User