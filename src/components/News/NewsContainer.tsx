import React from 'react'
import {connect} from 'react-redux';
import {compose} from "redux";
import {NewsType} from '../../types/types';
import {AppStateType} from "../../redux/redux-store";
import News from './News';
import {getNews} from '../../redux/news-reducer';

type MapStatePropsType = {
    isFetching: boolean
    news: Array<NewsType>
    currentPage: number
    totalNewsCount: number
    pageSize: number
}

type MapDispatchPropsType = {
    getNews: (currentPage: number, pageSize: number) => void
}

type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class NewsContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getNews(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.getNews(pageNumber, pageSize);
    }

    render() {
        return <>
            <News onPageChanged={this.onPageChanged}
                  news={this.props.news}
                  isFetching={this.props.isFetching}
                  totalNewsCount={this.props.totalNewsCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        news: state.news.news,
        isFetching: state.news.isFetching,
        pageSize: state.news.pageSize,
        totalNewsCount: state.news.totalNewsCount,
        currentPage: state.news.currentPage,
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {getNews: getNews}))(NewsContainer)