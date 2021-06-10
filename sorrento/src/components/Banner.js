const BannerStyle = {
    minHeight: '50vh',
    minWidth: '100%',
    position: 'relative'
}
const BannerImage = {
    position: 'absolute',
    width: '100%',
    height: '50vh',
    objectFit: 'cover',
    objectPosition: 'center',
    zIndex: 9

}
const TextStyle = {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    top: '50%',
    zIndex: 99,
    color: 'blanchedalmond'
}
export function Banner(props) {
    return (
        <div className="banner" style={BannerStyle}>
            <img src={props.image} className="banner-image" style={BannerImage} />
            <h2 className="banner-text" style={TextStyle}>{props.text}</h2>
        </div>
    )
}

const BannerStyle1 = {
    minHeight: '100%',
    minWidth: '100%',
}
const BannerImage1 = {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
}
const TextStyle1 = {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    top: '50%',
    zIndex: 99,
    color: 'blanchedalmond'
}
export function Banner1(props) {
    return (
        <div className="banner" style={BannerStyle1}>
            <img src={props.image} className="banner-image" style={BannerImage1} />
            <h2 className="banner-text" style={TextStyle1}>{props.text}</h2>
        </div>
    )
}
