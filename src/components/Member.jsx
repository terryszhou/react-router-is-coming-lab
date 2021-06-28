export const Member = (props) => {
    return (
        <div className="page">
            <div className="header">
                <h2>{props.name}</h2>
            </div>
            <div className="desc">
                <p>{props.description}</p>
            </div>
        </div>
    )
}