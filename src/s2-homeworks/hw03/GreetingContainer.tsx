import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {totalmem} from "os";

type GreetingContainerPropsType = {
    users: Array<UserType>// need to fix any
    addUserCallback: (name:string) => void// need to fix any
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: any) => void) => {
    if (name === "") {
        return setError("ERROR.Please input the name")
    }
    addUserCallback(name)
    setName("")
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => {
    if (name.length < 1) {
        return setError("ERROR")
    }
    // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent, addUser: ()=> void) => {
    if (e.key === "Enter") {
        return addUser()
    }
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
     if (error !== ""){
         setError('')
     }

    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUser = users.at(-1) // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUser={lastUser}
        />
    )
}

export default GreetingContainer
