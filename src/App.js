import React, {useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);
  const addUserData = (obj)=> {
    console.log("obj", obj);
    setUserList([...userList, obj]);
    // setUserList((previous)=> {
    //   console.log("previous-------->", previous);
    //   previous.push(obj);
    // })
    console.log("user list--------<", userList);
  }
  return (
    <div className="App">
      <AddUser onAddUser={addUserData}/>
      <UserList userList={userList}/>    
    </div>
  );
}

export default App;
