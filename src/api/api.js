import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "48080886-eec4-4752-8391-b5f4271f9163"
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
    },
    Follow(id) {
        return instance.post(`follow/${id}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}