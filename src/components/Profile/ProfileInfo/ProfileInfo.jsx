import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://media.alienwarearena.com/media/plain-color-hd-wallpapers-851x315.jpg'/>
            </div>
            <div className={s.discriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;