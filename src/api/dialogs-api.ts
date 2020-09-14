import {instance, APIResponseType, GetItemsType} from "./api"
import { MessageType, DialogType } from "../types/types"

export const dialogsAPI = {
    getAllDialogs() {
        return instance.get<Array<DialogType>>(`dialogs`).then(res => res.data )
    },
    getMessages(userId: number) {
        return instance.get<GetItemsType<MessageType>>(`dialogs/${userId}/messages`).then(res => res.data)
    },
    startDialog(userId: number) {
        return instance.put<APIResponseType>(`dialogs/${userId}`).then(res => res.data)
    },
    sendMessage(userId: number, message: string) {
        return instance.post<APIResponseType>(`dialogs/${userId}/messages`, { body: message}).then(res => res.data)
    }
}
