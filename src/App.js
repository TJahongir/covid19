import React from 'react';
import ReactGA from 'react-ga';
import MainArea from './pages/MainArea';
import Nav from './components/Nav';
import Search from './components/Search';
import './App.scss';

function initializeReactGA() {
  ReactGA.initialize('UA-162098697-1');
  ReactGA.pageview('/homepage');
}

const App = () => {
  initializeReactGA();
  return (
    <main className='main'>
      <Nav />
      <Search />
      <MainArea />
    </main>
  );
};

export default App;
