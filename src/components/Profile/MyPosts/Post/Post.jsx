import React from 'react';
import s from './Post.module.css';
import userPhoto from "../../../../assets/images/user.png";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={props.profile.photos.large || userPhoto} alt={""}/>
            {props.message}
            {props.likesCount} likes
        </div>
    )
}

export default Post;