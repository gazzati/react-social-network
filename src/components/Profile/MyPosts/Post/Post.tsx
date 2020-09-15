import React from 'react';
import s from './Post.module.css';
import userPhoto from "../../../../assets/images/user.png";
import likeIcon from "../../../../assets/images/like.png";
import {ProfileType} from "../../../../types/types";

type PropsType = {
    message: string
    likesCount: number
    key: number
    id: number
    profile: ProfileType | null
    addLikes: (id: number) => void
}

const Post: React.FC<PropsType>= (props) => {
    const onClick = () => {
        props.addLikes(props.id)
    }

    return (
        <div className={s.item}>
            <div className={s.user}>
                <img className={s.userPhoto} src={props.profile && props.profile.photos.large || userPhoto} alt={""}/>
                <span className={s.name}>{props.profile && props.profile.fullName}</span>
            </div>
            <div className={s.bottomBlock}>
                <div className={s.text}>
                    {props.message && props.message}
                </div>
                <div className={s.likes} onClick={onClick}>
                    <span className={s.likeCount}>{props.likesCount}</span>
                    <img src={likeIcon} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Post;
