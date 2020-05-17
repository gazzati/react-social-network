import React  from 'react';
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
type ThisState = {
    editMode:  boolean
}

class ProfileContainer extends React.Component<PropsType, ThisState> {
    constructor(props: any) {
        super(props);
        this.state = {editMode: false};
        this.goToEditMode = this.goToEditMode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.exitOfEditMode = this.exitOfEditMode.bind(this);
    }

    exitOfEditMode() {
        this.setState({editMode: false})
    }

    goToEditMode() {
        this.setState({editMode: true})
    }

    onSubmit(formData: ProfileType) {
        // todo: remove then
        this.props.saveProfile(formData).then(
            () => this.setState({editMode: false})
        )
    }
    refreshProfile() { //общая часть didMount и didUpdate
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }

        if(!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                {this.props.isFetching && <Preloader/>}
                {
                    this.state.editMode ?

                        <ProfileEditForm
                                        initialValues={this.props.profile as ProfileType}
                                        profile={this.props.profile as ProfileType}
                                        onSubmit={this.onSubmit}
                                        savePhoto={this.props.savePhoto}
                                        exitOfEditMode={this.exitOfEditMode}
                                        isOwner={!this.props.match.params.userId}/>
                        : <Profile {...this.props}

                                   isOwner={!this.props.match.params.userId}
                                   profile={this.props.profile}
                                   status={this.props.status}
                                   updateStatus={this.props.updateStatus}
                                   goToEditMode={this.goToEditMode}
                        />
                }
            </div>
        )
    }
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
