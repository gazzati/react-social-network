import React from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    return (
        <div>
            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
                <div>
                    {props.profile.fullName}
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                    {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;