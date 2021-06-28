import { Link } from 'react-router-dom'

export const HousePlural = (props) => {
    let gotDATA = props.gameOfThrones.map((house, id) => {
        return (
            <div>
                <Link
                    to={`/houses/${house.id}`}>
                    <h3>{house.name}</h3>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <div className="header">
                <h2>Game of Thrones Houses</h2>
            </div>
            <ul className="list">
                {gotDATA}
            </ul>
        </div>
    )
}