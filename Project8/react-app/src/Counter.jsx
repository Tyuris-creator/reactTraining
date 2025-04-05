// React hook - speacial function that allows functional components
// to use React features writing class components
// useState, useEffect, useContext, useReducer, useCallback and more

// useState() = A React hook that allows the creation of a 
// stateful variable AND a setter function to update its value in the
// Virtual DOM [name, setName]

import React, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(<div className='counter-container'>
                <p className='count-display'>{count}</p>
                <button className='counter-button' onClick={decrement}>Decrement</button>
                <button className='counter-button' onClick={reset}>Reset</button>
                <button className='counter-button' onClick={increment}>Increment</button>
            </div>)

}

export default Counter