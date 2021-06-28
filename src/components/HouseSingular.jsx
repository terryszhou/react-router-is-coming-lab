import { Link } from 'react-router-dom'

export const HouseSingular = (props) => {
    let memberData = props.people.map((member, idx) => {
        return (
            <Link
                to={`/houses/${props.id}/members/${member.id}`}
            >
                <li key={idx}>{member.name}</li>
            </Link>
        )
    })
    return (
        <div className="page">
            <div className="header">
                <h2>Members of the {props.name}</h2>
            </div>
            <ul className="list">
                {memberData}
            </ul>
        </div>
    )
}