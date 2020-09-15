import React, {useState, useEffect} from 'react';
import s from './ProfileInfo.module.css'

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const  onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onClick={activateEditMode}>
                    {props.status || ' '}</span>
            </div>
            }
            {editMode &&
            <div className={s.statusEdit}>
                <input onChange={onStatusChange} autoFocus={true}
                       onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;
