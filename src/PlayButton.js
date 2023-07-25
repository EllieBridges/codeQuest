import React from "react";

const PlayButton = ({ onClick, text, route }) => {
    return <button onClick={() => onClick()} className={`${text} button`}>{text}</button>

}

export default PlayButton;