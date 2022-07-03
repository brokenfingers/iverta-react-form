import React, { useState } from 'react'
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import { User } from './UserList';

interface Props {
    onAddUser: (obj: User) => void
}

const AddUser = (props: Props) => {

    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')

    const userNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // eslint-disable-next-line
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
        const valid = inputs.some(itm => itm.trim().length === 0);
        return valid
    }

    const ageIsInvalid = (age: string) => Number(age) < 1

    return <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' onChange={userNameChangeHandler} value={userName} />
            <label htmlFor='age'>Age(years)</label>
            <input id='age' type='number' onChange={userAgeChangeHandler} value={userAge} />
            <Button type='submit'>Add user</Button>
        </form>

    </Card>
}

export default AddUser;