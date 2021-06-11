import '../styles/Attractions.css'
import { Banner1 } from '../components/Banner'
import BannerImage1 from '../banners/attractionsimage.jpg'

export function Attractions(props) {
    return (
        <div className="gridcontainer">
            <div>
            <Banner1 image={BannerImage1} />
            </div>
            <div className="attractions">
                <h2>Attractions In The Area</h2>
                <div className="content">
                    <li><b>Wineries & Restaurants</b></li>
                    <p>There are more than 55 wineries to choose from - offering cellar door sales, restaurants, cafes and tours. Along the way discover a foodie’s paradise.<br/> Meet the growers, producers, providers and chefs. Experience the fun of picking your own produce or buying dinner ingredients at the farm gate. Dine with views of the sea, lakes and vineyards.</p>
                    <li><b>Golf</b></li>
                    <p>The Mornington Peninsula is blessed with 19 courses that both challenge and excite. Many golf courses provide the most exhilarating views over Port Phillip Bay, Western Port and Bass Strait. The sand hills and coastal hinterland provide wonderful examples of links, resort and traditional courses. Visitors are always welcome.</p>
                    <li><b>Peninsula Hot Springs</b></li>
                    <p>Another world awaits. Enjoy the thermal bathing area or book a private indoor or outdoor hot springs bath experience.<br/> Activities include reflexology treatments, foot and hand baths, sauna, steam baths, cold plunges and yoga.<br/> The cafe at the bath house provides light meals and gourmet pizzas. Feel revitalised and relaxed at the same time.</p>
                    <li><b>Queenscliff-Sorrento Ferry</b></li>
                    <p>There's no better way to cross the Bay either with your car or as a foot passenger. It only takes 40 minutes.<br/> Spot the playful dolphins whilst enjoying a coffee and light refreshments. The ferries run every day of the year on the hour. Wonderful restaurants at historic Queenscliff on the Bellarine peninsula offer perfect lunchtime adventures.</p>
                    <li><b>Walking Tracks</b></li>
                    <p>Fabulous walking tracks in any direction for all ages. Beautiful beach walks, amazing cliff top strolls and for the more serious walkers, a 100km walk combines the Bay trial, National Parks and the two Bays walk through the hinterland.</p>
                    <li><b>Arts and Culture</b></li>
                    <p>The Mornington Peninsula hosts an array of exhibitions and galleries, featuring fine art, sculpture, ceramics, jewelry, hand blown glass and clothing. Small local galleries and craft markets are in abundance across the region.</p>
                    <li><b>Shopping Escapades</b></li>
                    <p>Lovely, leisurely shopping - for pure pleasure - is listed as the number one activity for holidaymakers.</p>
                    <p>Sorrento and Mornington will not disappoint. Bookshops, giftware, home living and of course the odd handbag or "must have that" top is yours for the exploring.</p>
                    <li><b>Water Sports</b></li>
                    <p>Endless Fun for all the family. Sailing, fishing, kayaking, paddle boarding, snorkeling, scuba diving and surfing are all on offer, not to mention the cricket match on the beach.</p>
                </div>
            </div>
        </div>
    )
}

export default Attractions