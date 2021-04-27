// Text component
export function Text(props) {
    return(
        <p className="text" style={{color: props.color}}>
            {props.name}
        </p>
    )
}

export default Text