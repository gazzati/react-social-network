import React, {useState} from 'react'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataForm from './ProfileEditForm.jsx'
import vk from '../../../assets/images/vk.svg'
import instagram from '../../../assets/images/instagram.svg'
import skype from '../../../assets/images/skype.svg'
import twitter from '../../../assets/images/twitter.svg'
import youtube from '../../../assets/images/youtube.svg'
import facebook from '../../../assets/images/facebook.svg'
import {GithubPicker} from 'react-color'

const ProfileInfo = ({profile, status, updateStatus, isOwner, goToEditMode}) => {

    let [colorMode, setColorMode] = useState(false);

    const openColorWindow = () => {
        setColorMode(!colorMode)
    };

    const closeColorWindow = () => {
        setColorMode(false)
    };

    const changeColor = (color) => {
        document.documentElement.style.setProperty('--color-block', `${color.hex}`);
        localStorage.setItem('colorBlock', String(color.hex))
    }


    return (
        <div className={s.infoBlock} onDoubleClick={closeColorWindow}>
            {colorMode &&
            <span className={s.chooserColor}>
                        <GithubPicker onChange={changeColor}
                                      width={'215px'}
                                      colors={['#d435b7', '#ff2600', '#ffd900', '#65d435', '#35d4cf',
                                          '#359ad4', '#6d57f6', '#3827a0']}/>
                    </span>}
            <div className={s.mainInfo}>
                {/*<input onChange={changeColor} type="color" id="color"/>*/}
                <label className={s.colorBlock} onClick={openColorWindow}>
                </label>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt={""}/>
                <div className={s.name}>
                    {profile.fullName}
                </div>
                <div className={s.status}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                {isOwner && <button className={s.edit} onClick={goToEditMode}>Edit my profile</button>}
            </div>
            {0
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={1}
                                   status={status} updateStatus={updateStatus}/>
                : <ProfileData profile={profile}/>}
        </div>
    )
}

const ProfileData = ({profile}) => {
    return <div className={s.description}>
        <div>
            <p>About me</p>
            <span>{profile.aboutMe}</span>
        </div>

        {profile.lookingForAJob &&
        <div>
            <p>Skills</p>
            <span>
                {profile.lookingForAJobDescription}
            </span>
        </div>}

        <div className={s.contactsList}>
            {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
        </div>


    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    if (contactValue) {
        return (
            <div className={s.contacts}>
                {contactTitle === 'github' && contactValue !== '' &&
                <a href={contactValue} target="_blank">
                    <img src={skype} alt=""/>
                    <p>{contactValue}</p>
                </a>}

                {contactTitle === 'vk' && contactValue !== '' &&
                <a href={contactValue} target="_blank">
                    <img src={vk} alt=""/>
                    <p>{contactValue}</p>
                </a>}

                {contactTitle === 'facebook' && contactValue !== '' &&
                <a href={contactValue} target="_blank">
                    <img src={facebook} alt=""/>
                    <p>{contactValue}</p>
                </a>}

                {contactTitle === 'instagram' && contactValue !== '' &&
                <a href={contactValue} target="_blank">
                    <img src={instagram} alt=""/>
                    <p>{contactValue}</p>
                </a>}

                {contactTitle === 'twitter' && contactValue !== '' &&
                <a href={contactValue} target="_blank">
                    <img src={twitter} alt=""/>
                    <p>{contactValue}</p>
                </a>}

                {contactTitle === 'youtube' && contactValue !== '' &&
                <a href={contactValue} target="_blank">
                    <img src={youtube} alt=""/>
                    <p>{contactValue}</p>
                </a>}

            </div>
        )
    } else {
        return null
    }
}


/*{Object.keys(profile.contacts).map(key => {
    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
})}*/
export default ProfileInfo;



