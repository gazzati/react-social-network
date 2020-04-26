const SEND_MESSAGE = 'SEND-MESSAGE'

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your girlfriend?'},
        {id: 3, message: 'See you'},
        {id: 4, message: 'I study in MIREA'},
        {id: 5, message: 'Where is your car'}
    ] as Array<MessageType>
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
       case SEND_MESSAGE:
           let body = action.newMessageBody;
           return {
               ...state,
               messages: [...state.messages, {id: 7, message: body}]
           }
       default:
           return state;
   }
}

type SendMessageCreatorActionType = {
    type: typeof sendMessageCreator,
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType =>
    ({type: sendMessageCreator, newMessageBody})

export default dialogsReducer;