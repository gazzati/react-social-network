import {GetItemsType, instance, APIResponseType} from "./api"

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term = "") {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}`)
            .then(res => res.data)
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`).then(res => res.data) as Promise<APIResponseType>
    },
    Follow(id: number) {
        return instance.post<APIResponseType>(`follow/${id}`).then(res => res.data)
    }
}