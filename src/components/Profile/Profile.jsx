import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import * as axios from "axios";
import preloader from "../../assets/images/preloader.svg";

const Profile = (props) => {
    if (!props.profile) {
       return <Preloader />
    }
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;