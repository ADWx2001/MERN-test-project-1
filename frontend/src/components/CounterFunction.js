import React, {useState} from "react";

function CounterFunction(){

    let [number, setNumber] = useState(0)

    function increment(){
        setNumber(++number)
    }


    return(
    <div>
        <h1>Functional Component</h1>
        <h1>Counter = {number}</h1>
        <button onClick = {increment}>increment</button>
    </div>)
}

export default CounterFunction;