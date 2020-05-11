import React from "react";
import s from './ProfileEditForm.module.css';
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import userPhoto from "../../../assets/images/user.png";


const ProfileEditForm = ({handleSubmit, profile, error, isOwner, savePhoto, exitOfEditMode}) => {

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }


    return (
        <form className={s.editInfoBlock} onSubmit={handleSubmit}>
            <span className={s.photoName}>
                <h3>Edit your profile</h3>
                {isOwner &&
                <span className={s.upload}>
                    <p>Edit photo</p>
                    <p className={s.secondP}>Upload new photo</p>
                    <input  id="upl" type={"file"} onChange={onMainPhotoSelected}/>
                    <label htmlFor="upl" className={s.upload}>Upload</label>
                </span> }
                <span className={s.photos}>
                    <img src={profile.photos.large || userPhoto} className={s.largePhoto} alt={""}/>
                    <img src={profile.photos.large || userPhoto} className={s.smallPhoto} alt={""}/>
                </span>
                <div className={s.name}>
                    <p>Edit name</p>
                    {createField("Full name", "fullName", [], Input, {'height': '40px', 'width': '100%'})}

                </div>
            </span>

            <span className={s.aboutMeSkills}>
                <h3>Edit information</h3>
                <span className={s.aboutMe}>
                    <p>Edit info</p>
                    {createField("About me", "aboutMe", [], Input, {'height': '40px', 'width': '100%'})}
                </span>

                <span className={s.checkbox}>
                    <p>Do you want a find a job?</p>
                    <span>
                        {createField("", "lookingForAJob", [], Input, {
                        }, {type: "checkbox"})}
                    </span>
                </span>

                <span className={s.skills}>
                    <p>Edit skills</p>
                    {createField("My professional skills", "lookingForAJobDescription", [], Input, {
                        'height': '40px',
                        'width': '100%'
                    },)}
                </span>

            </span>

            <div className={s.contacts}>
                <h3>Edit contacts</h3>
                <span className={s.cont}>
                    {Object.keys(profile.contacts).map(key => {
                        if (key !== 'website' & key !== 'mainLink')
                            return <div key={key}>
                                <div className={s.contactKey}>{key}</div>
                                <div
                                    className={s.contactValue}>
                                    {createField("http://" + key + ".com", "contacts." + key, [], Input, {
                                        'height': '40px',
                                        'width': '80%'
                                    })}

                                </div>
                            </div>
                        else
                            return null
                    })}
                </span>

                    <div className={s.buttons}>
                        <button onClick={exitOfEditMode} className={s.cancel}>Cancel</button>
                        <button className={s.save}>Save changes</button>
                    </div>
                {error && <div className={style.formSummaryError}>{error}</div>}
            </div>

        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileEditForm);

export default ProfileDataFormReduxForm;