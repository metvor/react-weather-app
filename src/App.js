import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="parent">
    <div className="App">
      <Weather defaultCity="Auckland"/>
    </div>
      <p className="code">
        <a href="https://github.com/metvor/react-weather-app" target="_blank" rel="noreferrer">Open source code by MV</a>
      </p>
    </div>
  );
}

