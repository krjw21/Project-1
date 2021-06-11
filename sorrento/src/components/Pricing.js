import '../styles/Pricing.css'
import { Banner1 } from '../components/Banner'
import BannerImage1 from '../banners/pricingimage.jpg'

export function Pricing(props) {
    return (
        <div className="pricingcontainer">
            <Banner1 image={BannerImage1} />
            <div className="grid2">
                <h2>Pricing</h2>
                All prices are listed for 2 people.
                <div className="seasons">
                    <div className="card">
                        <h3>Winter</h3>
                        From the 1st of June - 31st of August:
                        <ul>
                            <li>$200.00 per night</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>Summer</h3>
                        <p>Early Summer Period:<br />
                        From the 1st of September - 18th of December</p>
                        <p>Late Summer Period:<br />
                        From the 1st of February - 31st of May</p>
                        <ul>
                            <li>$220.00 per night</li>
                            <li>$1,250.00 per week</li>
                            <li>$5,400.00 per month</li>
                        </ul>
                    </div>
                    <h4>Terms and Conditions</h4>
                    <p>The apartment indoors areas are strictly non-smoking.</p>
                    <p>Total amount must be fully paid upon booking:</p>
                    <li>A full refund will be given if cancellation date is at least 30 days prior to booking date.</li><br />
                    <li>A 50% refund will be given if cancellation date is within 30 days of the booking date.</li>
                    <p>In the event of a weekly or monthly booking the apartment will be serviced weekly unless by prior arrangement.</p>
                    <i>Pets are allowed upon approval!</i><br /><br />
                    <div className="pricingbottom">
                        <p>SPOTS ARE LIMITED.</p>
                    </div>
                    <div className="bookinglink">
                        <a href="booking"><b>BOOK NOW!</b></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing