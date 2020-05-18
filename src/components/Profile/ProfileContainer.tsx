import React, {useEffect, useState} from 'react';
import Profile from "./Profile";
import ProfileEditForm from "./ProfileInfo/ProfileEditForm";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";
import Preloader from "../common/Preloader/Preloader";

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (photo: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

type PathParamsType = {
    userId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>

const ProfileContainer: React.FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false);

    const exitOfEditMode = () => {
        setEditMode(false)
    }

    const goToEditMode = () => {
        setEditMode(true)
    }

    const onSubmit = (formData: ProfileType) => {
        // todo: remove then
        props.saveProfile(formData).then(
            () => exitOfEditMode
        )
    }

    useEffect(() => {
        let userId: number | null = +props.match.params.userId;
        if (!userId) {
            userId = props.authorizedUserId;
            if (!userId) {
                props.history.push("/login")
            }
        }

        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            props.getUserProfile(userId)
            props.getStatus(userId)
        }
    }, [props.authorizedUserId])


    return (
        <div>
            {props.isFetching && <Preloader/>}
            {
                editMode ?

                    <ProfileEditForm
                        initialValues={props.profile as ProfileType}
                        profile={props.profile as ProfileType}
                        onSubmit={onSubmit}
                        savePhoto={props.savePhoto}
                        exitOfEditMode={exitOfEditMode}
                        isOwner={!props.match.params.userId}/>
                    : <Profile {...props}

                               isOwner={!props.match.params.userId}
                               profile={props.profile}
                               status={props.status}
                               updateStatus={props.updateStatus}
                               goToEditMode={goToEditMode}
                    />
            }
        </div>
    )

}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    isFetching: state.profilePage.isFetching
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect)(ProfileContainer) as React.ComponentType;
