import {newsAPI} from "../api/api";
import {NewsType} from "../types/types";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {ThunkAction} from "redux-thunk";

let initialState = {
    news: [] as Array<NewsType>,
    isFetching: true as boolean,
    pageSize: 5 as number,
    totalNewsCount: 0 as number,
    currentPage: 1 as number,
};

type InitialState = typeof initialState

const newsReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case 'SET_NEWS':
            return {
                ...state,
                news: action.news
            }
        case 'SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTAL_NEWS_COUNT': {
            return {...state, totalNewsCount: action.count}
        }
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    setNews: (news: Array<NewsType>) => ({type: 'SET_NEWS', news} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setTotalNewsCount: (totalNewsCount: number) => ({type: 'SET_TOTAL_NEWS_COUNT', count: totalNewsCount} as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getNews = (page: number, pageSize: number): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(page))

        let data = await newsAPI.getNews(page, pageSize)
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setTotalNewsCount(data.totalResults))
        dispatch(actions.setNews(data.articles));

    }
}


export default newsReducer;