import React from 'react';
import s from './Post.module.css';
import userPhoto from "../../../../assets/images/user.png";

const Post = (props) => {
    const onClick = () => {
        props.addLikes(props.id)
    }

    return (
        <div className={s.item}>
            <img className={s.img} src={userPhoto} alt={""}/>
            <div className={s.mes}>
                {props.message}
            </div>
            <span className={s.likes} onClick={onClick}>
                <span  className={s.count}>{props.likesCount + " "}</span>
                likes
            </span>
        </div>
    )
}

export default Post;