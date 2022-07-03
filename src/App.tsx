import React, { useState } from 'react';

import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { User } from './components/Users/UserList'

function App() {
  const [userList, setUserList] = useState<User[]>([])

  const addUserHandler = (obj: User) => {
    setUserList(prevList => ([...prevList, { name: obj.name, age: obj.age }]))
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
