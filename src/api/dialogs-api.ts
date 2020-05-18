import {GetItemsType, instance, APIResponseType} from "./api"

export const dialogsAPI = {
    getAllDialogs() {
        return instance.get(`dialogs`).then(res => res.data)
    },
    getMessages(userId: number) {
        return instance.get(`dialogs/${userId}/messages`).then(res => res.data)
    },
    startDialog(userId: number) {
        return instance.put(`dialogs/${userId}`).then(res => res.data)
    },
    sendMessage(userId: number, message: string) {
        return instance.post(`dialogs/${userId}/messages`, { body: message}).then(res => res.data)
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`).then(res => res.data) as Promise<APIResponseType>
    },
    Follow(id: number) {
        return instance.post<APIResponseType>(`follow/${id}`).then(res => res.data)
    }
}