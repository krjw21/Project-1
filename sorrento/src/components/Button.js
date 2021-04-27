// Button component
import {useState} from 'react'
export function Button(props) {
    // Store number of clicks
    const [click,setClick] = useState(props.start)
    const update = () => {
        setClick(click + 1)
    }
    return(
        <button className="button" onClick={update}>
            {"Clicked " + click + " Times"}
        </button>
    )
}

export default Button