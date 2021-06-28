import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link className="houseLink" to="/houses"><h3>Houses</h3></Link>
                </li>
            </ul>
        </nav>
    )
}