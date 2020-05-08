import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const addNewPostForm = (props) => {

    let handleKeyDown = (e, cb) => {
        if (e.key === 'Enter' && e.shiftKey === false) {
            e.preventDefault();
            cb();
        }
    };

    return (
        <form onSubmit={props.handleSubmit}
              onKeyDown={(e) => handleKeyDown(e, props.handleSubmit)}>
            <div className={s.form} >
                <Field className={s.area}
                       component={Textarea}
                       name="newPostText"
                       placeholder="Enter your post..."
                       validate={[required, maxLength50]}
                />
                <button className={s.button}>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostForm = reduxForm({form: "profileAddPostForm"})(addNewPostForm)


const MyPosts = React.memo((props) => {
    let postsElements =
        props.posts
            .sort((a, b) => a.id < b.id ? 1 : -1)
            .map(p => <Post message={p.message}
                            likesCount={p.likesCount}
                            key={p.id}
                            id={p.id}
                            profile={props.profile}
                            addLikes={props.addLikes}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
        values.newPostText = " ";
    }

    return (
        <div className={s.postsBlock} >
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

});

export default MyPosts;