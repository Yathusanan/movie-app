const Like = (props) => {
    let word = "-LIKED-";

    if (!props.liked) word = "Like";

    return (<p onClick={props.onClick} style={{cursor: "pointer"}}>{word}</p>)
};

export default Like;