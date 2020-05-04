import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const addNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <span>
                <Field className={s.area}
                       cols="25"
                       rows="4"
                       component={Textarea}
                       name="newPostText"
                       placeholder="Enter your post"
                       validate={[required, maxLength50]}
                />
            </span>
            <span>
                <button className={s.button}>Add post</button>
            </span>
        </form>
    )
}

const AddNewPostForm = reduxForm({form: "profileAddPostForm"})(addNewPostForm)


const MyPosts = React.memo(props => {
    let postsElements =
        props.posts.map(p => <Post message={p.message}
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
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

});

export default MyPosts;