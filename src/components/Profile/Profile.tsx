import React, {FC} from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import {ProfileType} from "../../types/types";

type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    savePhoto: (photo: any) => void
    status: string
    saveProfile: (a: any) => void
    updateStatus: (status: string) => void
    goToEditMode: (a: any) => void
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