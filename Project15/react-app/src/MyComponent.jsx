// useEffect() = React Hook that tells React DO some code when (pick one)
// this component re-renders
// this components mounth
// this state of a value

// useEffect(function, [dependencies])

//1 useEffect(()=>{}) // runs after every re-render
//2 useEffect(()=>{},[]) // runs only on mount
//3 useEffect(()=>{},[value]) // runs on mount + when value changes

// uses
// #1 event listeners
// #2 DOM manipulation
// #3 Subscriptions (real time updates)
// #4 Fetching Data from an API
// #5 Clean uo when a component unmounts

import React, {useState} from "react";

function MyComponent(){
    return (
        <p>hui</p>
    )
}

export default MyComponent