import React from "react"

function Card(props) {
    return (
        <div>
            <h3 > Place: {props.place} </h3>
            <h3 > Price: {props.price} </h3>
            <h3 > Time to go: {props.timeToGo} </h3>
        </div>
    )
}

export default Card