import {ResultCodeEnum, ResultCodeForCaptchaEnum} from "../api/api"
import {stopSubmit, FormAction} from "redux-form"
import {authAPI} from "../api/auth-api"
import {securityAPI} from "../api/security-api"
import {BaseThunkType, InferActionsTypes} from "./redux-store"

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
    isFetching: false as boolean
};

const authReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
        case 'auth/GET_CAPTCHA_URL_SUCCESS':{
            return {
                ...state,
                ...action.payload
            }
        }
        case 'auth/TOGGLE_IS_FETCHING' : {
            return { ...state, isFetching: action.isFetching }
        }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (id: number | null , email: string | null, login: string | null, isAuth: boolean) =>
        ({type: 'auth/SET_USER_DATA', payload: {id, email, login, isAuth}} as const),

    getCaptchaUrlSuccess: (captchaUrl: string) =>
        ({type: 'auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const),

    toggleIsFetching: (isFetching: boolean) => ({type: 'auth/TOGGLE_IS_FETCHING', isFetching} as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let meData = await authAPI.me()

    if (meData.resultCode === ResultCodeEnum.Success) {
        let {id, email, login} = meData.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha:string): ThunkType =>
    async (dispatch: any) => {
        dispatch(actions.toggleIsFetching(true))
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(getAuthUserData())
        dispatch(actions.toggleIsFetching(false))
    } else {
        if(data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired){
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): ThunkType => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}


export default authReducer

type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>