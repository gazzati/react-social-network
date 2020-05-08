import React, {CSSProperties, FC} from 'react';
import s from './../News/News.module.css';
import Paginator from "../common/Paginator/Paginator";
import Preloader from "../common/Preloader/Preloader";
import NewsItem from "./NewsItem";
import {NewsType} from "../../types/types";
import * as CSS from "csstype";

type PropsType = {
    totalNewsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    news: Array<NewsType>
    isFetching: boolean
}

const News: FC<PropsType> = ({currentPage, totalNewsCount, pageSize, onPageChanged,
                                 news, isFetching, ...props}) => {
    for(let i = 0; i < totalNewsCount; i++) { }


    return (
        <div className={s.news}>

            {!isFetching ? <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                                      totalItemsCount={totalNewsCount} pageSize={pageSize}/> : null}

            {isFetching ? <Preloader/> : null}
            <div className={s.newsList}>
                   {news.map(n => <NewsItem key={n.publishedAt.toString()} newsItem={n}/>)}

            </div>
        </div>
    )
}

export default News