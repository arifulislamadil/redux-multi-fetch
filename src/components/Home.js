import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/postSlice';

const Home = () => {

    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div className='users-style'>
            {
                users.map(user => <div key={user.id}>
                    <h3>{user.email}</h3>
                </div>)
            }
        </div>
    );
};

export default Home;