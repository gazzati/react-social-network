import React  from 'react';
import Profile from "./Profile";
import ProfileEditForm from "./ProfileInfo/ProfileEditForm";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";
import Preloader from "../common/Preloader/Preloader";

type MapStatePropsType = {
    authorizedUserId: number | null
    profile: ProfileType | null
    status: string
    isAuth: boolean
    isFetching: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (photo: any) => void
    saveProfile: (profile: ProfileType) => any
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    constructor(props: any) {
        super(props);
        this.state = {editMode: false as boolean};
        this.goToEditMode = this.goToEditMode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.exitOfEditMode = this.exitOfEditMode.bind(this);
    }

    checkState() {
        // @ts-ignore
        return this.state.editMode
    }

    exitOfEditMode() {
        this.setState({editMode: false})
    }

    goToEditMode() {
        this.setState({editMode: true})
    }

    onSubmit(formData: any) {
        this.props.saveProfile(formData).then(
            () => this.setState({editMode: false})
        )
    }
    refreshProfile() { //общая часть didMount и didUpdate
        // @ts-ignore
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                // @ts-ignore
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: any) {
        // @ts-ignore
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <div>
                {this.props.isFetching && <Preloader/>}
                {
                    this.checkState() ?

                        <ProfileEditForm
                            // @ts-ignore
                                        initialValues={this.props.profile}
                                        profile={this.props.profile}
                                        onSubmit={this.onSubmit}
                                        savePhoto={this.props.savePhoto}
                                        exitOfEditMode={this.exitOfEditMode}
                            // @ts-ignore
                                        isOwner={!this.props.match.params.userId}/>
                        : <Profile {...this.props}
                            // @ts-ignore
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


let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    isFetching: state.profilePage.isFetching
})


export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect)(ProfileContainer);
