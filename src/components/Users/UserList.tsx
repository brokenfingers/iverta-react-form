import Card from "../UI/Card";
import classes from './UserList.module.css'

export interface User {
    name: string;
    age: string
}

interface Props {
    children?: React.ReactNode;
    users: User[]
}


const UserList = (props: Props) => {


    return <Card className={classes.users}>
        <ul>{
            props.users.map((user, i) => <li key={i}>{user.name} ({user.age} years old)</li>)
        }
        </ul>
        {props.children}
    </Card>
}

export default UserList;
