import './App.css';
import { useState } from 'react';
import { Container, Box } from '@mui/material';
import UserList from './Components/UserList';
import CurrentUser from './Components/CurrentUser';

function App() {

  const [userList, setUserList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  
  return (
    <div className="App">
      <Box className='main-box'>
        <UserList 
          setUserList={setUserList}
          userList={userList}
          setCurrentUser={setCurrentUser}
        />
        <CurrentUser currentUser={currentUser}/>
      </Box>
    </div>
  );
}

export default App;
