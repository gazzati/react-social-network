import {updateObjectInArray} from "../utils/object-helpers"
import {UserType} from "../types/types"
import {BaseThunkType, InferActionsTypes} from "./redux-store"
import {friendsAPI} from "../api/friends-api";
import {ResultCodeEnum} from "../api/api";

let initialState = {
    friends: [] as Array<UserType>,
    pageSize: 8,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: true,
    unfollowingInProgress: [] as Array<number>  //array of users ids
};

const friendsReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'friends/UNFOLLOW':
            return {
                ...state,
                friends: updateObjectInArray(state.friends, action.userId, "id", {followed: false})
            }
        case 'friends/SET_USERS': {
            return {...state, friends: action.friends}
        }
        case 'friends/SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'friends/SET_TOTAL_USERS_COUNT': {
            return {...state, totalFriendsCount: action.count}
        }
        case 'friends/TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'friends/TOGGLE_IS_UNFOLLOWING_PROGRESS': {
            return {
                ...state,
                unfollowingInProgress: action.isFetching
                    ? [...state.unfollowingInProgress, action.userId]
                    : state.unfollowingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const actions = {
    unfollowSuccess: (userId: number) => ({type: 'friends/UNFOLLOW', userId} as const),
    setFriends: (friends: Array<UserType>) => ({type: 'friends/SET_USERS', friends} as const),
    setCurrentPage: (currentPage: number) => ({type: 'friends/SET_CURRENT_PAGE', currentPage} as const),
    setTotalFriendsCount: (totalUsersCount: number) => ({type: 'friends/SET_TOTAL_USERS_COUNT', count: totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'friends/TOGGLE_IS_FETCHING', isFetching} as const),
    toggleUnfollowingProgress: (isFetching: boolean, userId: number) => ({type: 'friends/TOGGLE_IS_UNFOLLOWING_PROGRESS', isFetching, userId} as const)
}

export const requestFriends = (page: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true));   //???
        dispatch(actions.setCurrentPage(page))

        let data = await friendsAPI.getFriends(page, pageSize)
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setFriends(data.items));
        dispatch(actions.setTotalFriendsCount(data.totalCount))
    }
}


export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleUnfollowingProgress(true, userId));
        let data = await friendsAPI.unFollow(userId);
        if (data.resultCode === ResultCodeEnum.Success) {
            dispatch(actions.unfollowSuccess(userId));
        }
        dispatch(actions.toggleUnfollowingProgress(false, userId));

    }
}

export default friendsReducer;

type InitialState = typeof initialState
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InferActionsTypes<typeof actions>