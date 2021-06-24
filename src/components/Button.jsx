import React from 'react'
import {Link} from "react-router-dom" 
import "./Button.css"

const styles=["btn-primary","btn-secondary"]
const size=["btn-large","btn-medium"]

function Button({children,path,buttonStyle,buttonSize}) {
    
    var ButtonSize=size.includes(buttonSize)?buttonSize:size[0];
    var ButtonStyle=size.includes(buttonStyle)?buttonStyle:styles[0];

    return (
        <div>
            

        <button className={"btn "+ButtonSize+" "+ButtonStyle}>

        {children}

        </button>

            

        </div>
    )
}


export default Button;
