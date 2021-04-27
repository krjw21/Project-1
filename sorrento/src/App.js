import logo from './logo.svg';
import './App.css';
import {Text} from './components/Text.js';
import {Button} from './components/Button.js';
import {List} from './components/List.js';

const items = [
  {"name" : "banana" , "color" : "yellow"},
  {"name" : "apple" , "color" : "green"},
  {"name" : "tomato" , "color" : "red"}
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Text name="Hello World!" color="purple"></Text>
        </p>
        <Text name="Barry" color="red"/>
        <Text name="Larry" color="yellow"/>
        <Text name="Harry" color="orange"/>
        <Button start={10}/>
        <Button start={100}/>
        <List items={items}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
