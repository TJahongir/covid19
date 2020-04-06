import React from 'react';
import ReactGA from 'react-ga';
import Search from './components/Search';
import Dashboard from './components/Dashboard';
import './App.scss';

function initializeReactGA() {
  ReactGA.initialize('UA-162098697-1');
  ReactGA.pageview('/homepage');
}

const App = () => {
  initializeReactGA();
  return (
    <main className='main'>
      <Search />
      <Dashboard />
    </main>
  );
};

export default App;
