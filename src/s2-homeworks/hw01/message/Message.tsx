import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";
import {message0} from "../HW1";

// нужно создать правильный тип вместо  any
export type MessagePropsType = {
    message: MessageType
}


// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.user.avatar} className={s.message}>
            <div className={s.imageAndText}>
                id={'hw1-avatar-' + props.message.id}
                <img src={message0.user.avatar}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.user.name} className={s.name}>
                        {message0.user.name}
                    </div>
                    <pre id={'hw1-text-' + props.message.message.text} className={s.messageText}>
                    {message0.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.message.time} className={s.time}>
                {message0.message.time}
            </div>
        </div>
    )
}

export default Message
