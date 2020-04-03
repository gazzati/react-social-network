import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";
import s from './../../Login/Login.module.css';

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder,
                            name,
                            validators,
                            component,
                            props = {},
                            text = "",
                            classNames = []) => (
    <div className={classNames[0]}>
        <div className={classNames[1]}>
            <Field placeholder={placeholder} name={name}
                   validate={validators}
                   component={component}
                   {...props}
            />
        </div>
        <div className={classNames[2]}>{text}</div>
    </div>
)