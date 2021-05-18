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
                    <h4>Terms and Conditions</h4>
                    <p>A full refund will be given prior to 30 days cancellation</p>
                    <p>50% refund will be given after 30 days of cancellation.</p>
                    <p>In the event of a weekly or monthly booking the apartment will be serviced weekly unless by prior arrangement.</p>
                    <p>Weekly Price     $1,250</p>
                    <p>Monthly Price $5,400</p>
                    <b>BOOK NOW!</b>
                </div>
            </div>
        </div>
    )
}

export default Pricing