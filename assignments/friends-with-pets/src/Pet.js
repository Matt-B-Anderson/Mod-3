import React from "react"

function Pet(props) {
    return (
        <div>
            <h3 > Name: {props.name} </h3>
            <h3 > Breed: {props.breed} </h3>
        </div>
    )
}

export default Pet