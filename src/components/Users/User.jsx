import React from 'react';
import s from "./Users.module.css";
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.user}>
            <div className={s.photo}>
                <NavLink to={'profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                         className={s.photo} alt={""}/>
                </NavLink>
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
            <div className={s.discription}>
                <div className={s.name}>{user.name}</div>
                <div>{user.status}</div>
            </div>
        </div>)

}

export default User