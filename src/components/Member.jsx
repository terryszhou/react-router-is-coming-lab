export const Member = (props) => {
    return (
        <div className="page">
            <div className="header">
                <a href={`https://awoiaf.westeros.org/index.php/${props.wikiSuffix}`}>
                    <h2>
                        {props.name}
                    </h2>
                </a>
            </div>
            <div className="desc">
                <p>{props.description}</p>
            </div>
        </div>
    )
}