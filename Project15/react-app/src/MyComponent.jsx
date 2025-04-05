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
import { useEffect } from "react";

function MyComponent(){

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight)


    useEffect(()=>{
        document.title = `Count: ${count} ${color} Size: ${width} x ${height} px`;
        window.addEventListener("resize", handleResize)
        console.log("added")

        return ()=>{
            window.removeEventListener("resize", handleResize)
            console.log("removed")
        }

    }, [count, color, width, height])

    function addCount(){
        setCount(prevCount => prevCount+1)
    }

    function substractCount(){
        setCount(prevCount => prevCount-1)
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return (
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={substractCount}>Substract</button><br></br>
            <button onClick={changeColor}>Change Color</button><br></br>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>  
    )
}

export default MyComponent