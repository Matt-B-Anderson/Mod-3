import React from "react"

import Card from "./Card"
import cardData from "./cardData"

function App() {
    const cardComponents = cardData.map(card => < Card key={card.id}
        place={card.place}
        price={card.price}
        timeToGo={card.timeToGo}
    />)

    return (
        <div>
            { cardComponents}
        </div>
    )
}

export default App