import React, {useState} from 'react'
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import vk from '../../../assets/images/contactsIcons/vk.svg'
import instagram from '../../../assets/images/contactsIcons/instagram.svg'
import github from '../../../assets/images/contactsIcons/github.svg'
import twitter from '../../../assets/images/contactsIcons/twitter.svg'
import youtube from '../../../assets/images/contactsIcons/youtube.svg'
import facebook from '../../../assets/images/contactsIcons/facebook.svg'
import {GithubPicker} from 'react-color'
import {ContactsType, ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, goToEditMode}) => {

    let [colorMode, setColorMode] = useState(false);

    const openColorWindow = () => {
        setColorMode(!colorMode)
    };

    const closeColorWindow = () => {
        setColorMode(false)
    };

    const changeColor = (color: any) => {
        document.documentElement.style.setProperty('--color-block', `${color.hex}`);
        localStorage.setItem('colorBlock', String(color.hex))
        setColorMode(false)
    }

    return (
        <div className={s.infoBlock} onDoubleClick={closeColorWindow}>
            {colorMode &&
            <div className={s.chooserColor}>
                <GithubPicker onChange={changeColor}
                              width={'215px'}
                              colors={['#d435b7', '#ff2600', '#ffd900', '#65d435', '#61dafb',
                                  '#359ad4', '#6d57f6', '#3827a0']}/>
            </div>}
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
            <ProfileData profile={profile}/>
        </div>
    )
}

type ProfileDataPropsType = {
    profile: ProfileType
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile}) => {
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
            {Object
                .keys(profile.contacts)
                .map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
                })}
        </div>


    </div>
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    if (contactValue) {
        return (
            <div className={s.contacts}>
                {contactTitle === 'github' && contactValue !== '' &&
                <a href={contactValue} target="_blank" rel="noopener noreferrer">
                    <img src={github} className={s.gitHubIcon} alt=""/>
                    <p>{contactValue}</p>
                </a>}

                {contactTitle === 'vk' && contactValue !== '' &&
                <a href={contactValue} target="_blank" rel="noopener noreferrer">
                    <img src={vk} className={s.vkIcon} alt=""/>
                    <p>{contactValue}</p>
                </a>}

                {contactTitle === 'facebook' && contactValue !== '' &&
                <a href={contactValue} target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt=""/>
                    <p>{contactValue}</p>
                </a>}

                {contactTitle === 'instagram' && contactValue !== '' &&
                <a href={contactValue} target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt=""/>
                    <p>{contactValue}</p>
                </a>}

                {contactTitle === 'twitter' && contactValue !== '' &&
                <a href={contactValue} target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt=""/>
                    <p>{contactValue}</p>
                </a>}

                {contactTitle === 'youtube' && contactValue !== '' &&
                <a href={contactValue} target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt=""/>
                    <p>{contactValue}</p>
                </a>}

            </div>
        )
    } else {
        return null
    }
}

export default ProfileInfo;



