import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const DELETE_POST = 'DELETE_POST'
const ADD_LIKES = 'ADD_LIKES'


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hi, how', likesCount: 1},
        {id: 3, message: 'Hi,re you?', likesCount: 21},
        {id: 4, message: 'It\'s my first post', likesCount: 11},
        {id: 5, message: 'Hi, how', likesCount: 1},

    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
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
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case ADD_LIKES:
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id === action.postId) {
                        return {...p, likesCount: p.likesCount + 1}
                    }
                    return p;
                })
            }
        default:
            return state;
        }
    }

    export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
    export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
    export const setStatus = (status) => ({type: SET_STATUS, status})
    export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
    export const deletePost = (postId) => ({type: DELETE_POST, postId})
    export const addLikes = (postId) => ({type: ADD_LIKES, postId})

    export const getUserProfile = (userId) => async (dispatch) => {
        let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));

    }
    export const getStatus = (userId) => async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }

    export const updateStatus = (status) => async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }

    export const savePhoto = (file) => async (dispatch) => {
        let response = await profileAPI.savePhoto(file);
        dispatch(savePhotoSuccess(response.data.data.photos));

    }

    export default profileReducer;