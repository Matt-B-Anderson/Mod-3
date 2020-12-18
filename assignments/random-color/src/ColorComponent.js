import React from "react"

function ColorComponent(props) {
    return (
        <div style={{ backgroundColor: `${props.color.hex}` }}></div>

    )
}

export default ColorComponent