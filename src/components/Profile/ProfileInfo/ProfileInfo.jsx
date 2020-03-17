import React from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {
    return (
        <div>
            {/* <div className={s.background}>
                <img src='http://spbvetro.ru/wp-content/gallery/goroda/1346750761_3-017x.jpg'/>
            </div>*/}
            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                <div>
                    {props.profile.fullName}
                    {props.profile.aboutMe}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;