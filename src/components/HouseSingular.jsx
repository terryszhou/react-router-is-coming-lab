import { Link } from 'react-router-dom'

export const HouseSingular = (props) => {
    let memberData = props.people.map((member, idx) => {
        return (
            <Link
                to={`/houses/${props.id}/members/${member.id}`}
                className="linkStyle">
                <h3 key={idx}>{member.name}</h3>
            </Link>
        )
    })
    return (
        <div className="page">
            <div className="header">
                <h1>Members of the {props.name}</h1>
            </div>
            <ul className="list">
                {memberData}
            </ul>
        </div>
    )
}