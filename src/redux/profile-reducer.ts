import {FormAction, stopSubmit} from "redux-form"
import {PhotosType, PostType, ProfileType} from "../types/types"
import {profileAPI} from "../api/profile-api"
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    posts: [
        {id: 1, message: 'It is my first post', likesCount: 12},
        {id: 2, message: 'It is my website', likesCount: 1},
        {id: 3, message: 'Hi, how are you?', likesCount: 21},
        {id: 4, message: 'I want to become a developer', likesCount: 11},
        {id: 5, message: 'Say me about you', likesCount: 1},

    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
    isFetching: true
};

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'profile/ADD-POST': {
            let newPost = {
                id: Date.now(),
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case 'profile/SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'profile/SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'profile/SAVE_PHOTO_SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        case 'profile/DELETE_POST': {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case 'profile/ADD_LIKES':
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.postId) {
                        return {...p, likesCount: p.likesCount + 1}
                    }
                    return p;
                })
            }
        case 'profile/TOGGLE_IS_FETCHING' : {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: 'profile/ADD-POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'profile/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'profile/SET_STATUS', status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'profile/SAVE_PHOTO_SUCCESS', photos} as const),
    deletePost: (postId: number) => ({type: 'profile/DELETE_POST', postId} as const),
    addLikes: (postId: number) => ({type: 'profile/ADD_LIKES', postId} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'profile/TOGGLE_IS_FETCHING', isFetching} as const),
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(actions.setUserProfile(data));

}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true));
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data));
    dispatch(actions.toggleIsFetching(false));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file);
    dispatch(actions.savePhotoSuccess(data.data.photos));

}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getUserProfile(userId));
        } else
            throw new Error("userId can't be null")
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}));
        return Promise.reject(data.messages[0]);
    }
}
export default profileReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>