import React from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileInfo = (props) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={s.discriptionBlock}>
            <div className={s.photo}>
                {props.isOwner &&
                <input id="upl" type={"file"} className={s.button} onChange={onMainPhotoSelected}/>}
                <label for="upl">
                    <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt={""}/>
                </label>
            </div>
            <div className={s.discription}>
                <div className={s.name}>
                    {props.profile.fullName}
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo;



