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
        <div id={props.message.user.avatar} className={s.message}>
            <div className={s.imageAndText}>
                <img src={message0.user.avatar}
                />
                <div className={s.text}>
                    <div id={props.message.user.name} className={s.name}>
                        {message0.user.name}
                    </div>
                    <pre id={props.message.message.text} className={s.messageText}>
                    {message0.message.text}
                    </pre>
                </div>
            </div>
            <div id={props.message.message.time} className={s.time}>
                {message0.message.time}
            </div>
        </div>
    )
}

export default Message
