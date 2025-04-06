import React, {useState, useEffect, useRef} from "react";


function MyComponent(){

    // let [number, setNumber] = useState(0); Component will be always re rendering

    const inputRef = useRef(null);



    useEffect(()=>{
        console.log("Component renders");
        console.log(inputRef)
    })

    function handleClick(){
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "GREEN"
    }

    return (
        <>
            <button onClick={handleClick}>Click Me!</button><br></br>
            <input ref={inputRef}/>
        </>
        
    )

}

export default MyComponent;