import '../styles/Home.css'
import { Banner1 } from '../components/Banner'
import BannerImage1 from '../banners/sorrentomap.png'

export function Home(props) {
    return (
        <div className="homecontainer">

            <div className="homecol1">
                <h2>Introduction</h2>
                <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KE0SbDBw-ok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="content">
                    <ul>
                        <li>
                            On the Mornington Peninsula (one hour from Melbourne), next door to Portsea.
                            </li>
                        <li>
                            Our apartment is a lazy 10-minute walk from the relaxed township of Sorrento that offers restaurants, cafes, a chemist, a supermarket, a butcher and more. It is located in a quiet avenue, just 4 houses from the beach. It is within easy walking distance of the beach and surf.
                            </li>
                        <li>
                            Your private luxury apartment consists of a spacious living area with leather lounge suite overlooking a sun drenched, tree-filled private garden.
                        </li>
                        <li>
                            A separate kitchenette has everything you need to make your stay is relaxed and comfortable. A queen sized bedroom and an amazing bathroom complete with free standing black bath entices you to relax and unwind.
                        </li>
                        <li>
                            Two TVs are sure to make everyone happy!  An undercover BBQ area with seating offers plenty of space to stretch out and enjoy that cup of freshly brewed coffee or a glass of wine.
                        </li>
                        <i>
                            <b>
                                <li>
                                    This is the perfect place for a home away from home!
                                </li>
                            </b>
                        </i>
                    </ul>
                </div>
            </div>

            <div className="homecol2">
                <h3>How to get to <i>Sorrento by the Sea</i></h3>
                <i>Sorrento by the Sea is easy to find! Just follow one of the directions below:</i>
                <h4>Option 1:</h4>
                <p>
                    From Melbourne, take the Monash Freeway, connect onto the Eastlink heading for Portsea, then onto the Peninsula link to Sorrento.
                </p>
                <h4>Option 2:</h4>
                <p>
                    Another option is the scenic drive along the coastline. Although longer, it allows you to experience the coastline from Port Melbourne to Sorrento.
                </p>
                <h4>Option 3:</h4>
                <p>
                    If you choose to come across on the Queenscliff/Sorrento Ferry, it is only a 2 minute drive from the Ferry Depot.
                </p>
                <p>
                    If you are a foot passenger we are happy to meet you at the Sorrento ferry. Just phone us on 0435-123-456 as you arrive.
                </p>
                <div>
                    <Banner1 image={BannerImage1} />
                </div>
            </div>

        </div>
    )
}

export default Home