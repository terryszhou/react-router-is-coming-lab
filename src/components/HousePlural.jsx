import { Link } from 'react-router-dom'

export const HousePlural = (props) => {
    let gotDATA = props.gameOfThrones.map((house, id) => {
        return (
            <div>
                <Link
                    to={`/houses/${house.id}`}
                    className="linkStyle">
                    <h3>{house.name}</h3>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <div className="header">
                <h1>Houses of Westeros</h1>
            </div>
            <ul className="list">
                {gotDATA}
            </ul>
        </div>
    )
}