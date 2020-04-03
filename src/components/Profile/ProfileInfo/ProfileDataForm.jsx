import React from "react";
import s from './ProfileInfo.module.css';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Field from "redux-form/lib/Field";

const ProfileDataForm = ({profile, handleSubmit, error, status, updateStatus}) => {
    return <form className={s.form} onSubmit={handleSubmit}>
        <span className={s.info}>
            <div className={s.name}>
                {createField("Full name", "fullName", [], Input)}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div>
                <div>About me:</div>
                {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <div>Looking for a job:</div> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <div>My professional skills:</div>
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div><button className={s.save}>save</button></div>
            {error && <div className={style.formSummaryError}>{error}</div>}
        </span>
        <div>
            My contacts: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <div className={s.contactsEdit}>
                        <div className={s.contactKey}>{key}:</div>
                        <div className={s.contactValue}>{createField("http://" + key + ".com", "contacts." + key, [], Input)}</div>
                    </div>
                </div>
            })}
        </div>
    </form>

}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;