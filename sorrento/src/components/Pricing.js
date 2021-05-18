import '../styles/Pricing.css'
import { Banner } from '../components/Banner'
import BannerImage from '../banners/neonbrand-sEwtU-qy06c-unsplash.jpg'

export function Pricing(props) {
    return (
        <div className="pricing">
            <Banner image={BannerImage} text="Apartment Pricing" />
            <h2>Pricing</h2>
            <div className="grid">
                <div className="card">
                    <h3>Winter</h3>
                    <ul>
                        <li>The pricing is for 2 people.</li>
                        <li>1st June - August 31st</li>
                        <li>The apartment is strictly non-smoking</li>
                        <li>$200 per night</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Summer</h3>
                    <ul>
                        <li>1st September - December 18th</li>
                        <li>1st February - 31st May</li>
                        <li>Total amount is payable upon booking.</li>
                        <li>$220 per night</li>
                    </ul>
                </div>
            </div>
            <h4>Terms and Conditions</h4>
                A full refund will be given prior to 30 days cancellation.
                50% refund will be given after 30 days of cancellation.
                In the event of a weekly or monthly booking the apartment will be serviced weekly unless by prior arrangement.
                Weekly Price - $1,250
                Monthly Price - $5,400
                BOOK NOW!
        </div>
    )
}

export default Pricing