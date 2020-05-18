import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {dialogsAPI} from "../api/dialogs-api";
import {PhotosType} from "../types/types";

type DialogType = {
    hasNewMessages: boolean
    newMessagesCount: number
    id: number
    photos: PhotosType
    userName: string
}
type MessageType = {
    id: string
    body: string
    viewed: boolean
    recipientId: number
    senderId: number
    senderName: string
}

let initialState = {
    dialogs: [] as Array<DialogType>,
    messages: [] as Array<MessageType>,
    isFetching: false,
};

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
   switch (action.type) {
       case 'dialogs/SET_DIALOGS': {
           return {...state, dialogs: action.dialogs}
       }
       case 'dialogs/SET_MESSAGES': {
           return {...state, messages: action.messages}
       }
       case 'dialogs/TOGGLE_IS_FETCHING': {
           return {...state, isFetching: action.isFetching}
       }
       default:
           return state;
   }
}

export const actions = {
    setDialogs: (dialogs: Array<DialogType>) => ({type: 'dialogs/SET_DIALOGS', dialogs} as const),
    setMessages: (messages: Array<MessageType>) => ({type: 'dialogs/SET_MESSAGES', messages} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'dialogs/TOGGLE_IS_FETCHING', isFetching} as const),
}

export const startDialog = (userId: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true))
        let data = await dialogsAPI.startDialog(userId)
        dispatch(actions.toggleIsFetching(false))
    }
}

export const getAllDialogs = (): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true))
        let data = await dialogsAPI.getAllDialogs()
        dispatch(actions.setDialogs(data));
        dispatch(actions.toggleIsFetching(false))
    }
}

export const getMessages = (userId: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true))
        let data = await dialogsAPI.getMessages(userId)
        dispatch(actions.setMessages(data.items))
        dispatch(actions.toggleIsFetching(false))
    }
}

export const sendMessage = (userId: number, message: string): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true))
        let data = await dialogsAPI.sendMessage(userId, message)
        dispatch(actions.toggleIsFetching(false))
    }
}


export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>