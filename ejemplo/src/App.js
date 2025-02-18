import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a mi app en React
        </p>
        <a
          className="App-link"
          href="https://es.react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Faltan cosas que hacer con React
        </a>
      </header>
    </div>
  );
}

export default App;
