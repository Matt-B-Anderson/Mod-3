import React from "react"

const formatPhone = (number) => {
    const cleaned = ('' + number).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
}

function Badge(props) {
    return (
        <div className="badge">
            <h3 className="header">Badge:</h3>
            <span className="grid">
                <p className="name">Name: {props.badge.firstName} {props.badge.lastName}</p>
                <p className="phone">Phone: {formatPhone(props.badge.phone)}</p>
                <p className="pob">Place of Birth: {props.badge.pOB}</p>
                <p className="favfood">Favorite Food: {props.badge.favFood}</p>
                <p className="email">Email: {props.badge.email}</p>
                <p className="about">{props.badge.textArea}</p>
            </span>


        </div>

    )


}

export default Badge