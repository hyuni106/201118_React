
import './App.css';
import Hello from './today/Hello.js'
import Goodbye from './today/Goodbye.js'

function App() {
  var logo = "4a2d87de1951.jpg"
  var text = "¿🙃"
  var number = (100 + 30) * 7 / 6

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
        <p>
          {text}
        </p>
        <a
          className="App-link"
          href="https://naver.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          생각하러 가기🤔
        </a>
        <Goodbye />
      </header>
    </div>
  );
}

export default App;
