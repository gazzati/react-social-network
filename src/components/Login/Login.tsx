import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"
import s from './../Login/Login.module.css';
import {AppStateType} from "../../redux/redux-store";

type LoginFormOwnProps = {
    captchaUrl: string | null

}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {

    let handleKeyDown =  (e: any, cb: any) => {
        if (e.key === 'Enter' && e.shiftKey === false) {
            e.preventDefault();
            cb();
        }
    };
    return (
        <form onSubmit={handleSubmit} onKeyDown={(e) => handleKeyDown(e, handleSubmit)}>
            {createField<LoginFormValuesTypeKeys>(
                "Email",
                "email",
                [],
                Input,
                {'height': '30px', 'width': '200px'})}
            {createField<LoginFormValuesTypeKeys>(
                "Password",
                "password",
                [],
                Input,
                {'height': '30px', 'width': '200px', 'margin-top': '10px'},
                {type: "password"})}
            <div className={s.s1}>
                <div className={s.s2}>
                    {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {}, {type: "checkbox"})}
                </div>
                <div className={s.s3}>
                    remember me
                </div>
            </div>
            {captchaUrl && <img src={captchaUrl} alt=""/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {})}

            {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
            <div>
                <button className={s.button}>Log In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
    isFetching: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha:string) => void
}
type LoginFormValuesType = {
    captcha: string;
    rememberMe: boolean
    password: string
    email: string
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div className={s.login}>
        <h2>LOG IN</h2>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
    isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, {login})(Login)