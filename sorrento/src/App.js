import logo from './logo.svg';
import './App.css';
import {Text} from './components/Text.js';
import {Button} from './components/Button.js';
import {List} from './components/List.js';

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
      <header className="header"></header>
      <main className="content"></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
