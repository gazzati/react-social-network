import React, {FC} from 'react';
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
}

const Profile: FC<PropsType> = (props) => {
    if (!props.profile) {
       return <Preloader />
    }
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}
                         />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;