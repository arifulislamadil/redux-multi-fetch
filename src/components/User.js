import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/postSlice';

const User = () => {
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();

    const { isAuthenticated,logout,loginWithRedirect } = useAuth0();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div>

            {
                isAuthenticated ? (
                    <div className='users-style'>
                        {
                            users.map(user => <div key={user.id}>
                                <h3>{user.name}</h3>
                            </div>)
                        }
                    </div>
                ) :
                <Button variant="primary" onClick={() => loginWithRedirect()}>Login</Button>
                    
            }

        </div>
    );
};

export default User;