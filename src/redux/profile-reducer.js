import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 1, message: 'Hi, how', likesCount: 1},
        {id: 1, message: 'Hi,re you?', likesCount: 21},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 1, message: 'Hi, how', likesCount: 1},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 1, message: 'Hi, how', likesCount: 1},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
    ],
    newPostText: 'Hello world',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}

export const savePhoto = (file) => async (dispatch) => {
   let response = await profileAPI.savePhoto(file);
   if(response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
   }
}





export default profileReducer;