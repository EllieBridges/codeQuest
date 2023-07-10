import React from "react"
import Button from "./Button"

const Selector = ({ type, descriptor, buttonNames, handler }) => {
    return (
        <div className={`${type}Container`}>
            <h2 className='descriptor'>{descriptor}</h2>
            <div className={`buttonContainer`}>
                {buttonNames.map((buttonName) => {
                    return <Button
                        text={buttonName} />
                })}
            </div>
        </div>
    )
}

export default Selector;