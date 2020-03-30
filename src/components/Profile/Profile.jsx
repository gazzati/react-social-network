import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (profile, status, updateStatus, isOwner, savePhoto) => {
    if (!profile) {
       return <Preloader />
    }
    return (
        <div>
            <ProfileInfo isOwner={isOwner}
                         savePhoto={savePhoto}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;