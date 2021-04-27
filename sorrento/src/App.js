import Logo from './igloo-solid.png'
import './App.css';
import {Header} from './components/Header.js'

const NavItems = [
  {"name" : "Home" , "link" : "/home"},
  {"name" : "Apartment" , "link" : "/apartment"},
  {"name" : "Pricing" , "link" : "/pricing"},
  {"name" : "Booking" , "link" : "/booking"},
  {"name" : "Attractions" , "link" : "/attractions"},
  {"name" : "Contact" , "link" : "/contact"}
]
function App() {
  return (
    <div className="website">
      <Header logo = {Logo}/>
      <header className="header"></header>
      <main className="content"></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
