export const Member = (props) => {
    return (
        <div className="page">
            <div className="header">
                <a href={`https://awoiaf.westeros.org/index.php/${props.wikiSuffix}`}>
                    <h1>
                        {props.name}
                    </h1>
                </a>
            </div>
            <div className="desc">
                <p>{props.description}</p>
            </div>
        </div>
    )
}