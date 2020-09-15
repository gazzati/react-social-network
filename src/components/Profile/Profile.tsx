import React, {FC} from 'react';
import s from './ProfileInfo/ProfileInfo.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";

type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    savePhoto: (photo: any) => void
    status: string
    saveProfile: (profile: ProfileType) => Promise<any>
    updateStatus: (status: string) => void
    goToEditMode: () => void
}

const Profile: FC<PropsType> = (props) => {
    if (!props.profile) {
        return null
    }
    return (
        <div className={s.profile} >
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         goToEditMode={props.goToEditMode}
                         />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;
