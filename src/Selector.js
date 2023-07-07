import React from "react"
import Button from "./Button"

const Selector = ({type, descriptor, buttonNames, handler}) =>{
    return(
        <div className = {type}>
         <h2>{descriptor}</h2>
         <div className = {`buttonContainer${type}`}>
            {buttonNames.map((buttonName) => {
                return <Button 
                text = {buttonName}/>
            })}
         </div>
        </div>
    )
}

export default Selector;