import React from "react"
import {createField, GetStringKeys, Textarea} from "../../common/FormsControls/FormsControls"
import s from "../Dialogs.module.css"
import {NewMessageFormValuesType} from "../Dialogs"
import {InjectedFormProps, reduxForm} from "redux-form"
import {maxLengthCreator, required} from "../../../utils/validators/validators"

const maxLength50 = maxLengthCreator(50);

type NewMessageFormValuesKeysType = GetStringKeys<NewMessageFormValuesType>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType>
    = (props) => {

    let handleKeyDown =  (e: any, cb: any) => {
        if (e.key === 'Enter' && e.shiftKey === false) {
            e.preventDefault();
            cb();
        }
    };

    return (
        <form onSubmit={props.handleSubmit}
              onKeyDown={(e) => handleKeyDown(e, props.handleSubmit)}>
            <div>
                {createField<NewMessageFormValuesKeysType>(
                    "Enter your message",
                        "newMessageBody",
                        [required, maxLength50],
                        Textarea,
                        {'height': '70px', 'width': '80%', 'margin': '20px 0 5px 0'})}
            </div>
            <div>
                <button className={s.button}>Send</button>
            </div>
        </form>)
}


export default reduxForm<NewMessageFormValuesType>({form: 'dialog-add-message-form'})(AddMessageForm);