import React, { useEffect, useState } from 'react';
import ProfileImg from './ProfileImg';
import axios from 'axios';
import { Container, Avatar, CircularProgress } from '@mui/material';

function UserList({setUserList, userList, setCurrentUser}) {

    const client = axios.create({
        baseURL: "https://602e7c2c4410730017c50b9d.mockapi.io/users" 
      });

    const [isUserListLoaded, setIsUserListLoaded] = useState(false);

    const [showError, setShowError] = useState(false);

    useEffect(()=>{
        const getUsers = async () => {
            try {
                const response = await client.get('/');
    
                if(response.status == 200){
                    setUserList(response.data)
                    setIsUserListLoaded(true)
                }else{
                    console.log(response);
                    setShowError(true)
                }
            } catch (error) {
                console.log(error);
                setShowError(true)
            }
        }

        getUsers();

    }, [])


    return (
        <Container className='user-list'>
            <div className='user-list-heading'>
                <h1>User List</h1>
            </div>
            <div className='users-list'>
                <CircularProgress className={ (isUserListLoaded || showError) ? 'hidden':'' } style={{position: 'absolute', top: '35%'}} size={100}/>
                { userList.map( user => (
                    <div className={ isUserListLoaded ? 'user-item':'user-item hidden' } onClick={ () => setCurrentUser(user) } key={user.id}>
                        <ProfileImg alt={`${user.profile.firstName} ${user.profile.lastName}`} src={user.avatar} size={20}/>
                        <h3 className='user-img'>{user.profile.firstName}</h3>
                    </div>
                    ) ) 
                }
                <div className={ showError? 'error ':'error hidden' }>
                    <h4>There was an error, please try refreshing the page</h4>
                </div>
            </div>
        </Container>
    )
}

export default UserList
