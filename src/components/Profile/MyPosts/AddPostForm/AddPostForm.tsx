import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from '../../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../../../utils/validators/validators';
import s from "../MyPosts.module.css";

type PropsType = {}

export type AddPostFormValuesType = {
    newPostText: string
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const maxLength50 = maxLengthCreator(50);

const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {

    let handleKeyDown = (e: any, cb: any) => {
        if (e.key === 'Enter' && e.shiftKey === false) {
            e.preventDefault();
            cb();
        }
    };

    return (
        <form onSubmit={props.handleSubmit}
              onKeyDown={(e) => handleKeyDown(e, props.handleSubmit)}>
            <div className={s.form} >
                { createField<AddPostFormValuesTypeKeys>(
                    "Enter your post...",
                    'newPostText',
                    [required, maxLength50],
                    Input, {}, {className: "areaPosts"}) }

                <button className={s.button}>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType>({form: 'profile-add-post'})(AddNewPostForm)
