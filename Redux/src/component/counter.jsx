import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from '../feature/counter/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <div>
                <input
                    type="number"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(Number(e.target.value))} // Ensure the value is a number
                />
                <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>Add Amount</button> 
            </div>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;
