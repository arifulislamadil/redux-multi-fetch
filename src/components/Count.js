import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByNumber, reset } from '../redux/postSlice';

const Count = () => {
    const count = useSelector(state=>state.count.count);
    const dispatch = useDispatch()
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
            <button onClick={()=>dispatch(incrementByNumber(2))}>incrementByNumber</button>
        </div>
    );
};

export default Count;