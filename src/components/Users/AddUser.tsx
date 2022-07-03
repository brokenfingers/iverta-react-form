import React, { useState } from 'react'
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal, { ErrorProps } from '../UI/ErrorModal';
import classes from './AddUser.module.css'
import { User } from './UserList';

interface Props {
    onAddUser: (obj: User) => void
}

const AddUser = (props: Props) => {

    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [error, setError] = useState({} as ErrorProps)

    const userNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }
    const userAgeChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAge(e.target.value)
    }

    const resetField = () => {
        setUserName('')
        setUserAge('')
    }

    const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (inputsAreEmpty(userName, userAge)) return
        if (ageIsInvalid(userAge)) return
        props.onAddUser({ name: userName, age: userAge })
        resetField()
    }

    const inputsAreEmpty = (...inputs: string[]) => {
        const isEmpty = inputs.some(itm => itm.trim().length === 0);
        if (isEmpty) setError({ title: 'Invalid input', message: 'please enter a valid name' })
        return isEmpty
    }

    const ageIsInvalid = (age: string) => {
        const invalidAge = Number(age) < 1
        if (invalidAge) setError({ title: 'Invalid age', message: 'please enter a valid age' })
        return invalidAge
    }

    const errorHandler = () => {
        setError({} as ErrorProps)
    }

    return <>
        {error.message && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' onChange={userNameChangeHandler} value={userName} />
                <label htmlFor='age'>Age(years)</label>
                <input id='age' type='number' onChange={userAgeChangeHandler} value={userAge} />
                <Button type='submit'>Add user</Button>
            </form>

        </Card>
    </>

}

export default AddUser;