import React, { useEffect } from 'react';
import ProfileImg from './ProfileImg';
import { Container } from '@mui/material';

function CurrentUser({ currentUser }) {

    return (
        <Container>
            <div className='current-user'>
            {
            (currentUser != null) ? 
                (
                    <>
                        <div className='current-user-header'>
                            <ProfileImg alt={`${currentUser.profile.firstName} ${currentUser.profile.lastName}`} src={currentUser.avatar} sx={{ height: 124, width: 124 }} size={60}/>
                            <h2>{`@${currentUser.profile.username}`}</h2>
                        </div>
                        <div className='current-user-body'>
                            <h4>Name : {`${currentUser.profile.firstName} ${currentUser.profile.lastName}`}</h4>
                            <h4>Bio : {`${currentUser.Bio}`}</h4>
                            <h4>Email : {`${currentUser.profile.email}`}</h4>
                            <h4>Job Title : {`${currentUser.jobTitle}`}</h4>
                        </div>
                    </>
                ):
                (
                    <h2>Click on a User!</h2>
                )
            }
            </div>
        </Container>
    )
}

export default CurrentUser
