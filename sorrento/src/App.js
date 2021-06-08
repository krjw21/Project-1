import Logo from './sorrento_by_the_sea_logo.jpg'
import './App.css';
import './styles/Social.css'
import { Switch, Route } from 'react-router-dom'
import { Home } from './components/Home.js'
import { Apartment } from './components/Apartment.js'
import { Pricing } from './components/Pricing.js'
import { Booking } from './components/Booking.js'
import { Attractions } from './components/Attractions.js'
import { Contact } from './components/Contact.js'
import { NotFound } from './components/NotFound.js'
import { Header } from './components/Header.js'
import Social1 from './banners/facebook_small.png'
import Social2 from './banners/instagram_small.png'
import Social3 from './banners/twitter_small.png'
import Social4 from './banners/youtube-variation_small.png'

const NavItems = [
  { "name": "Home", "link": "/" },
  { "name": "Apartment", "link": "/apartment" },
  { "name": "Pricing", "link": "/pricing" },
  { "name": "Booking", "link": "/booking" },
  { "name": "Attractions", "link": "/attractions" },
  { "name": "Contact", "link": "/contact" }
]
function App() {
  return (
    <div className="website">
      <Header logo={Logo} nav={NavItems} />
      <main className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/apartment">
            <Apartment />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/attractions">
            <Attractions />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
      <footer className="footer">
      <div className="social">
                    <a>© 2021 Sorrento Apartment Victoria</a>
                    <a href="www.facebook.com/sorrentovictoria">
                        <img src= { Social1 } width="30" height="30"
                            alt="Sorrento Apartments on Facebook" /></a>
                    <a href="www.instagram.com/sorrentovictoria">
                        <img src= { Social2 } width="30" height="30"
                            alt="Sorrento Apartments on Instagram" /></a>
                    <a href="www.twitter.com/sorrentovictoria">
                        <img src= { Social3 } width="30" height="30"
                            alt="Sorrento Apartments on Youtube" /></a>
                            <a href="www.youtube.com/sorrentovictoria">
                        <img src= { Social4 } width="30" height="30"
                            alt="Sorrento Apartments on Youtube" /></a>
                    <a id="link" href="legals.html">Legals</a>
                </div>
      </footer>
    </div>
  );
}

export default App;
