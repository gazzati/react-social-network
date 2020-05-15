import axios from "axios"
import {NewsType} from "../types/types";

type NewsResponseType = {
    totalResults: number
    status: string
    articles: Array<NewsType>
}

export const newsAPI = {
    getNews(currentPage: number = 1, pageSize: number = 5) {
        return axios.get<NewsResponseType>(`https://newsapi.org/v2/top-headlines?` +
            `country=ru&apiKey=3d368681f4414a9fb4ffa48ef6d52ea6&pageSize=${pageSize}&page=${currentPage}`)
            .then(res => res.data)
    }
}