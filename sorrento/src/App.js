import Logo from './sorrento_by_the_sea_logo.jpg'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {Home} from './components/Home.js'
import {Apartment} from './components/Apartment.js'
import {Pricing} from './components/Pricing.js'
import {Booking} from './components/Booking.js'
import {Attractions} from './components/Attractions.js'
import {Contact} from './components/Contact.js'
import {NotFound} from './components/NotFound.js'
import {Header} from './components/Header.js'

const NavItems = [
  {"name" : "Home" , "link" : "/"},
  {"name" : "Apartment" , "link" : "/apartment"},
  {"name" : "Pricing" , "link" : "/pricing"},
  {"name" : "Booking" , "link" : "/booking"},
  {"name" : "Attractions" , "link" : "/attractions"},
  {"name" : "Contact" , "link" : "/contact"}
]
function App() {
  return (
    <div className="website">
      <Header logo = {Logo} nav={NavItems}/>
      <header className="header"></header>
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
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
