import React from "react"

function HitList(props) {
    return (
        <div className="images" style={{ backgroundImage: `url(${props.person.image})` }}>
            <p>{props.person.name}</p>
        </div>
    )
}

export default HitList