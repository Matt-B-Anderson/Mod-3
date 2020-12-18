import Pet from "./Pet"

function Friend(props) {
    return (
        <div>
            <h3 > Name: {props.name} </h3>
            <h3 > Age: {props.age} </h3>
            <h3 > Pets: </h3>
            <ul >{props.pets.map(pet => <li> < Pet key={pet.id}
                name={pet.name}
                breed={pet.breed}
            /></li>)}</ul>

        </div>
    )
}

export default Friend