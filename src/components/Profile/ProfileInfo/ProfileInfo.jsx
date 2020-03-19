import React from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                <div>
                    {props.profile.fullName}
                    <ProfileStatus status={"hello"} />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;