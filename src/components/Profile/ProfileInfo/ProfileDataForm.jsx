import React from "react";
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileDataForm = ({profile, handleSubmit, error, status, updateStatus}) => {
    return <form className={s.form} onSubmit={handleSubmit}>
        <span className={s.info}>
            <div className={s.name}>
                {createField("Full name", "fullName", [], Input)}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div>
                <b>About me</b>:
                {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skills</b>:
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div><button className={s.save}>save</button></div>
            {error && <div className={style.formSummaryError}>{error}</div>}
        </span>
        <span className={s.contacts}>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
        </span>
    </form>

}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;