import '../styles/Apartment.css'
import { Banner1 } from './Banner'
import BannerImage1 from '../banners/Apartmentleft.jpg'
import BannerImage2 from '../banners/Apartmentright.jpg'

export function Apartment(props) {
    return (
        <div className="apartmentcontainer">
            <div>
                <Banner1 image={BannerImage1} />
            </div>
            <div className="apartmentcontent">
                <h2>The Apartment</h2>
                <p className="apartmentheader">
                    We offer a spacious living area overlooking a beautiful garden with a variety of additional features including:
                </p>
                <ul>
                    <i>
                        <li>
                            A separate Queen sized bedroom suite with quality linen that overlooks the garden.</li>
                        <li>
                            A modern and elegant bathroom with a luxurious bath that entices you to unwind and relax whilst overlooking the fernery in the private courtyard.</li>
                        <li>
                            A private entrance that allows you to come and go as you please.</li>
                        <li>
                            Car parking is close by with room for a boat as well!</li>
                        <li>
                            A spacious separate living area with leather furniture overlooking a private garden for you to enjoy.</li>
                        <li>
                            The kitchenette provides everything you will need for a relaxing breakfast. We include a coffee machine and a variety of coffee pods for your enjoyment. Two TVs will keep everyone happy along with a DVD player, stereo system and games galore.</li>
                        <li>
                            There is an undercover area complete with BBQ and shady seating that offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or glass of wine.</li>
                    </i>
                </ul>
                <p>
                    Sit back and relax and take a breather. Read a book, go for a beach walk, have a sleep-in. It’s your private space to enjoy.
                </p>
                <p>
                    Amenities include top quality bedding, fluffy towels, bath robes, vanity packs, hair dryer, beach towels and chairs, a picnic basket, coffee machine and pods, a microwave/convection oven, a toaster, a kettle, a sandwich maker, and BBQ tools.
                </p>
                <p>
                    We offer locally sourced provisions for a hearty breakfast together with home-made biscuits and chocolates.
                </p>
                <div className="contactlink">
                    <a href="contact">
                        Contact us for more information!
                    </a>
                </div>
            </div>
            <div>
                <Banner1 image={BannerImage2} />
            </div>
        </div>
    )
}

export default Apartment