import React from 'react'
import s from './FriendMessage.module.css'
import {MessagePropsType} from "../message/Message";
import {friendMessage0} from "../HW1";

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={props.message.user.avatar}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img src={friendMessage0.user.avatar}
                />
                <div className={s.friendText}>
                    <div
                        id={props.message.user.name}
                        className={s.friendName}
                    >
                        {friendMessage0.user.name}
                    </div>
                    <pre
                        id={props.message.message.text}
                        className={s.friendMessageText}
                    >
                        {friendMessage0.message.text}
                    </pre>
                </div>
            </div>
            <div
                id={props.message.message.time}
                className={s.friendTime}
            >
                {friendMessage0.message.time}
            </div>
        </div>
    )
}

export default FriendMessage
