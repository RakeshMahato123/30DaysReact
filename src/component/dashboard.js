import { useState } from "react";

export const Dashboard = (props) => {
    const [name, setName] = useState("Default");
    const [displayText, setDisplayText] = useState(true);
    
    let changeName = () => {
        setName('Suman');
    }

    let disapper = () => {
       setDisplayText(!displayText);
    }
    return (<div>
        <h1>{props.title}</h1>
        {displayText && <p>The logged in username is {name}</p>}
        <button onClick={disapper} >Click me to see magic</button>
    </div>)
}