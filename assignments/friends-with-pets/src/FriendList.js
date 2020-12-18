import React from "react"

import Friend from "./Friend"
import friends from "./friendsData"

function App() {
    const friendComponents = friends.map(friend => < Friend key={friend.id}
        name={friend.name}
        age={friend.age}
        pets={friend.pets}
    />)

    return (
        <div>
            {friendComponents}
        </div>
    )
}

export default App