import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostForm, {AddPostFormValuesType} from "./AddPostForm/AddPostForm";
import {PostType, ProfileType} from '../../../types/types';

export type MapPropsType = {
    posts: Array<PostType>
    profile: ProfileType | null
}

export type DispatchPropsType = {
    addPost: (newPostText: string) => void
    addLikes: (id: number) => void
}

const MyPosts: React.FC<MapPropsType & DispatchPropsType> = (props => {
    let postsElements =
        props.posts
            .sort((a, b) => a.id < b.id ? 1 : -1)
            .map(p => <Post message={p.message}
                            likesCount={p.likesCount}
                            key={p.id}
                            id={p.id}
                            profile={props.profile}
                            addLikes={props.addLikes}/>)

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
        values.newPostText = " ";
    }

    return (
        <div className={s.postsBlock} >
            <h3>My posts</h3>
            <AddPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

});

const MyPostsMemorized = React.memo(MyPosts);

export default MyPostsMemorized;