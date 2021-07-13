import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const setUsersListHandler = (name, age) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, {name: name, age: age, id: Math.random*10}];
    })
  };

  return (
    <div>
      <AddUser onAddUser={setUsersListHandler}  />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
