import React from 'react';
import logo from './virus.png';
import ReactGA from 'react-ga';
import './App.scss';

function initializeReactGA() {
  ReactGA.initialize('UA-162098697-1');
  ReactGA.pageview('/homepage');
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>More Info abt the Virus Coming...</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
