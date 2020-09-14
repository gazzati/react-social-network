import React, {useEffect, useState} from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { InitialStateType } from "../../redux/dialogs-reducer"
import AddMessageForm from "./AddMessageForm/AddMessageForm"
import Preloader from '../common/Preloader/Preloader'

type PropsType = {
    dialogsPage: InitialStateType
    getDialogs: (userId: number) => void
    sendMessage: (userId: number, message: string) => void
    getAllDialogs: () => void
    getMessages: (userId: number) => void
    authorizedUserId: number
    isFetching: boolean
}

export type NewMessageFormValuesType = {
    newMessageBody: string
}

const Dialogs: React.FC<PropsType> = (props) => {
    let [currentDialog, setCurrentDialog] = useState(0);

    useEffect(() => {
        props.getAllDialogs()
    }, [props.dialogsPage.messages])


    let dialogsElements = props.dialogsPage.dialogs.map(d =>
        <span onClick={() => chooseDialog(d.id)} key={d.id}>
            <DialogItem name={d.userName} key={d.id} id={d.id} photo={d.photos.large} currentDialog={currentDialog}
                        hasNewMessage={d.hasNewMessages} newMessagesCount={d.newMessagesCount}/>
        </span>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message isItMe={props.authorizedUserId === m.senderId} message={m.body} key={m.id}/>)

    useEffect(() => {
        dialogsElements = props.dialogsPage.dialogs.map(d =>
            <span onClick={() => chooseDialog(d.id)} >
            <DialogItem name={d.userName} key={d.id} id={d.id} photo={d.photos.large} currentDialog={currentDialog}
                        hasNewMessage={d.hasNewMessages} newMessagesCount={d.newMessagesCount}/>
        </span>)

        messagesElements = props.dialogsPage.messages.map(m => <Message isItMe={props.authorizedUserId === m.senderId} message={m.body} key={m.id}/>)


    }, [props.dialogsPage.messages, props.dialogsPage.dialogs])

    const chooseDialog = (id: number) => {
        props.getMessages(id)
        setCurrentDialog(id)
    }

    let addNewMessage = (values: {newMessageBody: string}) => {
        props.sendMessage(currentDialog, values.newMessageBody)
        props.getMessages(currentDialog)
        values.newMessageBody = ""
    }

    return (
        <div className={s.dialogs}>
            {props.isFetching ? <Preloader /> : null}
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            {currentDialog !== 0 &&<div className={s.messages}>
                <ul className={s.messagesBlock}>{messagesElements.length ? messagesElements : <div className={s.noMessages}>No messages</div>}</ul>
                 <AddMessageForm onSubmit={addNewMessage}/>
            </div>}
        </div>
    )
}

export default Dialogs;
