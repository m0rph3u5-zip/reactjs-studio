import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import AddUser from './components/Users/AddUser';
import Users from './components/Users/Users';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUSerHandler = (username, age) => {
    setUsers((prevUsers) => {
      const currentUser = {};
      currentUser.username = username;
      currentUser.age = age;
      currentUser.id = uuidv4();
      return [...prevUsers, currentUser];
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUSerHandler}/>
      <Users users={users} />
    </div>
  );
};

export default App;
