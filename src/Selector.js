import React, { useState } from "react"
import Button from "./SelectorButton"

const Selector = ({ type, descriptor, buttonNames, setQuizType }) => {

    const [selected, setSelected] = useState()

    const handleClick = (buttonName) => {
        setSelected(buttonName)
        setQuizType(type, buttonName)
    }

    return (
        <div className={`${type}Container`}>
            <h2 className='descriptor'>{descriptor}</h2>
            <div className={`buttonContainer`}>
                {buttonNames.map((buttonName, i) => {
                    return <Button
                        key={i}
                        text={buttonName}
                        onClick={handleClick}
                        highlight={selected === buttonName}
                    />
                })}
            </div>
        </div>
    )
}

export default Selector;