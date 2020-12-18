import React from "react"

function Blog(props) {
    return (
        <div>
            <h3 > {props.title} </h3>
            <h4 > {props.subTitle} </h4>
            <h6 > Posted by {props.author} on {props.date}</h6>
        </div>
    )
}

export default Blog