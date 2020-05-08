import React from 'react';
import s from './Post.module.css';
import userPhoto from "../../../../assets/images/user.png";
import likeIcon from "../../../../assets/images/like.png";

const Post = (props) => {
    const onClick = () => {
        props.addLikes(props.id)
    }

    return (
        <div className={s.item}>
            <div className={s.user}>
                <img className={s.userPhoto} src={props.profile ? props.profile.photos.large : userPhoto} alt={""}/>
                <span className={s.name}>{props.profile.fullName}</span>
            </div>

            <div className={s.text}>
                {props.message && props.message}
            </div>
            <div className={s.likes} onClick={onClick}>
                <span className={s.likeCount}>{props.likesCount}</span>
                <img src={likeIcon} alt=""/>
            </div>


        </div>
    )
}

export default Post;