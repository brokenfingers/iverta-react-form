import React, { useState, useRef } from 'react'
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal, { ErrorProps } from '../UI/ErrorModal';
import classes from './AddUser.module.css'
import { User } from './UserList';

interface Props {
    onAddUser: (obj: User) => void
}

const AddUser = (props: Props) => {

    const userNameInput = useRef<HTMLInputElement>(null);
    const userAgeInput = useRef<HTMLInputElement>(null);

    const [error, setError] = useState({} as ErrorProps)

    const resetFields = () => {
        if(userNameInput.current !== null && userAgeInput.current !== null) {
            userNameInput.current.value = ''
            userAgeInput.current.value = ''
        }
    }

    const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(userNameInput.current !== null && userAgeInput.current !== null && userNameInput.current.value.trim().length=== 0 && userAgeInput.current.value.trim().length=== 0) {
            setError({ title: 'Invalid input', message: 'please enter a valid name' })
            return
        }
            if(userAgeInput.current !== null &&  Number(userAgeInput.current.value) < 1) {
            setError({ title: 'Invalid age', message: 'please enter a valid age' })
            return
        }
        
        props.onAddUser({ name: 'stt', age: 'stt' })
        resetFields()
    }

    const errorHandler = () => {
        setError({} as ErrorProps)
    }

    return <>
        {error.message && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text'  ref={userNameInput }  />
                <label htmlFor='age'>Age(years)</label>
                <input id='age' type='number'  ref={userAgeInput}  />
                <Button type='submit'>Add user</Button>
            </form>

        </Card>
    </>

}

export default AddUser;