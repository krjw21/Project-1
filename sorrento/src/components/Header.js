import {Link} from 'react-router-dom'

export function Header (props) {
    const Navigation = props.nav.map( (item) => {
        return (
            <Link to={item.link} >{item.name}</Link>
        )
    } )
    return (
        <header className="header"> 
            <img className="logo" src={props.logo}/>
            <nav className="navigation">
                {Navigation}
            </nav>
        </header>
    )
}
export default Header