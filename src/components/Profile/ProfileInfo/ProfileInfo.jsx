import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import ProfileDataForm from "./ProfileDataForm.jsx";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )
    }

    return (
        <div className={s.discriptionBlock}>
            <div className={s.photo}>
                {isOwner &&
                <input id="upl" type={"file"} className={s.button} onChange={onMainPhotoSelected}/>}
                <label htmlFor="upl">
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt={""}/>
                </label>
            </div>
            <div className={s.discription}>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}
                                       status={status} updateStatus={updateStatus}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}
                                   status={status} updateStatus={updateStatus}/>}

            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode, status, updateStatus}) => {
    return <div className={s.form}>
        <span className={s.info}>
            <div className={s.name}>
                {profile.fullName}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                 <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
             </div>
            {profile.lookingForAJob && <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>}
            {isOwner && <div>
                <button className={s.edit} onClick={goToEditMode}>edit</button>
            </div>}
        </span>
        <span className={s.contacts}>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
        </span>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;



