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
    const openContacts = () => {
        document.getElementById('contacts').style.display = "block";
    }
    const closeContacts = () => {
        document.getElementById('contacts').style.display = "none";
    }
    return <span className={s.form}>
            <span className={s.info}>
                 <div className={s.name}>
                    {profile.fullName}
                 </div>
                <ProfileStatusWithHooks  status={status} updateStatus={updateStatus}/>
                <span className={s.contacts}>
                    <div className={s.contactsMenuName}
                         onClick={openContacts}
                         onDoubleClick={closeContacts}>
                        My contacts</div>
                    <div id="contacts" className={s.contactsMenu}>
                        {Object.keys(profile.contacts).map(key => {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                        })}
                    </div>
                </span>
            </span>
            <span className={s.description}>
                <div>
                     <div>•About me: </div>
                     <span className={s.tab}>{profile.aboutMe}</span>
                </div>
                <div>
                    <span>•Looking for a job:</span> {profile.lookingForAJob ? "yes" : "no"}
                 </div>
                {profile.lookingForAJob && <div>
                    <div>•My professional skills:</div> <span className={s.tab}>{profile.lookingForAJobDescription}</span></div>}
                {isOwner && <div>
                    <button className={s.edit} onClick={goToEditMode}>Edit info</button>
                </div>}
            </span>
        </span>
}

const Contact = ({contactTitle, contactValue}) => {
    if (contactValue) {
        return <div>{contactTitle}: <a className={s.contactsLink} href={contactValue}>{contactValue}</a></div>
    } else {
        return null
    }
}

export default ProfileInfo;



