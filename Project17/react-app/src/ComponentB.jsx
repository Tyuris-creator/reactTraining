import ComponentC from "./ComponentC"

function ComponentB(props){
    return(
        <div className="box">
            <h1>ComponentB  {props.user}</h1>
            <ComponentC/>
        </div>
    )

}

export default ComponentB