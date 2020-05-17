import {updateObjectInArray} from "../utils/object-helpers"
import {UserType} from "../types/types"
import {BaseThunkType, InferActionsTypes} from "./redux-store"
import {Dispatch} from "redux"
import {usersAPI} from "../api/users-api";
import {ResultCodeEnum} from "../api/api";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,  //array of users ids
};

const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case 'users/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case 'users/SET_USERS': {
            return {...state, users: action.users}
        }
        case 'users/SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'users/SET_TOTAL_USERS_COUNT': {
            return {...state, totalUsersCount: action.count}
        }
        case 'users/TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'users/TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case 'users/RESET_CURRENT_PAGE': {
            return {...state, currentPage: 1}
        }
        default:
            return state;
    }
}

export const actions = {
    followSuccess: (userId: number) => ({type: 'users/FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'users/UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'users/SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'users/SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'users/SET_TOTAL_USERS_COUNT', count: totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'users/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({type: 'users/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const),
    resetCurrentPage: () => ({type: 'users/RESET_CURRENT_PAGE'} as const),
}

export const requestUsers = (page: number, pageSize: number, term: string): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true));   //???
        dispatch(actions.setCurrentPage(page))

        let data = await usersAPI.getUsers(page, pageSize, term)
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
                                   userId: number,
                                   apiMethod: any,
                                   actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.Follow.bind(usersAPI), actions.followSuccess)
    }
}


export const unfollow = (userId: number): ThunkType=> {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), actions.unfollowSuccess)
    }
}

export default usersReducer;

type InitialState = typeof initialState
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InferActionsTypes<typeof actions>