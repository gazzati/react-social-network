import {GetItemsType, instance, APIResponseType} from "./api"

export const friendsAPI = {
    getFriends(currentPage = 1, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&friend=true`)
            .then(res => res.data)
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`).then(res => res.data) as Promise<APIResponseType>
    },
}