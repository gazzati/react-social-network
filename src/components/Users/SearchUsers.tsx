import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from '../common/FormsControls/FormsControls';
import s from "./Users.module.css";

type PropsType = {}

export type SearchUsersValuesType = {
    newSearchRequest: string
}

type SearchUsersValuesTypeKeys = GetStringKeys<SearchUsersValuesType>

const SearchUsers: React.FC<InjectedFormProps<SearchUsersValuesType, PropsType> & PropsType> = (props) => {

    let handleKeyDown = (e: any, cb: any) => {
        if (e.key === 'Enter' && e.shiftKey === false) {
            e.preventDefault();
            cb();
        }
    };

    return (
        <form className={s.form} onSubmit={props.handleSubmit} onKeyDown={(e) => handleKeyDown(e, props.handleSubmit)}>
            {createField<SearchUsersValuesTypeKeys>(
                "Enter your request...",
                'newSearchRequest',
                [],
                Input, {}, {className: "searchArea"})}
            <button className={s.button}>Search</button>
        </form>
    )
}

export default reduxForm<SearchUsersValuesType, PropsType>({form: 'users-search'})(SearchUsers)
