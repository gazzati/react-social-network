import React, {FC} from 'react';
import s from "./News.module.css";
import {NewsType} from "../../types/types";

type PropsType = {
    newsItem: NewsType
}

let NewsItem: FC<PropsType> = ({newsItem}) => {
    return (
        <div className={s.newsContainer}>
            <div className={s.newItem}>
                <a href={newsItem.url} target="_blank" className={s.title}><b>{newsItem.title}</b></a>
                <p className={s.description}>{newsItem.description}</p>
                <a href={newsItem.url} target="_blank" className={s.img}>
                    {newsItem.urlToImage && <img src={newsItem.urlToImage} alt=""/>}
                </a>
                <div className={s.info}>
                    <a href={newsItem.url} className={s.publish} target="_blank"><b>{newsItem.source.name}</b></a>
                    <div className={s.date}>{newsItem.publishedAt}</div>
                </div>

            </div>
        </div>)
}

export default NewsItem